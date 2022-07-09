import { defineStore } from 'pinia';
import { AvatarParticipationEntity } from './types';
import { getAvatarParticipation } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
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
      const res = await getAvatarParticipation();
      res.sort((a, b) => b.floor - a.floor);
      res.map((item) => {
        item.avatarUsage.sort((a, b) => b.value - a.value);
        item.avatarUsage.map((el) => {
          el.value = keepTwoDecimalFull(el.value * 100 * 8);
        });
      });
      this.setAvatarParticipation(res);
    },
  },
});
export function useAvatarParticipationOutsideStore() {
  return useAvatarParticipationStore(piniaStore);
}
