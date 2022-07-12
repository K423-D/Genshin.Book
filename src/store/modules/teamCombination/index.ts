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
      const res: any[] = await getTeamCombination();
      res.sort((a, b) => {
        const value1 = parseInt(`${a.level.floor}${a.level.index}`);
        const value2 = parseInt(`${b.level.floor}${b.level.index}`);
        return value2 - value1;
      });

      res.map((entity) => {
        entity.teams.map((team) => {
          const str1: string = team.id.upHalf;
          const str2: string = team.id.downHalf;
          const upHalf = str1.split(',').map((el) => parseInt(el));
          const downHalf = str2.split(',').map((el) => parseInt(el));
          team.id = { upHalf, downHalf };
        });
      });
      console.log(res);
      this.setTeamCombination(res);
    },
  },
});
export function useTeamCombinationOutsideStore() {
  return useTeamCombinationStore(piniaStore);
}
