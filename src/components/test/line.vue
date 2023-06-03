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
import { ref, watch, onMounted, onBeforeMount } from "vue"
import { NInput } from "naive-ui"

const props = defineProps<{
  text: string
}>()

const emit = defineEmits<{
  (e: "completed"): void
}>()

const input = ref("")
const inputRef = ref<HTMLInputElement | null>(null)
const isdisabled = ref(false)
const isRight = (character: string, index: number) => {
  return character === input.value[index]
}
watch(input, (value) => {
  if (value.length === props.text.length) {
    isdisabled.value = true
    emit("completed")
  }
})
onMounted(() => {
  inputRef.value?.focus()
})
</script>
<style scoped></style>
