<template>
  <base-container class="main">
    <base-button @click="ChooseSearchComponent('search-author')">
      Search By Author Name
    </base-button>
    <base-button @click="ChooseSearchComponent('search-poster')"
      >Search By Poster Title
    </base-button>
  </base-container>

  

  <base-container v-if="selectedComponent">
    <search-author v-if="selectedComponent === 'search-author'"></search-author>
    <search-poster v-if="selectedComponent === 'search-poster'"></search-poster>
  </base-container>
</template>

<script>
import SearchAuthor from "../../components/search/SearchAuthor.vue";
import SearchPoster from "../../components/search/SearchPoster.vue";

export default {
  components: {
    "search-author": SearchAuthor,
    "search-poster": SearchPoster,
  },

  data() {
    return {
      selectedComponent: "",
    };
  },

  methods: {
    ChooseSearchComponent(text) {
      this.selectedComponent = text;
    },
  },
};
</script>

<style scoped>
.main {
  margin: 1rem auto;
  text-align: center;
}
</style>