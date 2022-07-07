<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import AvatarSelect from '/@/components/AvatarSelect/index.vue';

  import useAvatarReliquaryUsage from '/@/hooks/useAvatarReliquaryUsage';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  const genshinItem = useGenshinItem();
  const avatarReliquaryUsage = useAvatarReliquaryUsage();
  document.title = `圣遗物使用数据 | Genshin.Book`;
  console.log(avatarReliquaryUsage.data);
  const currentAvatar = ref<number>(10000002);
  const currentUsage = computed(() => {
    const res = avatarReliquaryUsage.data.find((item) => item.avatar == currentAvatar.value);
    return res;
  });

  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 角色 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-red-600">角色圣遗物使用数据</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8">
          <!-- <div class="flex justify-center items-center">
            <ItemBox
              class="max-w-fit"
              :name="genshinItem.avatarMap[currentAvatar].name"
              :url="genshinItem.avatarMap[currentAvatar].url"
              :star="genshinItem.avatarMap[currentAvatar].star"
            />
          </div> -->
          <AvatarSelect
            :avatar="genshinItem.avatarMap[currentAvatar]"
            :avatars="genshinItem.avatars"
          />
          <div class="flex justify-center items-center mt-2 text-sm">
            <span>点击头像选择角色</span>
          </div>
          <ul class="flex flex-wrap justify-between items-center">
            <li
              v-if="currentAvatar"
              class="flex flex-wrap justify-between items-center py-2 border mx-1 mt-4 px-2 rounded-lg border-red-600 border-opacity-25 dark:border-opacity-50 md:py-4 lg:py-4 md:px-6 lg:px-6 md:mx-4 lg:mx-4"
              v-for="(usage, j) in currentUsage?.reliquaryUsage"
              :key="j"
            >
              <div
                class="flex justify-between items-center pr-2"
                :class="
                  k == 1 || usage.ids.length == 1
                    ? 'border-r border-gray-800 dark:border-gray-200 border-opacity-25 dark:border-opacity-25'
                    : ''
                "
                v-for="(reliquary, k) in usage.ids"
                :key="k"
              >
                <ItemBox
                  class="mr-2"
                  :name="`${reliquary.suit}件套`"
                  :url="genshinItem.reliquaryMap[reliquary.id].url"
                  :star="genshinItem.reliquaryMap[reliquary.id].star"
                />
                <div class="mx-2 md:mx-6 lg:mx-6" v-if="usage.ids.length == 2 && k == 0">+</div>
              </div>
              <div class="text-center ml-2 w-14">{{ `${usage.value}%` }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
