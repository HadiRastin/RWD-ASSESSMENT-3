<template>
  <base-container v-if="!showContactForm">
    <li>
      <h2>Name: {{ name }}</h2>
      <h2>Affiliation: {{ affiliation }}</h2>
      <h2>Score: {{ score }}</h2>
      <h2>{{ description }}</h2>
    </li>

    <base-button @click="toggleShowContactForm">Contact Author</base-button>
  </base-container>

  <base-container v-if="showContactForm">
    <contact-author :id="posterid"> </contact-author>
   
  </base-container>
</template>

<script>
import AuthorField from "../authors/AuthorField.vue";
import ContactAuthor from "./ContactAuthor.vue";

export default {
  data() {
    return {
      showContactForm: false,
    };
  },

  methods: {
    toggleShowContactForm() {
      this.showContactForm = !this.showContactForm;
    },
  },
  components: {
    "author-field": AuthorField,
    "contact-author": ContactAuthor,
  },

  props: ["posterid", "name", "affiliation", "score", "fields", "description"],

  computed: {
    AuthorContactLink() {
      return this.$route.path + "/contact";
    },
    AuthorDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
h2,
p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>