<template>
	<div>
		<slot></slot>		
	</div>
</template>

<style scoped>
div{
	background-color: #fff;
	border-radius: 20px;
  box-shadow: 0 1px 5px 0 #ddd;
	padding: 1rem;
  position: relative;
  margin: 0 auto;
  max-width: 600px;
	width: calc(100% - 2rem);
}
</style>