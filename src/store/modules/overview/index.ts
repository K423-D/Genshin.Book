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
      const res = await getOverview();
      this.setOverview(res);
    },
  },
});
export function useOverviewOutsideStore() {
  return useOverviewStore(piniaStore);
}
