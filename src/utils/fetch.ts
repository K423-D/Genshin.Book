import { getToken, TokenPrefix, whiteList } from './auth';
import { showMessage } from './http/axios/status';

const request = (config) => {
  // console.log(config.url);
  let myHeaders: any = {
    'Content-Type': 'text/json; charset=utf-8',
  };

  const token = getToken();
  const raw = JSON.stringify(config.data);

  if (token && !whiteList.includes(`${config.url}`)) {
    myHeaders.Authorization = `${TokenPrefix}${token}`;
  }

  let url = `${config.url}`;
  // let url = `${import.meta.env.VITE_APP_API_BASEURL}${config.url}`;
  // console.log(url);
  // console.log(myHeaders);

  return fetch(url, {
    method: config.method,
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      } else {
        const err = {
          msg: '连接错误',
          code: response.status,
        };
        showMessage(response.status);
        return JSON.stringify(err);
      }
    })
    .then((res) => {
      const data = JSON.parse(res).data;
      if (import.meta.env.MODE == 'development') {
        console.log(
          `%c request: ${config.url}`,
          'color:lightgreen;background:black;font-size:12px;padding:2px',
        );
        console.log(data);
      }
      return data || {};
    })
    .catch((_) => {
      // console.log(err);
    });
};

export function get<T = any>(config): Promise<T> {
  return request({ ...config, method: 'GET' });
}

export function post<T = any>(config): Promise<T> {
  return request({ ...config, method: 'POST' });
}

export default request;
