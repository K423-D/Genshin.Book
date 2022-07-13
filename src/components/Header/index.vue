<script setup lang="ts">
  import SvgIcon from '../SvgIcon/index.vue';
  // import { ref } from 'vue'
  import { useDark, useToggle } from '@vueuse/core';
  import { useAppStore } from '/@/store';
  import { Sunny, Moon, Refresh, InfoFilled } from '@element-plus/icons-vue';
  import userOverview from '/@/hooks/userOverview';
  import { ElMessage } from 'element-plus';

  // const title = ref('I want to study typescript')
  // 检测浏览器系统主题
  // const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const refreshContent = ref('页面显示异常时，尝试此操作。');
  const confirmTitle = ref('将清空所有缓存数据，重新加载。你确定要继续吗？');
  const clearCache = () => {
    // localStorage.removeItem('Weapon');
    // localStorage.removeItem('Avatar');
    // localStorage.removeItem('Overview');
    // localStorage.removeItem('rank-cd');
    // localStorage.removeItem('Reliquary');
    // localStorage.removeItem('token');
    localStorage.clear();
    localStorage.setItem('vueuse-color-scheme', 'dark');
    ElMessage.success('数据清除成功');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const appStore = useAppStore();
  const overview = userOverview();
  // const useStore = useUserStore()
  const theme = computed(() => {
    return appStore.theme;
  });
  const isDark = useDark({
    // selector: 'body',
    // attribute: 'arco-theme',
    // valueDark: 'dark',
    // valueLight: 'light',
    // storageKey: 'arco-theme',
    onChanged(dark: boolean) {
      appStore.toggleTheme(dark);
    },
  });
  const toggleTheme = useToggle(isDark);
</script>

<template>
  <header
    class="z-40 fixed w-full antialiased bg-white Male text-slate-500 dark:text-slate-400 dark:bg-slate-900"
  >
    <div
      class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
    >
      <div class="mx-auto max-w-8xl">
        <div
          class="px-4 py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10"
        >
          <div class="relative flex items-center font-blimone">
            <router-link
              to="/"
              class="mr-3 flex-none w-[2.0625rem] md:w-auto text-2xl leading-6 dark:text-slate-200"
              >{{ appStore.projectName }}</router-link
            >
            <ul class="hidden md:flex lg:flex flex-1 flex-wrap items-center justify-center text-sm">
              <li class="px-3">
                <div>
                  <span>全部用户数量：</span><span>{{ overview?.totalPlayerCount }}</span>
                </div>
              </li>
              <li class="px-3">
                <div>
                  <span>当期提交深渊数据用户数量：</span
                  ><span>{{ overview?.collectedPlayerCount }}</span>
                </div>
              </li>
              <li class="px-3">
                <div>
                  <span>当期满星用户数量：</span><span>{{ overview?.fullStarPlayerCount }}</span>
                </div>
              </li>
            </ul>
            <div class="relative items-center ml-auto lg:flex">
              <!-- <nav class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <ul class="flex space-x-8">
                  <li>
                    <router-link to="/demo" class="hover:text-sky-500 dark:hover:text-sky-400"
                      >GithubDemo</router-link
                    >
                  </li>
                </ul>
              </nav> -->
              <div
                class="flex justify-between items-center pl-6 ml-6 border-l border-slate-200 dark:border-slate-800"
              >
                <!-- 移动端 -->
                <div class="md:hidden lg:hidden xl:hidden mr-4">
                  <el-popconfirm
                    confirm-button-text="是的！"
                    cancel-button-text="点错了"
                    :icon="InfoFilled"
                    icon-color="#e74c3c"
                    :title="confirmTitle"
                    @confirm="clearCache()"
                  >
                    <template #reference>
                      <div>
                        <el-button
                          class="nav-btn"
                          :shape="'circle'"
                          type="info"
                          plain
                          :icon="Refresh"
                          circle
                          size="small"
                        />
                      </div>
                    </template>
                  </el-popconfirm>
                </div>
                <div class="md:hidden lg:hidden xl:hidden">
                  <el-button
                    class="nav-btn"
                    :shape="'circle'"
                    type="info"
                    plain
                    :icon="theme === 'dark' ? Sunny : Moon"
                    circle
                    size="small"
                    @click="toggleTheme()"
                  />
                </div>
                <!-- pc端 -->
                <div class="hidden md:flex lg:flex mr-4">
                  <el-popconfirm
                    confirm-button-text="是的！"
                    cancel-button-text="点错了"
                    :icon="InfoFilled"
                    icon-color="#e74c3c"
                    :title="confirmTitle"
                    @confirm="clearCache()"
                  >
                    <template #reference>
                      <div>
                        <el-tooltip :content="refreshContent">
                          <el-button
                            class="nav-btn"
                            :shape="'circle'"
                            type="info"
                            plain
                            :icon="Refresh"
                            circle
                            size="small"
                          />
                        </el-tooltip>
                      </div>
                    </template>
                  </el-popconfirm>
                </div>
                <div class="hidden md:flex lg:flex">
                  <el-tooltip :content="theme === 'light' ? '设置暗黑主题' : '设置明亮主题'">
                    <el-button
                      class="nav-btn"
                      :shape="'circle'"
                      type="info"
                      plain
                      :icon="theme === 'dark' ? Sunny : Moon"
                      circle
                      size="small"
                      @click="toggleTheme()"
                    />
                  </el-tooltip>
                </div>
                <a
                  href="https://github.com/K423-D/Genshin.Book"
                  target="_bank"
                  class="ml-6 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 hidden md:block lg:block"
                >
                  <SvgIcon name="svg-github" size="small" color="#999999" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="less">
  .prose {
    color: #334155;
    font-size: 0.875em;
    font-variant-ligatures: none;

    code {
      color: #0f172a;
      font-family: Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        Liberation Mono, Courier New, monospace;

      &::before {
        content: '`';
      }

      &::after {
        content: '`';
      }
    }

    &.dark\:prose-dark {
      color: #94a3b8;

      code {
        color: #e2e8f0;
      }
    }
  }
</style>
