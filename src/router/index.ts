import { createRouter, createWebHistory,  } from 'vue-router'
import routes from "@/router/routes";

const vueRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes 
})

export default vueRouter
