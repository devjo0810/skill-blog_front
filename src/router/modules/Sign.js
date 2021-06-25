const Login = () =>
  import(/* webpackChunkName: "login" */ "@/views/sign/Login.vue");
const Signup = () =>
  import(/* webpackChunkName: "signup" */ "@/views/sign/Signup.vue");

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
];
