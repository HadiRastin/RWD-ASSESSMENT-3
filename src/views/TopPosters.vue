<template>
  <poster-list :sortPosters="sortPosters"> </poster-list>
</template>

<script>
import PosterList from "./posters/PosterList.vue";

export default {
  data() {
    return {
      sortedPosters: this.$store.getters['posters/posters'],
    };
  },

  components: {
    "poster-list": PosterList,
  },

  computed: {
    sortPosters() {
      return this.$store.getters['posters/sortPosters'];
    },
  },
};
</script>

<style>
</style>