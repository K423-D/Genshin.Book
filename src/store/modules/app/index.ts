import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';
import { AppState } from './types';
import { getAccessToken } from '/@/api/app';
import { setToken } from '/@/utils/auth';
import { ElMessage } from 'element-plus';
import { useOverviewStore } from '../overview';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      title: '一个原神资料库,使用hutao-api.',
      h1: '一个原神资料库,使用hutao-api.',
      theme: 'dark',
      projectName: 'Genshin.Book',
      accessToken: '',
      rankQueryCd: 20,
    }),
    getters: {},
    actions: {
      // Update app settings
      updateSettings(partial: Partial<AppState>) {
        // @ts-ignore-next-line
        this.$patch(partial);
      },

      // Change theme color
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.classList.add('dark');
          document.body.setAttribute('arco-theme', 'dark');
          localStorage.setItem('theme', this.theme);
        } else {
          this.theme = 'light';
          document.documentElement.classList.remove('dark');
          document.body.removeAttribute('arco-theme');
          localStorage.setItem('theme', this.theme);
        }
      },
      // 获取accessToken
      async fetchAccessToken() {
        const data = {
          Appid: import.meta.env.VITE_APP_APPID as string,
          Secret: import.meta.env.VITE_APP_SECRET as string,
        };
        const res = await getAccessToken(data);
        // console.log(res);

        if (res.data.accessToken) {
          setToken(res.data.accessToken);
          ElMessage.success('数据更新成功');
          useOverviewStore().fetchOverview();
          // window.location.reload();
          // setTimeout(() => {
          // }, 1500);
        } else {
          ElMessage.error('获取数据失败，请刷新网页');
        }
      },
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
