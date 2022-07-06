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
      const res = await getAvatarParticipation();
      //四舍五入保留2位小数（不够位数，则用0替补）
      function keepTwoDecimalFull(num) {
        var result = parseFloat(num);
        // if (isNaN(result)) {
        // alert('传递参数错误，请检查！');
        // return false;
        // }
        result = Math.round(num * 100) / 100;
        var s_x = result.toString();
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
          pos_decimal = s_x.length;
          s_x += '.';
        }
        while (s_x.length <= pos_decimal + 2) {
          s_x += '0';
        }
        return s_x;
      }
      res.sort((a, b) => a.floor - b.floor);
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
