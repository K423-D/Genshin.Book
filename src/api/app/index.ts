import { IAuthEntity } from './types';
// import { post } from '/@/utils/http/axios';

enum URL {
  auth = '/auth/login', // 获取accessToken
}

const getAccessToken = async (data: IAuthEntity) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(data);

  const url = `${import.meta.env.VITE_APP_API_AUTHURL}${URL.auth}`;

  return fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then((response) => response.text())
    .then((res) => JSON.parse(res));
};
export { getAccessToken };
