<template>
  <li>
    <h3 v-colorFul>{{comment}}</h3>
    <h2></h2>
  </li>
</template>

<script>
export default {
  props: ['comment']
};
</script>

<style scoped>
h3{
  color:black;
}
</style>