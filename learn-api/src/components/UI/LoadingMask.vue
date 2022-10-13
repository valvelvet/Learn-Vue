<template>
  <teleport to="body">
    <div class="loading-mask">
      <div class="loading-circle"></div>
    </div>
  </teleport>
</template>

<style scoped>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0008;
}
.loading-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;

  border: 5px solid #acc;
  border-right-color: transparent;
  border-radius: 50%;
  animation: 1s linear LoadingCircle infinite;
}
@keyframes LoadingCircle {
  0% {
  transform: rotate(0deg);
	}
  80% {
  transform: rotate(270deg);
  }
  100% {
  transform: rotate(360deg);
  }
}
</style>
