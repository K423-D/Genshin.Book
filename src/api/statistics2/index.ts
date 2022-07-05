import { IUploadData } from './types';
import { get, post } from '/@/utils/http/axios';

enum URL {
  teamCombination = '/Statistics2/TeamCombination', // 队伍出场数据
  teamRecommanded = '/Statistics2/TeamRecommanded', // 队伍出场数据
}

const getTeamCombination = async () => {
  return get({ url: URL.teamCombination });
};
const getTeamRecommanded = async (data: IUploadData) => {
  return post({ url: URL.teamRecommanded, data });
};

export { getTeamCombination, getTeamRecommanded };
