import Vue from "vue";
import VueRouter from "vue-router";
import HomeRouter from "./modules/Home";
import SignRouter from "./modules/Sign";

Vue.use(VueRouter);

const routes = [
  ...HomeRouter,
  ...SignRouter,
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

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
