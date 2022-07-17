import * as _ from 'lodash';
import { defineStore } from 'pinia';
import { useGenshinItemStore } from '../genshinItem';
import { Constellation, Sort, SortBy, Star } from './types';
import { getConstellation } from '/@/api/statistics';
import piniaStore from '/@/store/index';
import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';
export const useConstellationStore = defineStore('constellation', {
  state: () => ({
    data: [] as Constellation[],
    origin: [] as Constellation[],
    star: Star.all,
    sort: Sort.asc,
    sortBy: SortBy.id,
  }),
  getters: {},
  actions: {
    setConstellation(data: Constellation[]) {
      this.$patch({ data });
    },
    setOrigin(data: Constellation[]) {
      this.$patch({ origin: data });
    },
    setStar(star: Star) {
      this.$patch({ star });
    },
    setSort(sort: Sort) {
      this.$patch({ sort });
    },
    setSortBy(sortBy: SortBy) {
      this.$patch({ sortBy });
    },
    async fetchConstellation() {
      const res = await getConstellation();
      res.sort((a, b) => a.avatar - b.avatar);
      const d: Constellation[] = res.map((item) => {
        item.rate.sort((a, b) => a.id - b.id);
        const rate = item.rate.map((el) => {
          return {
            id: el.id,
            value: el.value,
            // value: keepTwoDecimalFull(el.value * 100),
          };
        });
        return {
          avatar: item.avatar,
          holdingRate: keepTwoDecimalFull(item.holdingRate),
          rate,
        };
      });
      this.setOrigin(d);
      this.setConstellation(d);
    },
    // 星级过滤
    filterStar(star: Star) {
      let arr = _.cloneDeep(this.origin);
      const avatarMap = useGenshinItemStore().avatarMap;
      this.setStar(star);
      switch (star) {
        case Star.all: // 全部星级
        default: // 默认全部
          break;
        case Star.four: // 只显示四星
          arr = this.origin.filter((el) => avatarMap[el.avatar].star === 4);
          break;
        case Star.five: // 只显示五星
          arr = this.origin.filter((el) => avatarMap[el.avatar].star === 5);
          break;
      }
      // this.setConstellation(arr);
      this.sortData(this.sortBy, arr);
    },
    // 切换排序目标
    sortData(sortBy: SortBy, data: Constellation[] | undefined = undefined) {
      let arr = data ? data : _.cloneDeep(this.data);
      this.setSortBy(sortBy);
      switch (sortBy) {
        case SortBy.id: // 按id排序
          if (this.sort === Sort.asc) {
            arr.sort((a, b) => a.avatar - b.avatar);
          } else {
            arr.sort((a, b) => b.avatar - a.avatar);
          }
          break;
        case SortBy['持有率']: // 按0命排序
          if (this.sort === Sort.asc) {
            arr.sort((a, b) => a.holdingRate - b.holdingRate);
          } else {
            arr.sort((a, b) => b.holdingRate - a.holdingRate);
          }
          break;
        case SortBy['0命']: // 按0命排序
        case SortBy['1命']: // 按1命排序
        case SortBy['2命']: // 按2命排序
        case SortBy['3命']: // 按3命排序
        case SortBy['4命']: // 按4命排序
        case SortBy['5命']: // 按5命排序
        case SortBy['6命']: // 按6命排序
          if (this.sort === Sort.asc) {
            arr.sort((a, b) => {
              console.log(a, b);

              return a.rate[this.sortBy].value - b.rate[this.sortBy].value;
            });
          } else {
            arr.sort((a, b) => b.rate[this.sortBy].value - a.rate[this.sortBy].value);
          }
          break;
      }
      console.log(arr);

      this.setConstellation(arr);
    },
    //切换升降序
    toggleSort(sort: Sort) {
      this.setSort(sort);
      this.sortData(this.sortBy);
    },
  },
});
export function useConstellationOutsideStore() {
  return useConstellationStore(piniaStore);
}
