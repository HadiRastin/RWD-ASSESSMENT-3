<template>
  <h2>{{ posterTitle }}</h2>
  
  <ul>
    <single-author
      :name="authorMembers.name"
      :affiliation="authorMembers.affiliation"
      :description="authorMembers.description"
      :score="authorMembers.score"
      :fields="authorMembers.fields"
      :posterid="posterId"
    ></single-author>
  </ul>
</template>

<script>
import SingleAuthor from "../../components/posters/SingleAuthor.vue";

export default {
  components: {
    "single-author": SingleAuthor,
  },

  props: ["posterId"],

  computed: {
    posterTitle() {
      /*
      const selectedPoster = this.$store.getters['posters/posters'].find(
        (poster) => poster.id === this.posterId
      );
      */
      const allPoster = this.$store.getters["posters/posters"];
      
      //console.log(allPoster[0]["id"] == this.posterId);
      let selectedPoster = {};
      for (let i = 0; i < allPoster.length; i++) {
        if (allPoster[i]["id"] == this.posterId) {
          selectedPoster = allPoster[i];
        }
      }
      
      //console.log(selectedPoster.title);
      return selectedPoster.title;
    },

    authorMembers() {
      const allPoster = this.$store.getters["posters/posters"];

      let selectedPoster = {};
      for (let i = 0; i < allPoster.length; i++) {
        if (allPoster[i]["id"] == this.posterId) {
          selectedPoster = allPoster[i];
        }
      }
      
      console.log("the selected poster author is: "+selectedPoster.author);
      //console.log(selectedPoster.author);
      const allAuthor = this.$store.getters["authors/authors"];
      let selectedAuthor = {}
      //console.log(allAuthor.length)
      //console.log(allAuthor[0])

      for (let i = 0; i < allAuthor.length; i++) {
        if (allAuthor[i]["userID"] === selectedPoster.author) {
          selectedAuthor = allAuthor[i];
        }
      }
      //console.log(allAuthor[0]["userID"])
      //console.log(selectedAuthor.name);
      console.log("score is: "+selectedAuthor.score);
      return selectedAuthor;
    },
  },

  created() {
    this.loadPosters();
    this.loadAuthors();
  },

  methods: {
    populateAthors(posterId) {
      const selectedPoster = this.$store.getters["posters/posters"].find(
        (poster) => poster.id === posterId
      );
      const selectedAuthorMembers = [];
      for (const member of selectedPoster.authors) {
        const selectedAuthor = this.$store.getters["authors/authors"].find(
          (author) => author.name === member
        );
        selectedAuthorMembers.push(selectedAuthor);
      }
      this.authorMembers = selectedAuthorMembers;
      this.posterTitle = selectedPoster.title;
    },

    async loadPosters() {
      this.isLoading = true;
      await this.$store.dispatch("posters/loadPosters");
      this.isLoading = false;
    },

    async loadAuthors() {
      this.isLoading = true;
      await this.$store.dispatch("authors/loadAuthors");
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 1rem auto;
  width: 50%;
  color: rgb(174, 12, 223);
}

ul {
  list-style: none;
  width: 30%;
  margin: 0 auto;
}
</style>