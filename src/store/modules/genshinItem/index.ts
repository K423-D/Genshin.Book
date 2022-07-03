import { defineStore } from 'pinia';
import { GenshinItemState } from './types';
import { getAvatar, getReliquaries, getWeapon } from '/@/api/genshinItem';
import { Item } from '/@/api/genshinItem/types';
import piniaStore from '/@/store/index';

export const useGenshinItemStore = defineStore('genshinItem', {
  state: (): GenshinItemState => ({
    avaters: undefined,
    weapons: undefined,
    reliquaries: undefined,
  }),
  getters: {
    genshinItems(state: GenshinItemState): GenshinItemState {
      return { ...state };
    },
  },
  actions: {
    // 设置角色数据
    setAvatar(partial: Partial<Item[] | undefined>) {
      this.$patch({
        avaters: partial,
      });
    },
    // 设置武器数据
    setWeapon(partial: Partial<Item[] | undefined>) {
      this.$patch({
        weapons: partial,
      });
    },
    // 设置圣遗物数据
    setReliquaries(partial: Partial<Item[] | undefined>) {
      this.$patch({
        reliquaries: partial,
      });
    },
    // 获取角色映射列表
    async avatar() {
      const res = await getAvatar();
      this.setAvatar(res.data.data);
    },
    // 获取武器映射列表
    async weapon() {
      const res = await getWeapon();
      this.setWeapon(res.data.data);
    },
    // 获取圣遗物映射列表
    async reliquries() {
      const res = await getReliquaries();
      this.setReliquaries(res.data.data);
    },
    // 重置所有数据
    resetAll() {
      this.$reset();
    },
  },
});
export function useGenshinItemOutsideStore() {
  return useGenshinItemStore(piniaStore);
}
