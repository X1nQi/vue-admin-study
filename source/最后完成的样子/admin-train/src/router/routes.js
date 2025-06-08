const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/AppHome.vue"),
    children: [
      // 默认子路由，当访问/home时，会自动跳转到/home/下的第一个子路由
      {
        path: "",
        component: () => import("@/views/DefaultHome.vue"),
        name:"DefaultHome",
        meta: {
          breadcrumb: [{ name: "首页", isLink: true }],
          keepAlive: true,
        },
      },
      // 用户管理界面子路由
      {
        path: "users",
        component: () => import("@/views/UsersManage.vue"),
        meta: {
          breadcrumb: [{name:"系统管理",isLink:false},{name:"用户管理",isLink:true}],
        },
      },
      // 角色管理界面子路由
      {
        path: "roles",
        component: () => import("@/views/RolesManage.vue"),
        meta: {
          breadcrumb: [{name:"系统管理",isLink:false},{name:"角色管理",isLink:true}],
        },
      },
    ],
  },
  // 放在最后
  {
    path: "*", // 匹配所有路径，用于显示404
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
