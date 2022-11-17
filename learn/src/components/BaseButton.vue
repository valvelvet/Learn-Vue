<template>
  <button :style="{ ...props.btnStyle }" @click="onClick">
    <slot></slot>
  </button>
</template>

<!-- <script>
export default {
  props: ["btnStyle"],
  // setup(props, { attrs, slots, emit, expose }) {
  setup(props, context) {
    const onClick = (event) => context.emit("onClick", event);

    return {props, onClick};
  },
};
</script> -->

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  btnStyle: {},
});

const emit = defineEmits(["onClick"]);
const onClick = (e) => emit("onClick", e);
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid #44e;
  background-color: #44e;
  color: #fff;
}
</style>
