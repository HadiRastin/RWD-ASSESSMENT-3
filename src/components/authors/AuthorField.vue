<template>
  <h4>{{ field }}</h4>
</template>

<script>
export default {
  props: ["field"],
};
</script>

<style scoped>
h4 {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>