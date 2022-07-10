import { defineStore } from 'pinia';
import { Constellation } from './types';
import { getConstellation } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useConstellationStore = defineStore('constellation', {
  state: () => ({
    data: [] as Constellation[],
  }),
  getters: {},
  actions: {
    setConstellation(data: Constellation[]) {
      this.$patch({ data });
    },
    async fetchConstellation() {
      const res = await getConstellation();
      res.sort((a, b) => a.avatar - b.avatar);
      const d: Constellation[] = res.map((item) => {
        item.rate.sort((a, b) => a.id - b.id);
        const rate = item.rate.map((el) => {
          return {
            id: el.id,
            value: el.value,
            // value: keepTwoDecimalFull(el.value * 100),
          };
        });
        return {
          avatar: item.avatar,
          holdingRate: keepTwoDecimalFull(item.holdingRate),
          rate,
        };
      });

      this.setConstellation(d);
    },
  },
});
export function useConstellationOutsideStore() {
  return useConstellationStore(piniaStore);
}
