import { useOverviewStore } from '../store/modules/overview';
import { getToken } from '../utils/auth';

export default function useOverview() {
  const overview = useOverviewStore();
  const token = getToken();
  if (
    overview.totalPlayerCount === 0 &&
    overview.collectedPlayerCount === 0 &&
    overview.fullStarPlayerCount === 0 &&
    token
  ) {
    overview.fetchOverview();
  }

  return overview;
}
