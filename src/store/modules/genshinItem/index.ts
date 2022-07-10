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
      let arr;
      let d: Item[];

      const a = localStorage.getItem('Avatar');
      const now = new Date().getTime();

      // 判断是否过期
      if (a && JSON.parse(a).time + 7 * 24 * 60 * 60 * 1000 >= now) {
        arr = JSON.parse(a).avatarMap;
        d = JSON.parse(a).avatars;
      } else {
        localStorage.removeItem('Avatar');
        const res = await getAvatar();
        arr = _.cloneDeep(this.avatarMap);
        d = res.map((item) => {
          if (item.id === 10000005) item.name = `${item.name}(男)`;
          if (item.id === 10000007) item.name = `${item.name}(女)`;

          item.star = arr[item.id] ? arr[item.id].star : 0;
          // 处理角色总数据
          arr[item.id] = Object.assign({}, arr[item.id], item);
          return item;
        });
        d.sort((a, b) => a.id - b.id);
        // 缓存加上时间戳缓存到localstorage
        const _avatars = {
          avatars: d,
          avatarMap: arr,
          time: now,
        };
        localStorage.setItem('Avatar', JSON.stringify(_avatars));
      }

      this.setAvatar(d);
      this.$patch({ avatarMap: arr });
    },
    // 获取武器映射列表
    async fetchWeapon() {
      let arr;
      let d: Item[];

      const a = localStorage.getItem('Weapon');
      const now = new Date().getTime();

      if (a && JSON.parse(a).time + 7 * 24 * 60 * 60 * 1000 >= now) {
        arr = JSON.parse(a).weaponMap;
        d = JSON.parse(a).weapons;
      } else {
        localStorage.removeItem('Weapon');
        const res = await getWeapon();
        arr = _.cloneDeep(this.weaponMap);
        d = res.map((item) => {
          item.star = arr[item.id] ? arr[item.id].star : 0;
          arr[item.id] = Object.assign({}, arr[item.id], item);
          return item;
        });
        d.sort((a, b) => a.id - b.id);

        const _weapon = {
          weapons: d,
          weaponMap: arr,
          time: now,
        };
        localStorage.setItem('Weapon', JSON.stringify(_weapon));
      }

      this.setWeapon(d);
      this.$patch({ weaponMap: arr });
    },
    // 获取圣遗物映射列表
    async fetchReliquries() {
      let arr;
      let d: Item[];

      const a = localStorage.getItem('Reliquary');
      const now = new Date().getTime();

      if (a && JSON.parse(a).time + 7 * 24 * 60 * 60 * 1000 >= now) {
        arr = JSON.parse(a).reliquaryMap;
        d = JSON.parse(a).reliquaries;
      } else {
        localStorage.removeItem('Reliquary');
        const res = await getReliquaries();
        arr = _.cloneDeep(this.reliquaryMap);
        d = res.map((item) => {
          item.star = arr[item.id] ? arr[item.id].star : 0;
          arr[item.id] = Object.assign({}, arr[item.id], item);
          return item;
        });
        d.sort((a, b) => a.id - b.id);

        const _reliquary = {
          reliquaries: d,
          reliquaryMap: arr,
          time: now,
        };
        localStorage.setItem('Reliquary', JSON.stringify(_reliquary));
      }

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
