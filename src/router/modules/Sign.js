const Login = () =>
  import(/* webpackChunkName: "login" */ "@/views/sign/Login.vue");
const Signup = () =>
  import(/* webpackChunkName: "signup" */ "@/views/sign/Signup.vue");
const FindId = () =>
  import(/* webpackChunkName: "findid" */ "@/views/sign/FindId.vue");
const FindPassword = () =>
  import(
    /* webpackChunkName: "findpassword" */ "@/views/sign/FindPassword.vue"
  );

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
