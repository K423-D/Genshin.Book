import { ElMessage } from 'element-plus';
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
      let res = await getRank(uid);

      if (res.damage && res.takeDamage) {
        res.damage.percent = keepTwoDecimalFull(res.damage.percent * 100);
        res.damage.percentTotal = keepTwoDecimalFull(res.damage.percentTotal * 100);
        res.takeDamage.percent = keepTwoDecimalFull((1 - res.takeDamage.percent) * 100);
        res.takeDamage.percentTotal = keepTwoDecimalFull((1 - res.takeDamage.percentTotal) * 100);
      } else {
        setTimeout(() => {
          res = {
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
          };
          ElMessage.info('该uid没有上传深渊数据哦~');
        }, 1000);
      }

      this.setRank(res);
    },
  },
});
export function useRankOutsideStore() {
  return useRankStore(piniaStore);
}
