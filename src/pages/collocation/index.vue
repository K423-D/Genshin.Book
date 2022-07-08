<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  import ItemBox from '/@/components/ItemBox/index.vue';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import useTeamCollocation from '/@/hooks/useTeamCollocation';

  const genshinItems = useGenshinItem();
  const teamCollocation = useTeamCollocation();
  document.title = `角色搭配 | Genshin.Book`;

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
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-amber-300">角色搭配数据</span>
        </h1>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li
          v-for="(item, index) in teamCollocation.data"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <el-card>
            <div class="flex justify-between items-center">
              <div
                class="pr-4 mr-4 border-r border-gray-800 dark:border-gray-200 border-opacity-25 dark:border-opacity-25"
              >
                <ItemBox
                  :name="genshinItems.avatarMap[item.avatar].name"
                  :url="genshinItems.avatarMap[item.avatar].url"
                  :star="genshinItems.avatarMap[item.avatar].star"
                />
              </div>
              <div class="flex flex-wrap justify-start items-center md:space-x-5">
                <div
                  v-for="(collocation, index) in item.collocations"
                  :key="index"
                  class="mr-1.5 py-2"
                >
                  <ItemBox
                    :name="`${collocation.value}%`"
                    :url="genshinItems.avatarMap[collocation.id].url"
                    :star="genshinItems.avatarMap[collocation.id].star"
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
