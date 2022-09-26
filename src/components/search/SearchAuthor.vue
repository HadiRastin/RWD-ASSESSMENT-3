<template>
  <form @submit.prevent="startSearch">
    <div :class="{ invalid: !enteredName.isValid }">
      <label for="search">Please enter Author name</label>
      <input
        type="text"
        name="search"
        id="search"
        v-model.trim="enteredName.val"
        @blur="clearValidity('enteredName')"
      />
    </div>
    <p v-if="!enteredName.isValid">Please enter the Name!</p>

    <div class="submittButton">
      <base-button> Search </base-button>
    </div>
  </form>

  <div v-if="foundedPoster">
    <ul>
      <single-poster
        v-for="poster in foundedPoster"
        :key="poster.id"
        :id="poster.id"
        :title="poster.title"
        :abstract="poster.abstract"
        :score="poster.score"
        :fields="foundedPoster.fields"
      ></single-poster>
    </ul>
  </div>
</template>

<script>
import SinglePoster from "../posters/SinglePoster.vue";

export default {
  components: {
    "single-poster": SinglePoster,
  },
  data() {
    return {
      enteredName: {
        val: "",
        isValid: true,
      },
      foundedPoster: [],
      formIsValid: true,
    };
  },

  created() {
    this.loadAuthors();
    this.loadPosters();
  },

  methods: {
    async loadAuthors() {
      //this.isLoading = true;
      await this.$store.dispatch("authors/loadAuthors");
      //this.isLoading = false;
    },

    async loadPosters() {
      //this.isLoading = true;
      await this.$store.dispatch("posters/loadPosters");
      //this.isLoading = false;
    },


    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.enteredName.val === "") {
        this.enteredName.isValid = false;
        this.formIsValid = false;
      }
    },

    startSearch() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      //console.log("the input is valid.");

      const allAuthors = this.$store.getters["authors/authors"];
      const allPosters = this.$store.getters["posters/posters"];
      //console.log("the allAuthors length is: " + allAuthors.length);
      let selectedAuthor = {};
      for (let i = 0; i < allAuthors.length; i++) {
        if (allAuthors[i].name === this.enteredName.val) {
          selectedAuthor = allAuthors[i];
        }
      }
      //console.log("the allAuthors length is: " + selectedAuthor.userID);
      //console.log("the allposter author is: " + allPosters[0]["author"]);

      for (let i = 0; i < allPosters.length; i++) {
        
        if (allPosters[i]["author"] === selectedAuthor.userID) {
          this.foundedPoster.push(allPosters[i]);
        }
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.submittButton {
  text-align: center;
}

ul {
  list-style: none;
}
</style>