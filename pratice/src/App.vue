<template>
  <TheHeader></TheHeader>

  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>

  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "./components/navigation/TheHeader.vue";
import TheFooter from "./components/navigation/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  vertical-align: middle;
  text-decoration: none;
  list-style: none;
}

html {
  font-family: sans-serif;
}

body {
  overflow-x: hidden;
}

main {
  font-size: 0;
  background-color: #88a2;
  margin-top: 60px;
  padding: 2rem 0;
  min-height: calc(100vh - 60px - 2rem);
}
section {
  font-size: 16px;
}
label {
  color: #555;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate(20px, 0) scale(0.9);
}
.list-leave-active {
  position: absolute !important;
}

.route-leave-to,
.route-enter-from {
  opacity: 0;
}
.route-leave-active {
  transition: 0.3s ease;
}
.route-enter-active {
  transition: 0.5s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
