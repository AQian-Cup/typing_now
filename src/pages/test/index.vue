<template>
  <div class="flex flex-col justify-start items-center px-24 py-10">
    <Transition name="line-slide">
      <Line
        :text="text[lineNumber]"
        :key="lineNumber"
        @completed="lineNumberIncrement"
      ></Line>
    </Transition>
    <!-- <div class="border border-coolGray rounded w-4xl">测试</div> -->
    <NModal
      v-model:show="isOver"
      transform-origin="center"
      :mask-closable="false"
    >
      <NCard class="w-200">测试内容</NCard>
    </NModal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Line from "@/components/test/line.vue"
import { NModal, NCard } from "naive-ui"

const lineNumber = ref(0)
const lineNumberIncrement = () => {
  if (lineNumber.value === text.value.length - 1) {
    return
  }
  lineNumber.value++
}
const text = ref(["Hello", "World"])
const isOver = ref(false)
</script>
<style scoped>
.line-slide-enter-active {
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.line-slide-leave-active {
  animation: slide-out-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out-top {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
