<template>
  <li>
    <p>
      <span class="highlight">{{ name }}</span> rated the learning experience
      <span :class="ratingClass">{{ rating }}</span>.
    </p>
  </li>
</template>

<script>
export default {
  props: ['name', 'rating'],
  computed: {
    ratingClass() {
      return 'highlight rating--' + this.rating;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--1 {
  color: #b80056;
}

.rating--2 {
  color: #bf7600;
}

.rating--3 {
  color: #008314;
}
.rating--4 {
  color: #0099b0;
}
.rating--5 {
  color: #140083;
}
</style>