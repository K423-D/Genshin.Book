import { useTeamCollocationStore } from '../store/modules/teamCollocation';

export default function useTeamCollocation() {
  const teamCollocation = useTeamCollocationStore();
  if (teamCollocation.data.length === 0) {
    teamCollocation.fetchTeamCollocation();
  }

  return teamCollocation;
}
