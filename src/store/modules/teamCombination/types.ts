export interface TeamCombinationEntity {
  level: {
    floor: number;
    index: number;
  };
  teams: {
    id: {
      upHalf: number[];
      downHalf: number[];
    };
    value: number;
  }[];
}
