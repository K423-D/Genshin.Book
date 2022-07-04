import { defineStore } from 'pinia';
import { GenshinItemState } from './types';
import { getAvatar, getReliquaries, getWeapon } from '/@/api/genshinItem';
import { Item } from '/@/store/modules/genshinItem/types';
import piniaStore from '/@/store/index';
import ITEM_MAP from './itemMap';

export const useGenshinItemStore = defineStore('genshinItem', {
  state: () => ({
    avatars: undefined,
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
        avatars: partial,
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
    async fetchAvatar() {
      const res = await getAvatar();
      let d: any[] = res.map((item) => {
        item.star = ITEM_MAP.characterMap[`${item.name}${item.id}`]
          ? ITEM_MAP.characterMap[`${item.name}${item.id}`].star
          : 0;
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setAvatar(d);
    },
    // 获取武器映射列表
    async fetchWeapon() {
      const res = await getWeapon();
      let d: any[] = res.map((item) => {
        item.star = ITEM_MAP.weaponMap[`${item.name}${item.id}`]
          ? ITEM_MAP.weaponMap[`${item.name}${item.id}`].star
          : 0;
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setWeapon(d);
    },
    // 获取圣遗物映射列表
    async fetchReliquries() {
      const res = await getReliquaries();
      let d: any[] = res.map((item) => {
        item.star = ITEM_MAP.reliquariesMap[`${item.name}${item.id}`]
          ? ITEM_MAP.reliquariesMap[`${item.name}${item.id}`].star
          : 0;
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setReliquaries(d);
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
