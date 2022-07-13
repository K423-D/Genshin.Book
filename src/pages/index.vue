<script setup lang="ts">
  import { version } from '../../package.json';
  import SvgIcon from '/@/components/SvgIcon/index.vue';
  import { useAppStore } from '/@/store/modules/app';
  import { framework } from './data';
  import Header from '/@/components/Header/index.vue';

  // import { useGenshinItemStore } from '../store/modules/genshinItem';
  import Footer from '../components/footer/index.vue';
  import { getToken } from '../utils/auth';
  import userOverview from '../hooks/userOverview';
  // import useGenshinItem from '../hooks/useGenshinItem';
  const appStore = useAppStore();
  const overview = userOverview();
  const data = ref(framework);
  const token = getToken();
  if (!token) {
    appStore.fetchAccessToken();
  }
  document.title = `首页 | Genshin.Book`;
  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header />
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-20 mb-4 text-4xl tracking-tight font-blimone sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-200 md:mt-32 lg:mt-32 xl:mt-32 2xl:mt-32"
        >
          <span class="mr-4"> {{ appStore.h1 }}</span>
          <span
            class="text-xs mt-2 absolute tracking-wide version rounded-full px-4 py-1 lg:text-base bg-gradient-to-br from-rose-300 to-rose-500"
            >{{ version }}</span
          >
        </h1>
        <p class="text-2xl text-slate-800 dark:text-slate-400">你好，旅行者~</p>
      </div>
    </main>
    <ul
      class="flex flex-wrap items-center justify-center py-4 text-sm md:hidden lg:hidden xl:hidden"
    >
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
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-10 xl:px-10">
        <li
          v-for="(item, index) in data"
          :key="index * 1.1"
          class="px-3 pt-4 pb-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <figure
            class="flex-none shadow-lg rounded-xl w-80 md:w-100 hover:scale-105 transition-all"
          >
            <blockquote
              class="px-6 py-8 text-lg font-semibold leading-8 bg-gray-100 rounded-t-xl md:p-5 md:text-base md:leading-8 text-slate-700 dark:text-slate-300 dark:bg-slate-800 dark:highlight-white/5"
            >
              <SvgIcon name="svg-marks" :color="'#374151'" />
              <p v-html="item.content"></p>
            </blockquote>
            <figcaption
              class="flex items-center px-4 py-6 space-x-4 leading-6 text-white bg-gradient-to-br rounded-b-xl"
              :class="item.color"
            >
              <div
                class="flex items-center justify-center flex-none bg-white rounded-full w-14 h-14"
              >
                <img :src="item.avatar" class="w-12 h-12 rounded-full" loading="lazy" />
              </div>
              <div class="flex-auto">
                <div class="text-base font-semibold dark:text-slate-200">
                  <p> {{ item.title }}</p>
                  <p class="text-sm">{{ item.author }}</p>
                </div>
              </div>
              <cite class="flex">
                <router-link
                  :to="item.path"
                  class="transition-opacity duration-200 opacity-50 hover:opacity-75"
                >
                  <SvgIcon :name="item.icon" />
                </router-link>
              </cite>
            </figcaption>
          </figure>
        </li>
      </ul>
    </article>
    <Footer />
  </div>
</template>

<style lang="less" scoped>
  .version {
    display: inline-block;
    // padding: 6px;
    margin-left: 6px;
  }
</style>
