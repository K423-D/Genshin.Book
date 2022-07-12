import { useTeamCombinationStore } from '../store/modules/teamCombination';

export default function useTeamCombination() {
  const teamCombination = useTeamCombinationStore();
  if (teamCombination.data.length === 0) {
    teamCombination.fetchTeamCombination();
  }
  return teamCombination;
}
