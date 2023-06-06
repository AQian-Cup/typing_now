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
  return { rightCount, countIncrease, countDecrease }
})
