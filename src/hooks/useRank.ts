import { useRankStore } from '../store/modules/rank';

export default function useRank() {
  const rank = useRankStore();
  return rank;
}
