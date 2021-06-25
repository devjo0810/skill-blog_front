const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { header: true },
  },
];
