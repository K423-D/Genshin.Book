export interface IUploadData {
  uid: string;
  playerAvatars: IPlayerAvatars[];
  playerSpiralAbyssesLevels: IPlayerSpiralAbyssesLevels[];
}

interface IPlayerAvatars {
  id: number;
  level: number;
  activedConstellationNum: number;
  weapon: {
    id: number;
    level: number;
    affixLevel: number;
  };
  reliquarySets: {
    id: number;
    count: number;
  }[];
}

interface IPlayerSpiralAbyssesLevels {
  floorIndex: number;
  levelIndex: number;
  star: number;
  battles: {
    battleIndex: number;
    avatarIds: number[];
  }[];
}
