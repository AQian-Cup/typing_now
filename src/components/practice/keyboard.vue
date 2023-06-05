<template>
  <div
    class="flex flex-col space-y-1 items-start px-10 py-10 bg-trueGray-2 rounded-2"
  >
    <div class="flex space-x-1">
      <Key v-for="key in keyList[0]" :key="key">{{ key }}</Key>
    </div>
    <div class="flex w-full justify-between">
      <Key v-for="key in keyList[1]" :key="key">{{ key }}</Key>
    </div>
    <div class="flex w-full justify-between">
      <Key v-for="key in keyList[2]" :key="key">{{ key }}</Key>
    </div>
    <div class="flex w-full justify-between">
      <Key v-for="key in keyList[3]" :key="key">{{ key }}</Key>
    </div>
    <div class="flex w-full justify-between">
      <Key v-for="key in keyList[4]" :key="key">{{ key }}</Key>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Key from "./key.vue"

const keyList = ref([
  ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["LeftShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "RightShift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Menu", "Ctrl"],
])
</script>
<style scoped></style>
