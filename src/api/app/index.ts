import { IAuthEntity } from './types';
import { post } from '/@/utils/http/axios';

// 物品映射数据
enum URL {
  auth = '/auth/login', // 角色映射列表，
}

const getAccessToken = async (data: IAuthEntity) => {
  return post({
    url: URL.auth,
    baseURL: import.meta.env.VITE_APP_API_AUTHURL || '',
    data,
  });
};
export { getAccessToken };
