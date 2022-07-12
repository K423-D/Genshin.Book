export interface TeamCombinationEntity {
  floor: number;
  teams: {
    id: {
      upHalf: number[];
      downHalf: number[];
    };
    value: number;
  }[];
}
