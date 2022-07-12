export interface TeamCombinationEntity {
  level: {
    floor: number;
    index: number;
  };
  teams: {
    id: {
      upHalf: string[];
      downHalf: string[];
    };
    value: number;
  }[];
}
