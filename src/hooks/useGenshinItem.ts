import { useGenshinItemStore } from '../store/modules/genshinItem';

export default function useGenshinItem() {
  const genshinItems = useGenshinItemStore();
  if (genshinItems.avatars.length == 0) {
    genshinItems.fetchAvatar();
  }
  if (genshinItems.weapons.length == 0) {
    genshinItems.fetchWeapon();
  }
  if (genshinItems.reliquaries.length == 0) {
    genshinItems.fetchReliquries();
  }
  return genshinItems;
}
