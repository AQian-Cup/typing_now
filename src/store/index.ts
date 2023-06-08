import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useStore = defineStore("main", () => {
  const rightCount = ref(0)
  const countIncrease = () => {
    rightCount.value++
  }
  const countDecrease = () => {
    rightCount.value--
  }
  const countReset = () => {
    rightCount.value = 0
  }
  return { rightCount, countIncrease, countDecrease, countReset }
})
