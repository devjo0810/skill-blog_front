const Mypage = () =>
  import(/* webpackChunkName: "user" */ "@/views/user/Mypage.vue");
const UserSearch = () =>
  import(/* webpackChunkName: "user" */ "@/views/user/UserSearch.vue");

export default [
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    meta: { header: true, auth: true },
  },
  {
    path: "/user",
    name: "UserSearch",
    component: UserSearch,
    meta: { header: true },
  },
];
