<template>
  <div :id="id" @click="$emit('onClick')" :class="{ readonly: readonly }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["id", "readonly"],
  emits: ["onClick"],
};
</script>

<style scoped>
div {
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem 1rem;
  border-radius: 50px;
  color: #568;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 5px 0 #ddd;
}
div.readonly {
  cursor: default;
}
div.checked {
  color: #59a;
  box-shadow: inset 0 1px 5px 0 #ddd;
}
input {
  display: none;
}
</style>
