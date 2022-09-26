<template>
  <form @submit.prevent="startSearch">
    <div :class="{ invalid: !enteredTitle.isValid }">
      <label for="title">Please enter poster Title</label>
      <input
        id="title"
        type="text"
        v-model.trim="enteredTitle.val"
        @blur="clearValidity('enteredTitle')"
      />
    </div>
    <p v-if="!enteredTitle.isValid">Please enter the title!</p>

    <div class="submittButton">
      <base-button >Search </base-button>
    </div>
  </form>

  <div v-if="foundedPoster">
    <single-poster
      :id="foundedPoster.id"
      :title="foundedPoster.title"
      :abstract="foundedPoster.abstract"
      :score="foundedPoster.score"
      :fields="foundedPoster.fields"
    >
    </single-poster>

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
      enteredTitle: {
        val:"",
        isValid:true
        },
      foundedPoster: null,
      formIsValid: true,
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.enteredTitle.val === '') {
        this.enteredTitle.isValid = false;
        this.formIsValid = false;
      }
    },

    startSearch() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }
      this.foundedPoster = this.$store.getters["posters/posters"].find(
        (poster) => poster.title === this.enteredTitle.val
      );
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
</style>
