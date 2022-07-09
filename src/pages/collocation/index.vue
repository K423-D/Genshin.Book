<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import useTeamCollocation from '/@/hooks/useTeamCollocation';
  import { Item } from '/@/store/modules/genshinItem/types';
  // import { CollocationEntity } from '/@/store/modules/teamCollocation/types';

  document.title = `角色搭配 | Genshin.Book`;

  const genshinItem = useGenshinItem();
  const teamCollocation = useTeamCollocation();
  const currentAvatar = ref<number>(0);
  const currentCollocation = computed(() => {
    if (currentAvatar.value === 0) {
      return teamCollocation.data;
    } else {
      const res = teamCollocation.data.find((item) => item.avatar === currentAvatar.value);
      return [res];
    }
  });
  const changeAvatar = (avatar: Item | undefined) => {
    currentAvatar.value = avatar == undefined ? 0 : avatar.id;
  };
  console.log(teamCollocation);

  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 角色搭配 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-amber-300">角色搭配数据</span>
        </h1>
        <h5 class="text-sm">展示至多八位和角色搭配最多的队友</h5>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 md:px-40 lg:px-40 xl:px-20"
      >
        <li class="w-full mt-6 md:mt-0 lg:mt-0 flex flex-col">
          <AvatarSelect
            :avatar="genshinItem.avatarMap[currentAvatar] || {}"
            :avatars="genshinItem.avatars"
            @selected="changeAvatar"
          />
          <div class="flex justify-center items-center mt-2 text-sm">
            <span>点击头像选择角色</span>
          </div>
        </li>
        <li
          v-for="(item, index) in currentCollocation"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-10 sm:pt-5 md:pb-8"
        >
          <el-card>
            <div class="flex justify-between items-center">
              <div
                class="pr-5 px-2 md:pr-8 md:pl-0 lg:ml-4 mr-4 border-r border-gray-800 dark:border-gray-200 border-opacity-25 dark:border-opacity-25"
              >
                <ItemBox
                  :name="genshinItem.avatarMap[item?.avatar || currentAvatar].name"
                  :url="genshinItem.avatarMap[item?.avatar || currentAvatar].url"
                  :star="genshinItem.avatarMap[item?.avatar || currentAvatar].star"
                />
              </div>
              <div class="flex flex-wrap justify-center items-center md:mx-2">
                <div
                  v-for="(collocation, index) in item?.collocations"
                  :key="index"
                  class="mr-1.5 py-2 md:mx-2 lg:mx-2"
                >
                  <ItemBox
                    @click="currentAvatar = collocation.id"
                    :name="`${collocation.value}%`"
                    :url="genshinItem.avatarMap[collocation.id].url"
                    :star="genshinItem.avatarMap[collocation.id].star"
                  />
                </div>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
