<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import { useAvatarParticipationStore } from '/@/store/modules/avatarParticipation';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import { useOverviewStore } from '/@/store/modules/overview';
  import useGenshinItem from '/@/hooks/useGenshinItem';

  const overview = useOverviewStore();
  const avatarParticipation = useAvatarParticipationStore();
  const genshinItem = useGenshinItem();

  if (
    overview.totalPlayerCount === 0 &&
    overview.collectedPlayerCount === 0 &&
    overview.fullStarPlayerCount === 0
  ) {
    overview.fetchOverview();
  }

  if (avatarParticipation.data.length === 0) {
    avatarParticipation.fetchAvatarParticipation();
  }
  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 概览 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-purple-600">概览</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-0 sm:px-20 lg:px-36 xl:px-20">
        <li class="px-3 md:px-4 md:pb-8">
          <div>
            <span>全部用户数量：</span><span>{{ overview.totalPlayerCount }}</span>
          </div>
        </li>
        <li class="px-3 md:px-4 md:pb-8">
          <div>
            <span>当期提交深渊数据用户数量：</span><span>{{ overview.collectedPlayerCount }}</span>
          </div>
        </li>
        <li class="px-3 md:px-4 md:pb-8">
          <div>
            <span>当期满星用户数量：</span><span>{{ overview.fullStarPlayerCount }}</span>
          </div>
        </li>
      </ul>
    </article>
    <!-- 角色出场数据 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10"
        >
          <span class="border-b-2 border-b-purple-600">角色出场数据</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        v-if="avatarParticipation.data.length !== 0"
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li v-for="item in avatarParticipation.data" :key="item.floor" class="px-3 md:px-4 md:pb-8">
          <div class="flex justify-center items-center w-full">
            <span>{{ `第${item.floor}层角色使用数据` }}</span>
          </div>
          <ul
            class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
          >
            <li v-for="(usage, j) in item.avatarUsage" :key="j * 1.1" class="px-3 md:px-4 md:pb-8">
              <ItemBox
                :name="`${usage.value}%`"
                :url="genshinItem.avatarMap[usage.id].url"
                :star="genshinItem.avatarMap[usage.id].star"
              /> </li
          ></ul>
        </li>
      </ul>
      <div v-else>没有数据</div>
    </article>
    <!-- 圣遗物数据 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-purple-600">圣遗物数据</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 pb-8 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <!-- <li
          v-for="(item, index) in genshinItems.reliquaries"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li> -->
      </ul>
    </article>
  </div>
</template>
<style lang="less" scoped></style>
