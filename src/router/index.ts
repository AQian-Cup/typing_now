import { createRouter, createWebHistory } from "vue-router"
import home from "@/pages/home/index.vue"
import test from "@/pages/test/index.vue"
import statistic from "@/pages/statistic/index.vue"
import practice from "@/pages/practice/index.vue"

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/test",
    component: test,
  },
  {
    path: "/practice",
    component: practice,
  },
  {
    path: "/statistic",
    component: statistic,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
