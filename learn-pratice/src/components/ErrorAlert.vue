<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
	color: brown;
  position: fixed;
	top: 100px;
	margin: auto;	
	padding: 0em 2em 1.5em;
	box-shadow: 1px 3px 8px 0 #00000044;
}
</style>
