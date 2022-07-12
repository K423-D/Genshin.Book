<script setup lang="ts">
  import useTeamCombination from '../../hooks/useTeamCombination';
  import Header from '/@/components/Header/index.vue';
  import useGenshinItem from '/@/hooks/useGenshinItem';

  document.title = `角色搭配 | Genshin.Book`;
  const currentFloor = ref(12);
  const currentIndex = ref(3);
  const genshinItem = useGenshinItem();
  const teamCombination = useTeamCombination();

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
          <span class="border-b-2 border-b-violet-500">队伍搭配数据</span>
        </h1>
        <h5 class="text-sm">深渊各层最常用的一些队伍搭配</h5>
      </div>
    </main>
    <div class="flex justify-center items-center my-5">
      <el-radio-group v-model="currentFloor">
        <el-radio-button :label="12">第12层</el-radio-button>
        <el-radio-button :label="11">第11层</el-radio-button>
        <el-radio-button :label="10">第10层</el-radio-button>
        <el-radio-button :label="9">第9层</el-radio-button>
      </el-radio-group>
    </div>
    <div class="flex justify-center items-center my-5">
      <el-radio-group v-model="currentIndex" size="small">
        <el-radio-button :label="1">第1间</el-radio-button>
        <el-radio-button :label="2">第2间</el-radio-button>
        <el-radio-button :label="3">第3间</el-radio-button>
      </el-radio-group>
    </div>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 px-5 sm:px-10 md:px-10 lg:px-10 xl:px-10"
      >
        <!-- <li class="w-full mt-6 md:mt-0 lg:mt-0 flex flex-col">
          <AvatarSelect
            :avatar="genshinItem.avatarMap[currentAvatar] || {}"
            :avatars="genshinItem.avatars"
            @selected="changeAvatar"
          />
          <div class="flex justify-center items-center mt-2 text-sm">
            <span>点击头像选择角色</span>
          </div>
        </li> -->
        <li
          v-for="(item, index) in teamCombination.data"
          :key="index * 1.1"
          class="px-3 md:px-10 md:w-full"
        >
          <div v-if="item.level.floor === currentFloor && item.level.index === currentIndex">
            <div class="text-center text-lg font-bold">
              {{ `第${item.level.floor}层 - 第${item.level.index}间` }}
            </div>
            <div class="flex flex-wrap justify-center items-center">
              <div
                v-for="(team, j) in item.teams"
                :key="j"
                class="flex justify-between items-center px-2"
              >
                <el-card class="my-4 flex flex-wrap justify-center items-center">
                  <div class="flex flex-wrap justify-center items-center">
                    <div
                      class="flex flex-col justify-between items-center md:border-r md:dark:border-gray-600"
                    >
                      <div class="flex justify-between items-center">
                        <ItemBox
                          class="mx-1 md:mx-2"
                          v-for="(id, k) in team.id.upHalf"
                          :key="k"
                          :name="genshinItem.avatarMap[id].name"
                          :url="genshinItem.avatarMap[id].url"
                          :star="genshinItem.avatarMap[id].star"
                        />
                      </div>
                      <span class="text-sm my-2">上半</span>
                    </div>
                    <div class="flex flex-col justify-between items-center">
                      <div class="flex justify-between items-center">
                        <ItemBox
                          v-for="(id, k) in team.id.downHalf"
                          class="mx-1 md:mx-2"
                          :key="k"
                          :name="genshinItem.avatarMap[id].name"
                          :url="genshinItem.avatarMap[id].url"
                          :star="genshinItem.avatarMap[id].star"
                        />
                      </div>
                      <span class="text-sm my-2">下半</span>
                    </div>
                  </div>
                  <el-divider class="my-0" />
                  <div class="text-sm text-center mt-2 font-bold">{{
                    `使用人数：${team.value}`
                  }}</div>
                </el-card>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped>
  .el-divider--horizontal {
    margin: 0;
  }
  .el-divider--horizontal .my-24 {
    margin: 24;
  }
  :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
    background-color: rgb(139 92 246) !important;
    border-color: rgb(139 92 246) !important;
    box-shadow: -1px 0 0 0 rgb(139 92 246) !important ;
  }
</style>
