export interface Item {
  name: string;
  url: string;
  star?: number;
}

export interface GenshinItemState {
  avatars?: Item[];
  weapons?: Item[];
  reliquaries?: Item[];
}
