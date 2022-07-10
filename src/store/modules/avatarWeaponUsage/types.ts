export interface AvatarWeaponUsageEntity {
  avatar: number;
  weapons: {
    id: number;
    value: string;
  }[];
}
