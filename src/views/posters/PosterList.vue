<template>
  <base-container>
    <transition-group tag="ul" name="poster-list">
      <single-poster
        v-for="poster in posters"
        :key="poster.id"
        :id="poster.id"
        :title="poster.title"
        :author="poster.author"
        :abstract="poster.abstract"
        :fields="poster.fields"
        :score="poster.score"
        :comment="poster.comment"
        :votedUsers="poster.votedUsers"
      ></single-poster>
    </transition-group>
  </base-container>
</template>

<script>
import SinglePoster from "../../components/posters/SinglePoster.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },

  props: ["sortPosters"],

  components: {
    "single-poster": SinglePoster,
  },

  computed: {
    posters() {
      return this.$store.getters["posters/posters"];
    },
  },

  created() {
    this.loadPosters();
    this.loadComments();
  },

  methods: {
    async loadPosters() {
      this.isLoading = true;
      await this.$store.dispatch("posters/loadPosters");
      this.isLoading = false;
    },

    async loadComments() {
      this.isLoading = true;
      await this.$store.dispatch("comments/loadComments");
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.poster-list-enter-from {
  opacity: 0;
  transform: translateY(+50px);
}

.poster-list-enter-active {
  transition: all 0.5s ease-out;
}

.poster-list-enter-to,
.poster-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.poster-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.poster-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.poster-list-move {
  transition: transform 0.8s ease;
}
</style>