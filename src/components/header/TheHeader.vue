<template>
  <section>
    <div class="container">
      <h3><router-link to="/">ShareScience</router-link></h3>
      <div class="navBar">
        <navigation-bar> </navigation-bar>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";

export default {
  components: {
    "navigation-bar": NavigationBar,
  },
};
</script>


<style scoped>
/*header section*/
section {
  background-color: rgba(142, 242, 109, 1);
}

.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

h3 {
  font-size: 1.2rem;
  color: black;
  width: 23%;
  
}

.navBar {
  width: 70%;
}


</style>