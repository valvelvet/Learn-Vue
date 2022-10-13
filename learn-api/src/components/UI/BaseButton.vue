<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #042;
  background-color: #042;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #033;
  border-color: #033;
}
</style>
