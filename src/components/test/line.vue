<template>
  <div class="w-full text-4xl">
    <span>
      <span
        v-for="(character, index) in props.text"
        :class="{ 'text-yellow': isRight(character, index) }"
        >{{ character }}
      </span>
    </span>
    <NInput
      ref="inputRef"
      v-model:value="input"
      :disabled="isdisabled"
    ></NInput>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue"
import { NInput } from "naive-ui"
import { onStartTyping } from "@vueuse/core"
import { useStore } from "@/store"

const props = defineProps<{
  text: string
}>()
const emit = defineEmits<{
  (e: "completed"): void
}>()

const store = useStore()
const input = ref("")
const inputRef = ref<HTMLInputElement | null>(null)
const isdisabled = ref(false)
const isRight = (character: string, index: number) => {
  return character === input.value[index]
}
watch(input, (value, oldValue) => {
  if (value.length > oldValue.length) {
    if (value[value.length - 1] === props.text[value.length - 1]) {
      store.countIncrease()
    }
  } else {
    if (oldValue[oldValue.length - 1] === props.text[oldValue.length - 1]) {
      store.countDecrease()
    }
  }
  if (value.length === props.text.length) {
    isdisabled.value = true
    emit("completed")
  }
})
onStartTyping(() => {
  if (inputRef.value !== document.activeElement) {
    inputRef.value?.focus()
  }
})
</script>
<style scoped></style>
