<template>
  <div class="flex justify-between p-10">
    <div class="flex flex-col justify-center items-start">
      <button
        v-for="button in homeButtons"
        class="py-6 text-4xl"
        @click="goPage(button.path)"
      >
        {{ button.name }}
      </button>
    </div>
    <NMessageProvider>
      <LanguageSwitch></LanguageSwitch>
    </NMessageProvider>
  </div>
</template>
<script lang="ts" setup>
import { NMessageProvider } from "naive-ui"
import { ref } from "vue"
import { useRouter } from "vue-router"
import LanguageSwitch from "@/components/home/languageSwitch.vue"

const router = useRouter()
const homeButtons = ref([
  { name: "打字测试", path: "/test" },
  { name: "指法练习", path: "/practice" },
  { name: "数据统计", path: "/statistic" },
])
const goPage = (path: string) => {
  router.push(path)
}
</script>
<style scoped></style>
