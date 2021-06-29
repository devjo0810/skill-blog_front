const Login = () =>
  import(/* webpackChunkName: "sign" */ "@/views/sign/Login.vue");
const Signup = () =>
  import(/* webpackChunkName: "sign" */ "@/views/sign/Signup.vue");
const FindId = () =>
  import(/* webpackChunkName: "sign" */ "@/views/sign/FindId.vue");
const FindPassword = () =>
  import(/* webpackChunkName: "sign" */ "@/views/sign/FindPassword.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { header: true },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { header: true },
  },
  {
    path: "/findid",
    name: "FindId",
    component: FindId,
    meta: { header: true },
  },
  {
    path: "/findpassword",
    name: "FindPassword",
    component: FindPassword,
    meta: { header: true },
  },
];
