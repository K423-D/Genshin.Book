<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import { useAppStore } from '/@/store';
  import userOverview from '/@/hooks/userOverview';
  import useAvatarParticipation from '/@/hooks/useAvatarParticipation';

  const appStore = useAppStore();
  const overview = userOverview();
  const currentUsage = computed(() => {
    return avatarParticipation.data[currentFloor.value - 9].avatarUsage;
  });
  const genshinItem = useGenshinItem();
  const avatarParticipation = useAvatarParticipation();
  const currentFloor = ref(9);

  onMounted(() => {});
  const handleFloorChange = (index: number) => {
    currentFloor.value = index + 8;
  };
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
            <span>全部用户数量：</span><span>{{ overview?.totalPlayerCount }}</span>
          </div>
        </li>
        <li class="px-3 md:px-4 md:pb-8">
          <div>
            <span>当期提交深渊数据用户数量：</span><span>{{ overview?.collectedPlayerCount }}</span>
          </div>
        </li>
        <li class="px-3 md:px-4 md:pb-8">
          <div>
            <span>当期满星用户数量：</span><span>{{ overview?.fullStarPlayerCount }}</span>
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
    <div class="flex justify-center items-center w-full mb-2 md:mb-0 lg:mb-0">
      <el-button
        v-for="i in 4"
        :key="i"
        color="#9333EA"
        size="small"
        :dark="appStore.theme == 'dark'"
        :disabled="i + 8 == currentFloor"
        @click="handleFloorChange(i)"
        >{{ `第${i + 8}层` }}</el-button
      >
    </div>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        v-if="avatarParticipation?.data?.length !== 0"
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li class="px-3 md:px-4 md:pb-8">
          <!-- <div class="flex justify-center items-center w-full" :class="index != 0 ? 'mt-8' : ''">
            <span>{{ `第${item.floor}层角色使用数据` }}</span>
          </div> -->
          <ul
            class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
          >
            <li v-for="(usage, j) in currentUsage" :key="j * 1.1" class="px-2 py-2 md:px-4 md:pb-8">
              <ItemBox
                :name="`${usage.value}%`"
                :url="genshinItem.avatarMap[usage.id].url"
                :star="genshinItem.avatarMap[usage.id].star"
              /> </li
          ></ul>
        </li>
      </ul>
    </article>
    <!-- 圣遗物数据 -->
    <!-- <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
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
        <li
          v-for="(item, index) in genshinItems.reliquaries"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li>
      </ul>
    </article> -->
  </div>
</template>
<style lang="less" scoped></style>
