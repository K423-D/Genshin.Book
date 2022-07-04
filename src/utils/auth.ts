const TokenKey = 'token';
const TokenPrefix = 'Bearer ';
const isLogin = () => {
  return !!localStorage.getItem(TokenKey);
};
const getToken = () => {
  return localStorage.getItem(TokenKey);
};
const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token);
};
const clearToken = () => {
  localStorage.removeItem(TokenKey);
};
const whiteList = [
  '/auth/login',
  '/GenshinItem/Avatars',
  '/GenshinItem/Weapons',
  '/GenshinItem/Reliquaries',
];
export { TokenPrefix, isLogin, getToken, setToken, clearToken, whiteList };
