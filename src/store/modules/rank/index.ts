import { defineStore } from 'pinia';
import { Rank } from './types';
import { getRank } from '/@/api/record';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useRankStore = defineStore('rank', {
  state: (): Rank => ({
    damage: {
      avatarId: 0,
      value: 0,
      percent: 0,
      percentTotal: 0,
    },
    takeDamage: {
      avatarId: 0,
      value: 0,
      percent: 0,
      percentTotal: 0,
    },
  }),
  getters: {},
  actions: {
    setRank(data: Rank) {
      this.$patch(data);
    },
    async fetchRank(uid: string | number) {
      const now = new Date().getTime();
      localStorage.setItem('rank-cd', `${now}`);
      let res: Rank = await getRank(uid);

      res.damage.percent = keepTwoDecimalFull(res.damage.percent);
      res.damage.percentTotal = keepTwoDecimalFull(res.damage.percentTotal);
      res.takeDamage.percent = keepTwoDecimalFull(res.takeDamage.percent);
      res.takeDamage.percentTotal = keepTwoDecimalFull(res.takeDamage.percentTotal);

      this.setRank(res);
    },
  },
});
export function useRankOutsideStore() {
  return useRankStore(piniaStore);
}
