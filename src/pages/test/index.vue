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
      <NCard class="w-200">
        <template #default>
          <div class="flex flex-col space-y-4 items-center text-4">
            <div>恭喜你完成测试</div>
            <div>用时{{ time }}秒</div>
            <div>输入{{ count }}字</div>
            <div>速度为{{ speed }}字每秒</div>
          </div>
        </template>
        <template #footer>
          <div class="space-x-8 text-center">
            <NButton @click="restart">重新开始</NButton>
            <NButton @click="backHome">回到首页</NButton>
          </div>
        </template>
      </NCard>
    </NModal>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import Line from "@/components/test/line.vue"
import { NModal, NCard, NButton } from "naive-ui"
import { onKeyStroke, useTimestamp } from "@vueuse/core"

const router = useRouter()
const startTime = ref(0)
const endTime = ref(0)
const time = ref(0)
const timestamp = useTimestamp()
const lineNumber = ref(0)
const lineNumberIncrement = () => {
  if (lineNumber.value === text.value.length - 1) {
    endTime.value = timestamp.value
    time.value = +((endTime.value - startTime.value) / 1000).toFixed(2)
    isOver.value = true
    return
  }
  lineNumber.value++
}
const text = ref(["Hello", "World"])
const count = computed(() => {
  return text.value.reduce(
    (previousValue, currentValue) => previousValue + currentValue.length,
    0,
  )
})
const speed = computed(() => {
  return (count.value / time.value).toFixed(2)
})
const isOver = ref(false)
onKeyStroke(() => {
  if (!startTime.value) {
    startTime.value = timestamp.value
  }
})
const restart = () => {
  startTime.value = 0
  endTime.value = 0
  time.value = 0
  lineNumber.value = 0
  isOver.value = false
}
const backHome = () => {
  router.push("/")
}
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
