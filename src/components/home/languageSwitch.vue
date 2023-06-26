<template>
  <button class="i-majesticons-translate-line text-3xl" @click="info"></button>
</template>
<script lang="ts" setup>
import { useMessage } from "naive-ui"

const message = useMessage()
const info = () => {
  message.info("已切换语言", {
    duration: 1000,
    showIcon: false,
  })
}
</script>
<style scoped></style>
