<template>
  <div class="h-screen bg-light-3 overflow-hidden">
    <NBreadcrumb separator=">" class="m-4">
      <NBreadcrumbItem @click="goHome"> 首页 </NBreadcrumbItem>
      <NBreadcrumbItem v-for="path in route.path.split('/').slice(1)">
        {{ path }}
      </NBreadcrumbItem>
    </NBreadcrumb>
    <RouterView v-slot="{ Component }">
      <Transition :name="(route.meta.transition as string)" mode="out-in">
        <component :is="Component" class="h-full"> </component>
      </Transition>
    </RouterView>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui"

const route = useRoute()
const router = useRouter()

const goHome = () => {
  router.push("/")
}
</script>
<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}
.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-up-leave-to,
.slide-down-enter-from {
  transform: translateY(100%);
}
.slide-down-leave-to,
.slide-up-enter-from {
  transform: translateY(-100%);
}
.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(100%);
}
</style>
