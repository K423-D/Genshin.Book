export interface Constellation {
  avatar: number;
  holdingRate: number;
  rate: {
    id: number;
    value: number;
  }[];
}

export enum SortBy {
  id = -2,
  '持有率' = -1,
  '0命' = 0,
  '1命' = 1,
  '2命' = 2,
  '3命' = 3,
  '4命' = 4,
  '5命' = 5,
  '6命' = 6,
}

export enum Sort {
  asc = 'asc',
  desc = 'desc',
}

export enum Star {
  all = 0,
  four = 4,
  five = 5,
}
