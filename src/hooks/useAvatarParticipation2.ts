import { useAvatarParticipation2Store } from '../store/modules/avatarParticipation2';

export default function useAvatarParticipation2() {
  const avatarParticipation = useAvatarParticipation2Store();
  if (avatarParticipation.data.length === 0) {
    avatarParticipation.fetchAvatarParticipation();
  }

  return avatarParticipation;
}
