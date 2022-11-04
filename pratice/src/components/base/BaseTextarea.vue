<template>
  <div>
    <label>{{ label }}</label>
    <p v-if="readonly">{{ inputValue }}</p>
    <textarea
    v-else
      v-model="inputValue"
      :cols="col ?? 30"
      :rows="row ?? 3"
      :disabled="readonly ?? false"
      @input="$emit('onInput', inputValue)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label", "col", "row", "readonly"],
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
textarea {
  resize: none;
  min-width: 200px;
  font-size: 1rem;
  color: #446;
  border-radius: 10px;
  padding: 0.25rem 0.75rem;
  border: 1px solid #ddd;
  box-shadow: 0 1px 5px 0 #ddd;
  outline: none;
}
textarea::placeholder {
  color: #88a;
}
textarea:focus {
  box-shadow: inset 0 1px 5px 0 #ddd;
}
textarea:focus::placeholder {
  color: #88a3;
}
p{
  color: #59a;
}
</style>
