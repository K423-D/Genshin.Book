import { get } from '/@/utils/http/axios';

// 物品映射数据
enum URL {
  avatar = '/GenshinItem/Avatars', // 角色映射列表，
  weapon = '/GenshinItem/Weapons', // 武器映射列表，
  reliquaries = '/GenshinItem/Reliquaries', // 圣遗物映射列表，
}

const getAvatar = async () => {
  return get({ url: URL.avatar });
};
const getWeapon = async () => {
  return get({ url: URL.weapon });
};
const getReliquaries = async () => {
  return get({ url: URL.reliquaries });
};
export { getAvatar, getWeapon, getReliquaries };
