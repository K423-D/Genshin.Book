<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  // import ItemBox from '/@/components/ItemBox/index.vue';
  import useAvatarReliquaryUsage from '/@/hooks/useAvatarReliquaryUsage';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  const genshinItem = useGenshinItem();
  const avatarReliquaryUsage = useAvatarReliquaryUsage();
  document.title = `圣遗物使用数据 | Genshin.Book`;
  console.log(avatarReliquaryUsage.data);

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
        <li
          v-for="(item, index) in avatarReliquaryUsage.data"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <div class="flex justify-center items-center">
            <ItemBox
              class="max-w-fit"
              :name="genshinItem.avatarMap[item.avatar].name"
              :url="genshinItem.avatarMap[item.avatar].url"
              :star="genshinItem.avatarMap[item.avatar].star"
            />
          </div>
          <ul class="flex flex-wrap">
            <li
              class="flex flex-wrap justify-start items-center py-4 w-full"
              v-for="(usage, j) in item.reliquaryUsage"
              :key="j"
            >
              <div
                class="flex justify-between items-center px-2"
                :class="
                  k == 1 || usage.ids.length == 1
                    ? 'border-r border-slate-200 dark:border-slate-800'
                    : ''
                "
                v-for="(reliquary, k) in usage.ids"
                :key="k"
              >
                <ItemBox
                  class="mr-2"
                  :name="genshinItem.reliquaryMap[reliquary.id].name"
                  :url="genshinItem.reliquaryMap[reliquary.id].url"
                  :star="genshinItem.reliquaryMap[reliquary.id].star"
                />
                <div>{{ `${reliquary.suit}件套` }}</div>
                <div class="ml-2" v-if="usage.ids.length == 2 && k == 0">+</div>
              </div>
              <div class="text-center ml-2">{{ `${usage.value}%` }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped></style>
