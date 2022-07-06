import { useAvatarParticipationStore } from '../store/modules/avatarParticipation';

export default function useAvatarParticipation() {
  const avatarParticipation = useAvatarParticipationStore();
  if (avatarParticipation.data.length === 0) {
    avatarParticipation.fetchAvatarParticipation();
  }

  return avatarParticipation;
}
