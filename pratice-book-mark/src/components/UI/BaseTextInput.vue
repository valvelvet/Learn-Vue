<template>
  <label>
    <span> ✏️ <slot></slot></span>
    <textarea
      v-if="type === 'textarea'"
      v-model="inputValue"
      :id="value"
      :name="value"
      rows="3"
      @input="$emit('onInput', inputValue)"
    ></textarea>
    <input v-else type="type" v-model="inputValue" :id="value" :name="value" @input="$emit('onInput', inputValue)" />
  </label>
</template>

<script>
export default {
  props: ["value", "type"],
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
  display: flex;
  margin: 1rem 0;
}
label span {
  display: inline-block;
  width: 10rem;
  text-align: right;
  padding: 0.25rem 1rem;
}
textarea,
input {
  border: none;

  font-family: monospace;
  box-shadow: 0 2px 4px 2px #00000022;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}
textarea {
  border-radius: 8px;
}
textarea:focus,
input:focus {
  background-color: #00000006;
  box-shadow: inset 0 2px 3px 2px #00000022;
}
:focus-visible {
  outline: none;
}
</style>
