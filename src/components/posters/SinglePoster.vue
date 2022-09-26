<template>
  <base-container>
    <li>
      <h3 v-colorFul>{{ title }}</h3>
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="isAbstractVisible" >{{ $filters.shorten(abstract) }}</p>
      </transition>

      <base-button @click="toggleAbstract"> Toggle Abstract</base-button>
      <p>Score: {{ score }}</p>

      <div>
        <ul>
          <field-list
            v-for="field in fields"
            :key="field"
            :field="field"
          ></field-list>
        </ul>
      </div>

      <base-button class="routeClass">
        <router-link
          :to="{ name: 'AuthorMember', params: { posterId: this.id } }"
          >View Authors</router-link
        >
      </base-button>
      <base-button @click="addScore"> Like </base-button>
      <base-button @click="setshowCommentBox"> Comment </base-button>
      <base-button @click="toggleShowComments">Show Comments</base-button>

      <ul v-if="areCommentsVisible">
        <show-comments
          v-for="comment in comments"
          :key="comment.comment"
          :comment="comment.comment"
        >
        </show-comments>
      </ul>

      <form v-if="showCommentBox" @submit.prevent="submitComment">
        <div>
          <label for="comment"> Comment </label>
          <input
            type="text"
            id="comment"
            name="comment"
            v-model.trim="enteredComment.val"
            @blur="clearValidity('enteredComment')"
          />
        </div>
        <p v-if="!enteredComment.isValid">Comment box is empty!</p>

        <base-button > Submit Comment</base-button>
      </form>
    </li>
  </base-container>
</template>

<script>
import FieldList from "./FieldList.vue";
import SearchMixins from '../../mixins/mixins.js'
export default {
  mixins:[SearchMixins],
  components: {
    "field-list": FieldList,
  },

  data() {
    return {
      enteredComment: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      areCommentsVisible: false,
      showCommentBox: false,
      isAbstractVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },

  props: [
    "id",
    "title",
    "abstract",
    "score",
    "fields",
    "comment",
    "votedUsers",
    "author",
  ],
/*
  computed: {
    
    comments() {
      const allComments = this.$store.getters["comments/comments"];
      var selectedComments = [];

      for (let i = 0; i < allComments.length; i++) {
        if (allComments[i]["posterID"] === this.id) {
          selectedComments.push(allComments[i]);
        }
      }
      console.log("number of comments for this poster is:" +selectedComments.length);
      return selectedComments;

      //.find((poster) => poster.id === this.id).comment;
    },
  },
  */
  created() {
    this.loadPosters();
    this.loadComments();
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.enteredComment.val === "") {
        this.enteredComment.isValid = false;
        this.formIsValid = false;
      }
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },

    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },

    beforeEnter(el) {
      el.style.opacity = 0;
    },

    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },

    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },

    toggleAbstract() {
      this.isAbstractVisible = !this.isAbstractVisible;
    },

    addScore() {
      const userID = this.$store.getters.userId;
      const selectedAuthor = this.$store.commit(
        "posters/addScore",
        this.id,
        userID
      );
      this.$store.commit("authors/addScore", this.id, selectedAuthor);
    },

    submitComment() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      console.log("the form is valid");

      const commentData = {
        comment: this.enteredComment.val,
        posterID: this.id,
      };

      console.log("the posterID is:" + commentData.posterID);

      this.$store.dispatch("comments/addComment", commentData);
      this.enteredComment.val = "";
    },

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

    toggleShowComments() {
      this.areCommentsVisible = !this.areCommentsVisible;
      //console.log(this.areCommentsVisible);
    },

    setshowCommentBox() {
      this.showCommentBox = !this.showCommentBox;
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0 1.5rem 0;
  text-align: center;
  font-weight: bold;
}

p {
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.routeClass a {
  color: black;
}

button {
  font-size: 0.5rem;
}

form {
  margin-top: 1rem;
}

@keyframes slide-scale {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  70% {
    transform: translateY(-120px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>