import { ROUTE_PATHS } from "@/router/paths";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_PATHS.HOME,
    component: () => import("@/views/Home.vue"),
    meta: {
      breadcrumb: [{ label: "Home", route: "/" }],
    },
  },
  {
    path: ROUTE_PATHS.ABOUT,
    name: ROUTE_PATHS.ABOUT,
    component: () => import("@/views/About.vue"),
    meta: {
      breadcrumb: [{ label: "About", route: "/company" }],
    },
  },
  {
    path: ROUTE_PATHS.PROFILE,
    name: ROUTE_PATHS.PROFILE,
    component: () => import("@/views/Profile.vue"),
    meta: {
      breadcrumb: [{ label: "Profile", route: "/profile" }],
    },
  }
//   },
//   {
//     path: "/:pathMatch(.*)*",
//     name: "notfound",
//     component: () => import("@/views/NotFound.vue"),
//   },
//   {
//     path: "/auth/register",
//     name: "register",
//     component: () => import("@/views/auth/Register.vue"),
//   },
//   {
//     path: "/auth/forgotpassword",
//     name: "forgotpassword",
//     component: () => import("@/views/auth/ForgotPassword.vue"),
//   },
//   {
//     path: "/auth/login",
//     name: "login",
//     component: () => import("@/views/auth/Login.vue"),
//   },
];

export default routes;
