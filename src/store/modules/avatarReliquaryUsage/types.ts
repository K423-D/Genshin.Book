export interface AvatarReliquaryUsageEntity {
  avatar: number;
  reliquaryUsage: {
    ids: reliquaryEntity[];
    value: string;
  }[];
}

export interface reliquaryEntity {
  id: number;
  part?: ReliquaryPart;
  suit: Suits;
}
// 圣遗物部位
export enum ReliquaryPart {
  flower = 1,
  feather,
  hourglass,
  crown,
  cup,
}
// 圣遗物套装
export enum Suits {
  single = 1,
  pair = 2,
  four = 4,
}
