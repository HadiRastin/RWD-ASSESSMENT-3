<template>
  <the-header></the-header>
  
  <router-view />
</template>

<script>
import TheHeader from './components/header/TheHeader.vue';

export default {
  components: {
    "the-header": TheHeader
  },

  created() {
    this.$store.dispatch('tryLogin');
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.got(+1);
    },
  },
};
</script>


<style>

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif ;
    text-decoration:none;
}


html {
    font-size: 18;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    color: rgba(0, 0, 0, 1);
}




</style>
