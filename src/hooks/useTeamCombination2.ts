import { useTeamCombination2Store } from '../store/modules/teamCombination2';

export default function useTeamCombination2() {
  const teamCombination = useTeamCombination2Store();
  if (teamCombination.data.length === 0) {
    teamCombination.fetchTeamCombination();
  }
  return teamCombination;
}
