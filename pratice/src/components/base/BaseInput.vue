<template>
  <div>
    <label>{{ label }}</label>
    <p v-if="readonly">{{ inputValue }}</p>
    <input
      v-else
      v-model="inputValue"
      :type="type ?? 'text'"
      :maxlength="maxlength"
      :placeholder="placeholder ?? '-'"
      :disabled="readonly ?? false"
      :class="{ inputError: inputError }"
      @input="$emit('onInput', inputValue)"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label", "type", "maxlength", "placeholder", "readonly", "inputError"],
  emits: ["onInput"],
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  created() {
    this.inputValue = this.modelValue;
  },
};
</script>

<style scoped>
div {
  margin: 0.5rem 0;
}
input {
  font-size: 1rem;
  color: #446;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  border: 1px solid #ddd;
  box-shadow: 0 1px 5px 0 #ddd;
  outline: none;
}
input::placeholder {
  color: #88a;
}
input:focus {
  box-shadow: inset 0 1px 5px 0 #ddd;
}
input:focus::placeholder {
  color: #88a3;
}
input.inputError{
  border: 1px solid #caa;
}
p {
  color: #59a;
}
</style>
