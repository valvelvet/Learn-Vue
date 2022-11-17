<template>
  <input :type="type" @input="onInput" v-model="value" />
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from "vue";
export default {
  props: ["type", "modelValue"],

  setup(props, context) {
    const value = ref(props.modelValue);
    const onInput = (event) => context.emit("input", event);

    onBeforeMount(() => console.log("onBeforeMount"));
    onMounted(() => console.log("onMounted"));
    onBeforeUpdate(() => console.log("onBeforeUpdate"));
    onUpdated(() => console.log("onUpdated"));
    onBeforeUnmount(() => console.log("onBeforeUnmount"));
    onUnmounted(() => console.log("onUnmounted"));

    return { value, onInput };
  },
};
</script>

<!-- <script setup>
import { defineProps, defineEmits, toRefs } from "vue";

const props = defineProps({
  type: { type: String, default: "text" },
  modelValue: { type: [String, Number] },
});
const emit = defineEmits(["input"]);

const { type, value } = toRefs(props);	// 為每個屬性創建 ref，可在解構後保持響應性
const onInput = (event) => emit("input", event);
</script> -->

<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid #44e;
  background-color: #44e;
  color: #fff;
}
</style>
