export interface Item {
  id: number;
  name: string;
  url: string;
  star?: number;
}

export interface GenshinItemState {
  avatars?: Item[];
  avatarMap?: Object;
  weapons?: Item[];
  weaponMap?: Object;
  reliquaries?: Item[];
  reliquarieMap?: Object;
}
