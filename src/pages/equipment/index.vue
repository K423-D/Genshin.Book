<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import AvatarSelect from '/@/components/AvatarSelect/index.vue';

  import useAvatarReliquaryUsage from '/@/hooks/useAvatarReliquaryUsage';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import { Item } from '/@/store/modules/genshinItem/types';
  import useAvatarWeaponUsage from '/@/hooks/useAvatarWeaponUsage';

  document.title = `圣遗物使用数据 | Genshin.Book`;

  const genshinItem = useGenshinItem();
  const avatarReliquaryUsage = useAvatarReliquaryUsage();
  const avatarWeaponUsage = useAvatarWeaponUsage();

  const currentAvatar = ref<number>(10000002);
  const currentReliquaryUsage = computed(() => {
    const res = avatarReliquaryUsage.data.find((item) => item.avatar == currentAvatar.value);
    return res;
  });
  const currentWeaponUsage = computed(() => {
    const res = avatarWeaponUsage.data.find((item) => item.avatar == currentAvatar.value);
    return res;
  });
  const changeAvatar = (avatar: Item | undefined) => {
    currentAvatar.value = avatar == undefined ? currentAvatar.value : avatar.id;
  };

  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-red-600">角色装备使用数据</span>
        </h1>
        <h4>来自上传的数据</h4>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li class="px-0 pt-4 md:px-4 sm:pt-5 md:pb-8">
          <!-- <div class="flex justify-center items-center">
            <ItemBox
              class="max-w-fit"
              :name="genshinItem.avatarMap[currentAvatar].name"
              :url="genshinItem.avatarMap[currentAvatar].url"
              :star="genshinItem.avatarMap[currentAvatar].star"
            />
          </div> -->
          <AvatarSelect
            v-if="genshinItem.avatarMap[currentAvatar].name"
            :avatar="genshinItem.avatarMap[currentAvatar] || {}"
            :avatars="genshinItem.avatars"
            @selected="changeAvatar"
          />
          <div class="flex justify-center items-center my-3 text-sm">
            <span>点击头像选择角色</span>
          </div>
          <el-divider>
            <span class="text-slate-900 dark:text-slate-200 bg-transparent"> 武器 </span>
          </el-divider>
          <ul class="flex flex-wrap justify-center items-center">
            <el-card
              v-if="currentAvatar"
              v-for="(weapon, j) in currentWeaponUsage?.weapons"
              :key="j"
              class="my-3 mx-2 md:mx-4 lg:mx-4"
              ><li
                class="flex flex-wrap justify-between items-center md:px-2 rounded-lg border-red-600 border-opacity-25 dark:border-opacity-50 md:mx-4 lg:mx-4"
              >
                <div
                  class="flex justify-between items-center pr-2 md:pr-6 border-r border-gray-800 dark:border-gray-200 border-opacity-25 dark:border-opacity-25"
                >
                  <ItemBox
                    class="mr-0 md:mr-2 lg:mr-2 first:md:mr-4"
                    :name="genshinItem.weaponMap[weapon.id].name"
                    :url="genshinItem.weaponMap[weapon.id].url"
                    :star="genshinItem.weaponMap[weapon.id].star"
                  />
                  <div class="mx-2 md:mr-4 md:ml-6 lg:ml-6 lg:mr-4" v-if="weapon.id < 0">+</div>
                </div>
                <div class="text-center pl-2 md:pl-10 lg:pl-10 md:text-lg lg:text-lg">{{
                  `${weapon.value}%`
                }}</div>
              </li>
            </el-card>
          </ul>
          <el-divider>
            <span class="text-slate-900 dark:text-slate-200 bg-transparent"> 圣遗物 </span>
          </el-divider>
          <ul class="flex flex-wrap justify-center items-center">
            <el-card
              v-if="currentAvatar"
              v-for="(usage, j) in currentReliquaryUsage?.reliquaryUsage"
              :key="j"
              class="my-3 mx-2 md:mx-4 lg:mx-4"
              ><li
                class="flex flex-wrap justify-between items-center md:px-2 rounded-lg border-red-600 border-opacity-25 dark:border-opacity-50 md:mx-4 lg:mx-4"
              >
                <div
                  class="flex justify-between items-center pr-2 md:pr-6"
                  :class="
                    k == 1 || usage.ids.length == 1
                      ? 'border-r border-gray-800 dark:border-gray-200 border-opacity-25 dark:border-opacity-25'
                      : ''
                  "
                  v-for="(reliquary, k) in usage.ids"
                  :key="k"
                >
                  <ItemBox
                    class="mr-0 md:mr-2 lg:mr-2 first:md:mr-4"
                    :name="`${reliquary.suit}件套`"
                    :url="genshinItem.reliquaryMap[reliquary.id].url"
                    :star="genshinItem.reliquaryMap[reliquary.id].star"
                  />
                  <div
                    class="ml-4 mr-2 md:mr-4 md:ml-6 lg:ml-6 lg:mr-4"
                    v-if="usage.ids.length == 2 && k == 0"
                    >+</div
                  >
                </div>
                <div class="text-center pl-2 md:pl-10 lg:pl-10 md:text-lg lg:text-lg">{{
                  `${usage.value}%`
                }}</div>
              </li>
            </el-card>
          </ul>
        </li>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
