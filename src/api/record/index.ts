import { get } from '/@/utils/http/axios';

enum URL {
  rank = '/Record/Rank',
}

const getTeamCombination = async (uid: string | number) => {
  return get({ url: `${URL.rank}/${uid}` });
};

export { getTeamCombination };
