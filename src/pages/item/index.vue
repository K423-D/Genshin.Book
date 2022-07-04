<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import { useGenshinItemStore } from '/@/store/modules/genshinItem';
  // const arr = [
  //   {
  //     id: 10000016,
  //     name: '迪卢克',
  //     star: 0,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png',
  //   },
  //   {
  //     id: 10000042,
  //     name: '刻晴',
  //     star: 1,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png',
  //   },
  //   {
  //     id: 10000022,
  //     name: '温迪',
  //     star: 2,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png',
  //   },
  //   {
  //     id: 10000046,
  //     name: '胡桃',
  //     star: 3,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Hutao.png',
  //   },
  //   {
  //     id: 10000030,
  //     name: '钟离',
  //     star: 4,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png',
  //   },
  //   {
  //     id: 10000037,
  //     name: '甘雨',
  //     star: 5,
  //     url: 'https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png',
  //   },
  // ];
  // const genshinItems = reactive({
  //   avatars: arr,
  //   weapons: arr,
  //   reliquaries: arr,
  // });

  const genshinItems = useGenshinItemStore();
  genshinItems.fetchAvatar();
  genshinItems.fetchWeapon();
  genshinItems.fetchReliquries();

  onMounted(() => {});
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 角色 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-cyan-500">角色</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20">
        <li
          v-for="(item, index) in genshinItems.avatars"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li>
      </ul>
    </article>
    <!-- 武器 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-cyan-500">武器</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20">
        <li
          v-for="(item, index) in genshinItems.weapons"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li>
      </ul>
    </article>
    <!-- 圣遗物 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-cyan-500">圣遗物</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20">
        <li
          v-for="(item, index) in genshinItems.reliquaries"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li>
      </ul>
    </article>
  </div>
</template>
<style lang="less" scoped></style>
