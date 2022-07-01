import { MockMethod } from 'vite-plugin-mock';
import { successResult, errorResult, requestParams, getRequestToken } from '/@/utils/result';
import { TokenPrefix } from '/@/utils/auth';

export function createFakeUserList() {
  return [
    {
      user_id: '',
      user_name: '',
      real_name: '',
      avatar: '',
      desc: '',
      password: '',
      token: '',
      organization: '',
      location: '',
      email: '',
      auths: [],
      is_admin: 1,
      dev_languages: '',
      blog_github: '',
      blog_juejin: '',
      blog_zhihu: '',
      role: 'admin',
    },
  ];
}
export default [
  {
    url: '/user/profile',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return errorResult('Invalid token');
      const checkUser = createFakeUserList().find(
        (item) => `${TokenPrefix}${item.token}` === token,
      );
      if (!checkUser) {
        return errorResult('未获得相应的用户信息');
      }
      return successResult(checkUser);
    },
  },
  {
    url: '/user/login',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request?.body;
      const checkUser = createFakeUserList().find(
        (item) => item.user_name === username && item.password === password,
      );
      if (!checkUser) {
        return errorResult('不存在该用户');
      }
      return successResult({ token: checkUser.token });
    },
  },
  {
    url: '/user/logout',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      console.dir(request);
      const token = getRequestToken(request);
      if (!token) return errorResult('token缺失!');
      const checkUser = createFakeUserList().find(
        (item) => `${TokenPrefix}${item.token}` === token,
      );
      if (!checkUser) {
        return errorResult('token缺失!');
      }
      return successResult('Token 已失效');
    },
  },
  {
    url: '/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
