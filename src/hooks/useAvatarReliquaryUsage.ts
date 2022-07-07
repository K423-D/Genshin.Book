import { useAvatarReliquaryUsageStore } from '../store/modules/avatarReliquaryUsage';

export default function useAvatarReliquaryUsage() {
  const avatarReliquaryUsage = useAvatarReliquaryUsageStore();
  if (avatarReliquaryUsage.data.length === 0) {
    avatarReliquaryUsage.fetchAvatarReliquaryUsage();
  }

  return avatarReliquaryUsage;
}
