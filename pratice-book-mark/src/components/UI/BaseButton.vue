<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 4px 2px #00000022;
}
button:hover {
  box-shadow: inset 0 2px 3px 2px #00000022;
}
button.active {
  box-shadow: inset 0 2px 3px 2px #00000022;
}
</style>
