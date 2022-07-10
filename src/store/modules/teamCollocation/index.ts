import { defineStore } from 'pinia';
import { CollocationEntity } from './types';
import { getTeamCollocation } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useTeamCollocationStore = defineStore('teamCollocation', {
  state: () => ({
    data: [] as CollocationEntity[],
  }),
  getters: {},
  actions: {
    setTeamCollocation(data: CollocationEntity[] | []) {
      this.$patch({
        data,
      });
    },
    async fetchTeamCollocation() {
      const res = await getTeamCollocation();
      // 按角色id升序处理
      res.sort((a, b) => a.avatar - b.avatar);
      // 处理value
      const d: CollocationEntity[] = res.map((item) => {
        const arr = item.collocations.map((el) => ({
          id: el.id,
          value: keepTwoDecimalFull(el.value * 100),
        }));
        return { avatar: item.avatar, collocations: arr };
      });
      // console.log(d);

      this.setTeamCollocation(d);
    },
  },
});
export function useTeamCollocationOutsideStore() {
  return useTeamCollocationStore(piniaStore);
}
