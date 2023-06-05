<template>
  <div class="flex flex-col w-225 text-10">
    <div class="border-2 border-coolGray rounded-50%"></div>
    <Transition name="lead-slide" mode="out-in">
      <div class="flex justify-center items-center h-60" :key="textIndex">
        {{ text[textIndex] }}
      </div>
    </Transition>
    <div class="border-2 border-coolGray rounded-50%"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const text = ref(["这是一次开始", "这是一次结束"])
const textIndex = ref(0)
</script>
<style scoped>
.lead-slide-enter-active {
  animation: slide-in-fwd-center 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
.lead-slide-leave-active {
  animation: slide-in-fwd-center 1s cubic-bezier(0.645, 0.045, 0.355, 1) both
    reverse;
}

@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-100%);
    filter: blur(8px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
