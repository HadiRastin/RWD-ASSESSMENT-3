<template>
  <section class="controls">
    <base-container>
      <base-button @click="showPanel('posters')">My Posters</base-button>
      <base-button @click="showPanel('messages')">My Messages</base-button>
      <base-button @click="showPanel('author')"
        >Register as a Author</base-button
      >
    </base-container>
  </section>

  <section v-if="checkPanel === 'posters'">
    <base-container>
      <div class="controls">
        <base-button @click="TogglePosterForm">Add a Poster</base-button>
      </div></base-container
    >
    <base-container>
      <div v-if="showPosterForm">
        <base-container>
          <h2>Add a Poster</h2>
          <poster-form @save-data="saveData"></poster-form>
        </base-container>
      </div>

      <div v-if="isLoading">
        <p>Loading ...</p>
      </div>
      <ul v-else-if="hasPosters && selectedPosters.length > 0">
        <my-single
          v-for="poster in selectedPosters"
          :key="poster.id"
          :id="poster.id"
          :title="poster.title"
          :abstract="poster.abstract"
          :score="poster.score"
          :fields="poster.fields"
        ></my-single>
      </ul>
      <h3 v-else>No poster was found.</h3>
    </base-container>
  </section>

  <section v-if="checkPanel === 'messages'">
    <base-container>
      <div v-if="isLoadingMessage">
        <p>Loading Mesaages...</p>
      </div>
      <ul v-else-if="hasMessages && selectedMessages.length > 0">
        <single-message
          v-for="message in selectedMessages"
          :key="message.id"
          :email="message.email"
          :message="message.message"
        ></single-message>
      </ul>
      <h3 v-else>No message was found.</h3>
    </base-container>
  </section>

  <section v-if="checkPanel === 'author'">
    <base-container v-if="!isAlreadyAuthor">
      <author-form @save-data-author="saveDataAuthor"> </author-form>
    </base-container>

    <base-container v-else>
      <h3>You have already register as a Author!</h3>
    </base-container>
  </section>
</template>

<script>
import SingleMessage from "../../components/messages/SingleMessage.vue";
import PosterForm from "../../components/posters/PosterForm.vue";
import MySingle from "./MySingle.vue";
import AuthorForm from "../../components/authors/AuthorForm.vue";
import SearchMixins from "../../mixins/mixins";

export default {
  mixins: [SearchMixins],
  components: {
    "poster-form": PosterForm,
    "single-message": SingleMessage,
    "my-single": MySingle,
    "author-form": AuthorForm,
  },

  data() {
    return {
      isLoading: false,
      isLoadingMessage: false,
      foundedPoster: null,
      showPosterForm: false,
      panel: "",
    };
  },
  computed: {
    /*
    selectedPosters() {
      const posters = this.$store.getters["posters/posters"];
      const userID = this.$store.getters.userId;
      const selectedPoster = [];
      for (let i = 0; i < posters.length; i++) {
        if (posters[i].author === userID) {
          selectedPoster.push(posters[i]);
        }
      }
      return selectedPoster;
    },

    selectedMessages() {
      const messages = this.$store.getters["messages/messages"];
      const userID = this.$store.getters.userId;
      console.log("userID is: " + userID);
      const selectedMessages = [];

      for (let i = 0; i < messages.length; i++) {
        if (messages[i].authourID === userID) {
          selectedMessages.push(messages[i]);
        }
      }
      console.log(selectedMessages);
      return selectedMessages;
    },

    hasPosters() {
      return !this.isLoading && this.$store.getters["posters/hasPosters"];
    },

    hasMessages() {
      console.log(
        !this.isLoadingMessage && this.$store.getters["messages/hasMessages"]
      );
      return (
        !this.isLoadingMessage && this.$store.getters["messages/hasMessages"]
      );
    },
*/
    checkPanel() {
      if (this.panel === "posters") {
        return "posters";
      }

      if (this.panel === "messages") {
        return "messages";
      }

      if (this.panel === "author") {
        return "author";
      }
    },

    isAlreadyAuthor() {
      console.log(
        "the user is already author: " + this.$store.getters["authors/isAuthor"]
      );
      return this.$store.getters["authors/isAuthor"];
    },
  },

  created() {
    this.loadPosters();
    this.loadMessages();
    this.loadAuthors();
  },

  methods: {
    async loadPosters() {
      this.isLoading = true;
      await this.$store.dispatch("posters/loadPosters");
      this.isLoading = false;
    },

    async loadMessages() {
      this.isLoadingMessage = true;
      await this.$store.dispatch("messages/loadMessages");
      this.isLoadingMessage = false;
    },

    async loadAuthors() {
      await this.$store.dispatch("authors/loadAuthors");
    },

    TogglePosterForm() {
      this.showPosterForm = !this.showPosterForm;
    },

    saveData(data) {
      this.$store.dispatch("posters/addPoster", data);
    },

    saveDataAuthor(data) {
      this.$store.dispatch("authors/addAuthor", data);
    },

    showPanel(text) {
      this.panel = text;
      console.log(this.panel);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>