import { defineStore } from 'pinia';
import { AvatarReliquaryUsageEntity } from './types';
import { getAvatarReliquaryUsage } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useAvatarReliquaryUsageStore = defineStore('avatarReliquaryUsage', {
  state: () => ({
    data: [] as AvatarReliquaryUsageEntity[],
  }),
  getters: {},
  actions: {
    setAvatarReliquaryUsage(data: AvatarReliquaryUsageEntity[] | []) {
      this.$patch({
        data,
      });
    },

    async fetchAvatarReliquaryUsage() {
      const res = await getAvatarReliquaryUsage();
      // 按角色id升序处理
      res.sort((a, b) => a.avatar - b.avatar);
      const d: AvatarReliquaryUsageEntity[] = res.map((reliquary) => {
        // 处理圣遗物id和套装
        const usages = reliquary.reliquaryUsage.map((item) => {
          let _ids = (item.id as string).split(';');
          let ids = _ids.map((id) => {
            const arr = id.split('-');
            return {
              id: parseInt(arr[0]),
              suit: parseInt(arr[1]),
            };
          });
          return {
            ids,
            value: keepTwoDecimalFull(item.value * 100),
          };
        });
        return {
          avatar: reliquary.avatar,
          reliquaryUsage: usages,
        };
      });
      console.log(d);

      this.setAvatarReliquaryUsage(d);
    },
  },
});
export function useAvatarReliquaryUsageOutsideStore() {
  return useAvatarReliquaryUsageStore(piniaStore);
}
