import { defineStore } from 'pinia';
import { AvatarParticipationEntity } from './types';
import { getAvatarParticipation } from '/@/api/statistics2';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useAvatarParticipation2Store = defineStore('avatarParticipation2', {
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
      const res = await getAvatarParticipation();
      res.sort((a, b) => b.floor - a.floor);
      res.map((item) => {
        item.avatarUsage.sort((a, b) => b.value - a.value);
        item.avatarUsage.map((el) => {
          el.value = keepTwoDecimalFull(el.value * 100);
        });
      });
      this.setAvatarParticipation(res);
    },
  },
});
export function useAvatarParticipation2OutsideStore() {
  return useAvatarParticipation2Store(piniaStore);
}
