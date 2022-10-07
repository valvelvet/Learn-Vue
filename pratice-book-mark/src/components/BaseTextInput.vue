<template>
  <label>
    <span> ✏️ <slot></slot></span>
    <input type="text" v-model="inputValue" @input="$emit('onInput', inputValue)" />
  </label>
</template>

<script>
export default {
  props: ["value"],
  emit: ["updateTextField"],
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    value() {
      this.inputValue = this.value;
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin: 1rem 0;
}
label span {
  display: inline-block;
  width: 10rem;
  text-align: right;
  padding: 0 1rem;
}
input {
  border: none;
  box-shadow: 0 2px 4px 2px #00000022;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}
input:focus {
  background-color: #00000006;
  box-shadow: inset 0 2px 3px 2px #00000022;
}
</style>
