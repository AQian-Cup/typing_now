<template>
  <div
    :class="{ 'border-yellow': isPressed }"
    :style="{ '--width': (keyWidthMap[key] || 1) * 4 + 'rem' }"
    class="flex justify-center items-center bg-white box-border h-16 w-[--width] rounded-2 border-coolGray border-2 text-4 transition-all"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, useSlots } from "vue"
import { onKeyStroke } from "@vueuse/core"

const slots = useSlots()
const isPressed = ref(false)
const keyMap: any = {
  Ctrl: "Control",
  Fn: "Fn",
  Win: "Meta",
  Alt: "Alt",
  Space: " ",
  LeftShift: "Shift",
  RightShift: "Shift",
}
const keyWidthMap: any = {
  Backspace: 2.0,
  Tab: 1.5,
  CapsLock: 1.75,
  Enter: 2.25,
  LeftShift: 2.25,
  RightShift: 2.75,
  Ctrl: 1.25,
  Win: 1.25,
  Alt: 1.25,
  Space: 6.25,
  Menu: 1.25,
  "\\": 1.5,
}
const key = slots.default?.()[0].children as string
const keyValue = keyMap[key] || key

onKeyStroke(keyValue, () => {
  isPressed.value = true
  const timeHandler = setTimeout(() => {
    isPressed.value = false
    clearTimeout(timeHandler)
  }, 300)
})
</script>
<style scoped></style>
