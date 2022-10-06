<template>
  <base-section>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role">{{ role.toUpperCase() }}</base-badge>
    </template>
    <p>{{ infoText }}</p>
  </base-section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
