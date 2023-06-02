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
    meta: { transition: "slide-left" },
  },
  {
    path: "/practice",
    component: practice,
    meta: { transition: "slide-down" },
  },
  {
    path: "/statistic",
    component: statistic,
    meta: { transition: "slide-right" },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to, form) => {
  if (to.path === "/") {
    switch (form.path) {
      case "/test":
        to.meta.transition = "slide-right"
        break
      case "/practice":
        to.meta.transition = "slide-up"
        break
      case "/statistic":
        to.meta.transition = "slide-left"
        break
    }
  }
})

export default router
