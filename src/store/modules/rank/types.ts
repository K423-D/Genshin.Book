export interface Rank {
  damage: {
    avatarId: number;
    value: number;
    percent: number | string;
    percentTotal: number | string;
  };
  takeDamage: {
    avatarId: number;
    value: number;
    percent: number | string;
    percentTotal: number | string;
  };
}
