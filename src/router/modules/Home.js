const Home = () => import("@/views/Home.vue");

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { header: true },
  },
];
