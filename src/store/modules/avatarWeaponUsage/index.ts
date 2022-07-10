import { defineStore } from 'pinia';
import { AvatarWeaponUsageEntity } from './types';
import { getAvatarWeaponUsage } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useAvatarWeaponUsageStore = defineStore('AvatarWeaponUsage', {
  state: () => ({
    data: [] as AvatarWeaponUsageEntity[],
  }),
  getters: {},
  actions: {
    setAvatarWeaponUsage(data: AvatarWeaponUsageEntity[] | []) {
      this.$patch({
        data,
      });
    },

    async fetchAvatarWeaponUsage() {
      const res = await getAvatarWeaponUsage();
      // 按角色id升序处理
      res.sort((a, b) => a.avatar - b.avatar);
      const d: AvatarWeaponUsageEntity[] = res.map((weapon) => {
        // 处理圣遗物id和套装
        const usages = weapon.weapons.map((item) => {
          return {
            id: item.id,
            value: keepTwoDecimalFull(item.value * 100),
          };
        });
        return {
          avatar: weapon.avatar,
          weapons: usages,
        };
      });

      this.setAvatarWeaponUsage(d);
    },
  },
});
export function useAvatarWeaponUsageOutsideStore() {
  return useAvatarWeaponUsageStore(piniaStore);
}
