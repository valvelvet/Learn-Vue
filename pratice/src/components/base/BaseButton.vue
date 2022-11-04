<template>
  <button v-if="!isLink" @click="$emit('click')" class="base-button">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="base-button">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Object, String],
      default: "/",
    },
  },
  emits: ["click"],
};
</script>

<style scoped>
.base-button {
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: #568;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 5px 0 #ddd;
}
.base-button:hover {
  color: #59a;
  box-shadow: inset 0 1px 5px 0 #ddd;
}
.base-button.active {
  color: #568;
  background-color: #aef3;
  box-shadow: inset 0 1px 5px 0 #ddd;
}
</style>
