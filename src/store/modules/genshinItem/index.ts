import { defineStore } from 'pinia';
import { GenshinItemState } from './types';
import { getAvatar, getReliquaries, getWeapon } from '/@/api/genshinItem';
import { Item } from '/@/store/modules/genshinItem/types';
import piniaStore from '/@/store/index';
import ITEM_MAP from './itemMap';
import * as _ from 'lodash';

export const useGenshinItemStore = defineStore('genshinItem', {
  state: () => ({
    avatars: [] as Item[], // 角色映射数据
    avatarMap: ITEM_MAP.characterMap, // 角色总数据
    weapons: [] as Item[], // 武器映射数据
    weaponMap: ITEM_MAP.weaponMap, // 武器总数据
    reliquaries: [] as Item[], // 圣遗物映射数据
    reliquaryMap: ITEM_MAP.reliquariesMap, // 圣遗物总数据
  }),
  getters: {
    genshinItems(state: GenshinItemState): GenshinItemState {
      return { ...state };
    },
  },
  actions: {
    // 设置角色数据
    setAvatar(avatars: Item[]) {
      this.$patch({
        avatars,
      });
    },
    // 设置武器数据
    setWeapon(weapons: Item[]) {
      this.$patch({
        weapons,
      });
    },
    // 设置圣遗物数据
    setReliquaries(reliquaries: Item[]) {
      this.$patch({
        reliquaries,
      });
    },
    // 获取角色映射列表
    async fetchAvatar() {
      const res = await getAvatar();
      const arr = _.cloneDeep(this.avatarMap);
      let d: Item[] = res.map((item) => {
        item.star = arr[item.id] ? arr[item.id].star : 0;
        // 处理角色总数据
        arr[item.id] = Object.assign({}, arr[item.id], item);
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setAvatar(d);
      this.$patch({ avatarMap: arr });
    },
    // 获取武器映射列表
    async fetchWeapon() {
      const res = await getWeapon();
      const arr = _.cloneDeep(this.weaponMap);
      let d: any[] = res.map((item) => {
        item.star = arr[item.id] ? arr[item.id].star : 0;
        arr[item.id] = Object.assign({}, arr[item.id], item);
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setWeapon(d);
      this.$patch({ weaponMap: arr });
    },
    // 获取圣遗物映射列表
    async fetchReliquries() {
      const res = await getReliquaries();
      const arr = _.cloneDeep(this.reliquaryMap);
      let d: any[] = res.map((item) => {
        item.star = arr[item.id] ? arr[item.id].star : 0;
        arr[item.id] = Object.assign({}, arr[item.id], item);
        return item;
      });
      d.sort((a, b) => a.id - b.id);
      this.setReliquaries(d);
      this.$patch({ reliquaryMap: arr });
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
