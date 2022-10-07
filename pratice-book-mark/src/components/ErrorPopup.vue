<template>
  <div>
    <dialog open>
      <header>
        <h2>{{ title }}</h2>
      </header>
      <main>
        <p>
          <slot></slot>
        </p>
      </main>
      <button @click="$emit('closePop')">✖️</button>
    </dialog>
  </div>
</template>

<script>
export default {
  props: ["title"],
  emits: ["closePop"],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0006;
}
dialog {
  padding: 20px 80px 20px 20px;
  top: 50%;
  left: 50%;
  min-width: 50vw;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 5px 3px #00000022;
}
h2 {
  color: #710;
}
p {
  margin: 0.5rem 0 0;
  white-space: pre;
}
</style>
