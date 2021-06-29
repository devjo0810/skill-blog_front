import Vue from "vue";
import VueRouter from "vue-router";
import HomeRouter from "./modules/Home";
import SignRouter from "./modules/Sign";
import BlogRouter from "./modules/Blog";
import UserRouter from "./modules/User";

Vue.use(VueRouter);

const routes = [
  ...HomeRouter,
  ...SignRouter,
  ...BlogRouter,
  ...UserRouter,
  {
    path: "/template",
    name: "Template",
    component: () => import("@/views/Template.vue"),
    meta: { header: true },
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router path duplication 에러 방지
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
  // 추후 로그인에 대한 라우터 가드 필요
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
