import { useAvatarWeaponUsageStore } from '../store/modules/avatarWeaponUsage';

export default function useAvatarWeaponUsage() {
  const avatarWeaponUsage = useAvatarWeaponUsageStore();
  if (avatarWeaponUsage.data.length === 0) {
    avatarWeaponUsage.fetchAvatarWeaponUsage();
  }

  return avatarWeaponUsage;
}
