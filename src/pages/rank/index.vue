<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  // import type { EChartsOption } from 'echarts';
  import Header from '/@/components/Header/index.vue';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import useRank from '/@/hooks/useRank';
  import { Search } from '@element-plus/icons-vue';
  import { ElMessage } from 'element-plus';

  document.title = `深渊数据排行 | Genshin.Book`;

  const genshinItem = useGenshinItem();

  const uid = ref<number | string>();
  const rank = useRank();

  const queryRank = (uid) => {
    if (!uid) {
      ElMessage.warning('请输入uid');
      return;
    }

    const t = localStorage.getItem('rank-cd');
    const now = new Date().getTime();
    if (parseInt(`${t}`) + 30 * 1000 > now) {
      ElMessage.error('30s内只能查询一次哦~');
    } else {
      localStorage.removeItem('rank-cd');
      rank.fetchRank(uid);
    }
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
          <span class="border-b-2 border-b-lime-700">深渊数据排行</span>
        </h1>
        <h5 class="text-sm">数据随时间更新，仅供参考</h5>
      </div>
    </main>
    <div class="flex justify-center items-center py-6">
      <div>
        <el-input v-model="uid" placeholder="请输入uid" class="input-with-select">
          <template #append>
            <el-button @click="queryRank(uid)" :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <div class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6">
        <el-card
          v-if="rank.damage.avatarId && rank.takeDamage.avatarId"
          class="my-3 mx-2 md:mx-4 lg:mx-4"
        >
          <div class="flex flex-wrap justify-center items-center py-2 px-6">
            <div class="flex justify-between items-center">
              <div class="pr-8">
                <ItemBox
                  :name="genshinItem.avatarMap[rank.damage.avatarId].name"
                  :url="genshinItem.avatarMap[rank.damage.avatarId].url"
                  :star="genshinItem.avatarMap[rank.damage.avatarId].star"
                />
              </div>
              <div class="flex flex-col justify-start items-start text-sm font-bold">
                <div>{{ `最强一击：${rank.damage.value}` }}</div>
                <div class="my-2">{{
                  `超过了 ${rank.damage.percent}% 的${
                    genshinItem.avatarMap[rank.damage.avatarId].name
                  }`
                }}</div>
                <div>{{ `超过了 ${rank.damage.percentTotal}% 的总记录` }}</div>
              </div>
            </div>
          </div>
        </el-card>
        <el-card
          v-if="rank.damage.avatarId && rank.takeDamage.avatarId"
          class="my-3 mx-2 md:mx-4 lg:mx-4"
        >
          <div
            v-if="rank.damage.avatarId && rank.takeDamage.avatarId"
            class="flex flex-wrap justify-center items-center py-2 px-6"
          >
            <div class="flex justify-between items-center">
              <div class="pr-8">
                <ItemBox
                  :name="genshinItem.avatarMap[rank.takeDamage.avatarId].name"
                  :url="genshinItem.avatarMap[rank.takeDamage.avatarId].url"
                  :star="genshinItem.avatarMap[rank.takeDamage.avatarId].star"
                />
              </div>
              <div class="flex flex-col justify-start items-start text-sm font-bold">
                <div>{{ `承受伤害：${rank.takeDamage.value}` }}</div>
                <div class="my-2">{{
                  `少于 ${rank.takeDamage.percent}% 的${
                    genshinItem.avatarMap[rank.takeDamage.avatarId].name
                  }`
                }}</div>
                <div>{{ `少于 ${rank.takeDamage.percentTotal}% 的总记录` }}</div>
              </div>
            </div>
          </div>
          <!-- <el-empty v-else description="无数据" /> -->
        </el-card>
        <el-empty v-else description="无数据" />
      </div>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped>
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #4d7c0f inset !important;
  }
</style>
