import { defineStore } from 'pinia';
import { TeamCombinationEntity } from './types';
import { getTeamCombination } from '/@/api/statistics';
import piniaStore from '/@/store/index';
export const useTeamCombinationStore = defineStore('teamCombination', {
  state: () => ({
    data: [] as TeamCombinationEntity[],
  }),
  getters: {},
  actions: {
    setTeamCombination(data: TeamCombinationEntity[]) {
      this.$patch({ data });
    },

    async fetchTeamCombination() {
      const res = await getTeamCombination();
      console.log(res);
    },
  },
});
export function useTeamCombinationOutsideStore() {
  return useTeamCombinationStore(piniaStore);
}
