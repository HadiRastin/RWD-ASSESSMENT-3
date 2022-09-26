<template>
  <div>
    <section>
      <base-container>
        <h2>Name: {{ name }}</h2>
        <h2>Affiliation: {{ affiliation }}</h2>
        <h2>Score: {{ score }}</h2>
      </base-container>
    </section>

    <section>
      <base-container>
        <ul>
          <author-field
            v-for="field in fields"
            :key="field"
            :field="field"
          ></author-field>
        </ul>
      </base-container>
    </section>
    <section>
      <base-container>
          <h2>Do You want to contact the Author?</h2>
          <base-button link :to="contactLink">Contact</base-button>
        <router-view></router-view>
      </base-container>
    </section>

    <section>
      <base-container>
        <p>{{ description }}</p>
      </base-container>
    </section>
  </div>
</template>

<script>
import AuthorField from '../../components/authors/AuthorField.vue'
export default {
  components: {
    'author-field':AuthorField
  },

  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    name() {
      return this.selectedAuthor.name;
    },

    affiliation(){
      return this.selectedAuthor.affiliation;
    },

    fields() {
      return this.selectedAuthor.fields;
    },
    score() {
      return this.selectedAuthor.score;
    },
    description() {
      return this.selectedAuthor.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedAuthor = this.$store.getters["authors/authors"].find(
      (author) => author.id === this.id
    );
  },
};
</script>

<style>
</style>