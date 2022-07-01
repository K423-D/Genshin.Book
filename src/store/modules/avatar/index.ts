import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';

export const useAvatarStore = defineStore('avatar', {
  state: () => ({}),
  getters: {},
  actions: {},
});
export function useAvatarOutsideStore() {
  return useAvatarStore(piniaStore);
}
