<template>
  <span class="flex justify-start px-1 w-full text-2xl text-blueGray-400">
    {{ porps.text }}
  </span>
</template>
<script lang="ts" setup>
const porps = defineProps<{
  text: string
}>()
</script>
<style scoped>
</style>
