<template>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <div class="container allswitch">
    <transition name="allswitch" mode="out-in">
      <button v-if="allIsVisible" @click="toggleVisible">開</button>
      <button v-else @click="toggleVisible">關</button>
    </transition>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <button @click="trggleP">文字切換</button>
    <transition
      name="p"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <p v-if="pIsVisible">‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹  ›››››››››››››››</p>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <UsersList></UsersList>
  </div>
</template>

<script>
import UsersList from "./components/UsersList.vue";
export default {
  components: { UsersList },
  data() {
    return {
      allIsVisible: true,
      dialogIsVisible: false,
      animatedBlock: true,
      pIsVisible: false,
      enterIntarval: null,
      leaveIntarval: null,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    trggleP() {
      this.pIsVisible = !this.pIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleVisible() {
      this.allIsVisible = !this.allIsVisible;
    },
    // JS鉤子
    onBeforeEnter(el) {
      console.log("onBeforeEnter", el);
      el.style.opacity = 0;
    },
    // onEnter(el) {
    onEnter(el, done) {
      // done()：指定 Enter的結束，進到 AfterEnter執行
      // 而當與 css的動畫結合使用時，done為可選，因為 css的動畫已決定好結束時間，不必再次控制
      // 當未使用 css動畫或用 done()指定結束時間，Vue不知道何時去執行 AfterEnter，AfterEnter就會直接執行
      console.log("onEnter", el);
      this.enterIntarval = setInterval(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        if (el.style.opacity >= 1) {
          clearInterval(this.enterIntarval);
          done();
        }
      }, 50);
    },
    onAfterEnter(el) {
      console.log("onAfterEnter", el);
    },
    onEnterCancelled(el) {
      // 當 Enter的動畫未結束就執行 Leave，將造成兩個動畫同時進行的情況(el的透明度會加加減減的閃爍)，此情況可以在 Cancel事件中處理
      console.log("onEnterCancelled", el);
      clearInterval(this.enterIntarval);
    },
    onBeforeLeave(el) {
      console.log("onBeforeLeave", el);
    },
    // onLeave(el) {
    onLeave(el, done) {
      // done()：與 Enter的 done()相同
      console.log("onLeave", el);
      this.leaveIntarval = setInterval(() => {
        el.style.opacity = parseFloat(el.style.opacity) - 0.1;
        if (el.style.opacity <= 0) {
          done();
          clearInterval(this.leaveIntarval);
        }
      }, 50);
    },
    onAfterLeave(el) {
      console.log("onAfterLeave", el);
    },
    onLeaveCancelled(el) {
      console.log("onLeaveCancelled", el);
      clearInterval(this.leaveIntarval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background-color: #010;
}
a {
  text-decoration: none;
  color: #3ca;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #041;
  border-radius: 30px;
  background-color: #041;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #063;
  border-color: #063;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #00a040;
  margin-bottom: 2rem;
  /* transition: 0.5s ease; */
  animation: roling 5s infinite linear;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #8a9;
  border-radius: 12px;
  box-shadow: 1px 1px 8px 2px #3ca;
}
.container p {
  color: #acb;
}
.pagelink {
  display: flex;
  justify-content: space-between;
}
.animate {
  /* transform: translate(-200px, 0); */
  animation-play-state: paused;
}
@keyframes roling {
  0% {
    transform: rotate(0deg) translate(0, -0px) rotate(0deg);
  }
  50% {
    transform: rotate(360deg) translate(-0, 300px) rotate(360deg);
  }
  100% {
    transform: rotate(720deg) translate(0, 0px) rotate(720deg);
  }
}

.slide-right-leave-active {
  animation: slideLeft 0.2s linear reverse;
}
.slide-right-enter-active {
  animation: slideRight 0.2s linear;
}
@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-left-leave-active {
  animation: slideRight 0.2s linear reverse;
}
.slide-left-enter-active {
  animation: slideLeft 0.2s linear;
}
@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.allswitch-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.allswitch-enter-active,
.allswitch-leave-active {
  transition: 0.3s linear;
}
.allswitch-enter-to,
.allswitch-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.allswitch-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
