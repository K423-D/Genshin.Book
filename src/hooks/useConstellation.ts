import { useConstellationStore } from '../store/modules/constellation';

export default function useConstellation() {
  const constellation = useConstellationStore();
  if (constellation.data.length === 0) {
    constellation.fetchConstellation();
  }
  return constellation;
}
