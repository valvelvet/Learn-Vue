<template>
  <nav>
    <button
      v-for="item in menu"
      :key="item"
      @click="changePage(item.component)"
      :class="openingPage === item.component ? 'active' : ''"
    >
      {{ item.lable }}
    </button>
  </nav>
</template>

<script>
export default {
  props: { menu: Object,openingPage:String },
  methods: {
    changePage(t) {
      this.$emit("changePage", t);
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
}
button {
  position:unset;
  width: auto;
  height: auto;
  border-radius: 50px;
  font-size: 1rem;
  transform: none;
  padding: 0.5rem 1rem;
  background-color: #ffe;
  margin: 0 1rem;
}
button:hover {
  background-color: #dd32;
}
button.active {
  box-shadow: inset 0 2px 3px 2px #00000022;
}
</style>
