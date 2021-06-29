const BlogSearch = () =>
  import(/* webpackChunkName: "blog" */ "@/views/blog/BlogSearch.vue");
const BlogDetail = () =>
  import(/* webpackChunkName: "blog" */ "@/views/blog/BlogDetail.vue");
const BlogCreate = () =>
  import(/* webpackChunkName: "blog" */ "@/views/blog/BlogCreate.vue");
const BlogUpdate = () =>
  import(/* webpackChunkName: "blog" */ "@/views/blog/BlogUpdate.vue");

export default [
  {
    path: "/blog",
    name: "BlogSearch",
    component: BlogSearch,
    meta: { header: true },
  },
  {
    path: "/blog/create",
    name: "BlogCreate",
    component: BlogCreate,
    meta: { header: true, auth: true },
  },
  {
    path: "/blog/update",
    name: "BlogUpdate",
    component: BlogUpdate,
    meta: { header: true, auth: true },
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: BlogDetail,
    meta: { header: true },
  },
];
