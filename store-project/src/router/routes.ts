import { ROUTE_PATHS } from "@/router/paths";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_PATHS.HOME,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    name: ROUTE_PATHS.ABOUT,
    component: () => import("@/views/About.vue"),
  },
  {
    path: ROUTE_PATHS.PRODUCTS,
    name: ROUTE_PATHS.PRODUCTS,
    component: () => import("@/views/Product.vue"),
  },
  {
    path: ROUTE_PATHS.SERVICES,
    name: ROUTE_PATHS.SERVICES,
    component: () => import("@/views/Services.vue"),
  },
  {
    path: ROUTE_PATHS.CART,
    name: ROUTE_PATHS.CART,
    component: () => import("@/views/CartView.vue"),
  },

];

export default routes;
