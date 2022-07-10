import { defineStore } from 'pinia';
import { OverviewState } from './types';
import { getOverview } from '/@/api/statistics';
import piniaStore from '/@/store/index';

export const useOverviewStore = defineStore('overview', {
  state: () => ({
    totalPlayerCount: 0,
    collectedPlayerCount: 0,
    fullStarPlayerCount: 0,
  }),
  getters: {},
  actions: {
    setOverview(partial: Partial<OverviewState>) {
      this.$patch(partial);
    },
    async fetchOverview() {
      let res;

      const o = localStorage.getItem('Overview');
      const now = new Date().getTime();

      // 判断是否过期
      if (o && JSON.parse(o).time + 10 * 60 * 1000 >= now) {
        res = JSON.parse(o).overview;
      } else {
        localStorage.removeItem('Overview');
        res = await getOverview();
        const _overview = {
          overview: res,
          time: now,
        };
        localStorage.setItem('Overview', JSON.stringify(_overview));
      }
      this.setOverview(res);
    },
  },
});
export function useOverviewOutsideStore() {
  return useOverviewStore(piniaStore);
}
