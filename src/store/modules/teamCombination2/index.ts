import { defineStore } from 'pinia';
import { TeamCombinationEntity } from './types';
import { getTeamCombination } from '/@/api/statistics2';
import piniaStore from '/@/store/index';
export const useTeamCombination2Store = defineStore('teamCombination2', {
  state: () => ({
    data: [] as TeamCombinationEntity[],
  }),
  getters: {},
  actions: {
    setTeamCombination(data: TeamCombinationEntity[]) {
      this.$patch({ data });
    },

    async fetchTeamCombination() {
      const res: any[] = await getTeamCombination();
      res.sort((a, b) => a.floor - b.floor);
      res.map((entity) => {
        entity.teams.map((team) => {
          const str1: string = team.id.upHalf;
          const str2: string = team.id.downHalf;
          const upHalf = str1.split(',').map((el) => parseInt(el));
          const downHalf = str2.split(',').map((el) => parseInt(el));
          team.id = { upHalf, downHalf };
        });
      });
      this.setTeamCombination(res);
    },
  },
});
export function useTeamCombination2OutsideStore() {
  return useTeamCombination2Store(piniaStore);
}
