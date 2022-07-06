import { defineStore } from 'pinia';
import { AvatarParticipationEntity } from './types';
import { getAvatarParticipation } from '/@/api/statistics';
import piniaStore from '/@/store/index';
export const useAvatarParticipationStore = defineStore('avatarParticipation', {
  state: () => ({
    data: [] as AvatarParticipationEntity[],
  }),
  getters: {},
  actions: {
    setAvatarParticipation(data: AvatarParticipationEntity[] | []) {
      this.$patch({
        data,
      });
    },
    async fetchAvatarParticipation() {
      const res = (await getAvatarParticipation()) as AvatarParticipationEntity[];
      function keepTwoDecimal(num) {
        let result = parseFloat(num);
        // if (isNaN(result)) {
        //   console.log('传递参数错误，请检查！');
        //   return false;
        // }
        result = Math.round(num * 100) / 100;
        return result;
      }
      res.sort((a, b) => a.floor - b.floor);
      res.map((item) => {
        item.avatarUsage.map((el) => {
          el.value = keepTwoDecimal(el.value * 100);
        });
        item.avatarUsage.sort((a, b) => b.value - a.value);
      });
      this.setAvatarParticipation(res);
    },
  },
});
export function useAvatarParticipationOutsideStore() {
  return useAvatarParticipationStore(piniaStore);
}
