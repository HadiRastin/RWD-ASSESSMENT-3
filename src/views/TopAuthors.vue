<template>
  <author-list :sortAuthors="sortAuthors"> </author-list>
</template>

<script>
import AuthorList from "./Authors/AuthorList.vue";

export default {
  components: {
    "author-list": AuthorList,
  },

  computed: {
    sortAuthors() {
      return this.$store.getters['authors/sortAuthors'];
    },
  },
};
</script>

<style>
</style>