<template>
  <section>
    <BaseCard class="card">
      <h1>Unknown Page</h1>
      <BaseButton :isLink="true" to="/">Back to home page » </BaseButton>
    </BaseCard>
  </section>
</template>

<style scoped>
.card {
  text-align: center;
  padding: 2rem;
}
h1{
  display: inline-block;
  margin-right: 1rem;

}
</style>
