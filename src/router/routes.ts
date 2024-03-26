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
    path: ROUTE_PATHS.IPHONE,
    name: ROUTE_PATHS.IPHONE,
    component: () => import("@/views/Iphone.vue"),
  },
  {
    path: ROUTE_PATHS.AIRPODS,
    name: ROUTE_PATHS.AIRPODS,
    component: () => import("@/views/Airpods.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_AIRPODS,
    name: ROUTE_PATHS.NEW_AIRPODS,
    component: () => import('@/views/NewAirpods.vue')
  },
  {
    path: ROUTE_PATHS.MAC,
    name: ROUTE_PATHS.MAC,
    component: () => import("@/views/Mac.vue"),
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
  {
    path: ROUTE_PATHS.CHECKOUT,
    name: ROUTE_PATHS.CHECKOUT,
    component: () => import("@/views/CheckoutView.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_IPHONE,
    name: ROUTE_PATHS.NEW_IPHONE,
    component: () => import("@/views/NewIphoneView.vue"),
    props: true, // Enable props
  },
];

export default routes;