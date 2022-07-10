// import { get } from '/@/utils/fetch';
import { get } from '/@/utils/http/axios';

enum URL {
  overview = '/Statistics/Overview', // 总览数据，
  avatarParticipation = '/Statistics/AvatarParticipation', // 角色出场数据，
  avatarReliquaryUsage = '/Statistics/avatarReliquaryUsage', // 圣遗物数据，
  AvatarWeaponUsage = '/Statistics/AvatarWeaponUsage', // 圣遗物数据，
  teamCollocation = '/Statistics/TeamCollocation', // 角色搭配数据
  constellation = '/Statistics/Constellation', // 命座数据
  teamCombination = '/Statistics/TeamCombination', // 队伍出场数据
}

const getOverview = async () => {
  return get({ url: URL.overview });
};
const getAvatarParticipation = async () => {
  return get({ url: URL.avatarParticipation });
};
const getAvatarReliquaryUsage = async () => {
  return get({ url: URL.avatarReliquaryUsage });
};
const getAvatarWeaponUsage = async () => {
  return get({ url: URL.AvatarWeaponUsage });
};
const getTeamCollocation = async () => {
  return get({ url: URL.teamCollocation });
};
const getConstellation = async () => {
  return get({ url: URL.constellation });
};
const getTeamCombination = async () => {
  return get({ url: URL.teamCombination });
};

export {
  getOverview,
  getAvatarParticipation,
  getAvatarReliquaryUsage,
  getAvatarWeaponUsage,
  getTeamCollocation,
  getConstellation,
  getTeamCombination,
};
