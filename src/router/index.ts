import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '../utils/auth';
import { useAppStore } from '../store/modules/app';

// console.log(routes, '打印生成自动生成的路由');
// routes.push({
//   path: '/',
//   redirect: '/login',
// });
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  if (_to.path == '/') {
    const token = getToken();
    const appStore = useAppStore();
    if (!token) {
      appStore.fetchAccessToken();
    }
  }
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;
