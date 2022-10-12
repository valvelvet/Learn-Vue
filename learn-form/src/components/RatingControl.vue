<template>
  <ul>
    <li :class="opctionActive(1)"><button type="button" @click="selected(1)">★</button></li>
    <li :class="opctionActive(2)"><button type="button" @click="selected(2)">★</button></li>
    <li :class="opctionActive(3)"><button type="button" @click="selected(3)">★</button></li>
    <li :class="opctionActive(4)"><button type="button" @click="selected(4)">★</button></li>
    <li :class="opctionActive(5)"><button type="button" @click="selected(5)">★</button></li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    opctionActive(num) {
      return this.modelValue >= num ? "active" : "";
    },
    selected(opction) {
      this.$emit("update:modelValue", opction);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
}
li {
  margin: 0;
}
li button {
  font-size: large;
  color: #ccc;
  padding-right: 0.25rem;
  background-color: transparent;
  border: none;
}
li.active button {
  color: #fa0;
}
</style>
