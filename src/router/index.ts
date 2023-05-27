// 考虑到路由过渡动效的实现
// 此处没有使用路由懒加载
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
