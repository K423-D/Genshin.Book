import { IUploadData } from './types';
import { get, post } from '/@/utils/http/axios';

enum URL {
  teamCombination = '/Statistics2/TeamCombination', // 队伍使用数据
  teamRecommanded = '/Statistics2/TeamRecommanded', // 队伍推荐数据
  avatarParticipation = '/Statistics2/AvatarParticipation', // 角色使用数据
}

const getTeamCombination = async () => {
  return get({ url: URL.teamCombination });
};
const getTeamRecommanded = async (data: IUploadData) => {
  return post({ url: URL.teamRecommanded, data });
};
const getAvatarParticipation = async (data: IUploadData) => {
  return post({ url: URL.avatarParticipation, data });
};

export { getTeamCombination, getTeamRecommanded, getAvatarParticipation };
