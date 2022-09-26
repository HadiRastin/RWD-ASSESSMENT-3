<template>
<base-container>

  <ul>
    <single-author
      v-for="author in authors"
      :key="author.userID"
      :authorID="author.userID"
      :name="author.name"
      :affiliation="author.affiliation"
      :score="author.score"
      :fields="author.fields"
      :description="author.description"
    ></single-author>
  </ul>

  </base-container>
</template>

<script>
import SingleAuthor from "../../components/authors/SingleAuthor.vue";
export default {
  components: {
    "single-author": SingleAuthor,
  },

   created() {
    this.loadAuthors();
  },

  computed: {
    authors() {
      return this.$store.getters['authors/authors'];
    },
  },

  methods: {
    async loadAuthors() {
      //this.isLoading = true;
      await this.$store.dispatch("authors/loadAuthors");
      //this.isLoading = false;
    },
  }
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0.5rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>