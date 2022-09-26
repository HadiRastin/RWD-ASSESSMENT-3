<template>
  <base-container>
    <li>
      <h3>{{ title }}</h3>
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="isAbstractVisible">{{ abstract }}</p>
      </transition>

      <base-button @click="toggleAbstract"> Toggle Abstract</base-button>
      <p>Score: {{score}}</p>
      
      <div>
        <ul>
          <field-list
            v-for="field in fields"
            :key="field"
            :field="field"
          ></field-list>
        </ul>
      </div>

      <base-button @click="setshowCommentBox"> Comment </base-button>
      <base-button @click="toggleShowComments"
        >Show Comments</base-button
      >

      <ul v-if="areCommentsVisible">
        <show-comments
          v-for="comment in $store.state.posters.find(
            (poster) => poster.id === this.id
          ).comment"
          :key="comment"
          :CommentMessage="comment"
        >
        </show-comments>
      </ul>

      <form v-if="showCommentBox" @submit.prevent="addComment">
        <div>
          <label for="comment"> Comment </label>
          <input
            type="text"
            id="comment"
            name="comment"
            v-model.trim="enteredComment"
          />
        </div>

        <base-button> Submit Comment</base-button>
      </form>
    </li>
  </base-container>
</template>

<script>
import FieldList from '../../components/posters/FieldList.vue';
export default {
  components: {
    "field-list": FieldList,
  },

  data() {
    return {
      enteredComment: null,
      areCommentsVisible: false,
      showCommentBox: false,
      isAbstractVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },

  props: ["id", "title", "abstract", 'score', "fields"],

  computed: {
    comments() {
      return this.$store.getters["posters/posters"].find(
        (poster) => poster.id === this.id
      ).comment;
    },
  },

  methods: {
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

   
    addComment() {
      //console.log(this.$store.state.user.email);
      //console.log(this.enteredComment);

      this.$store.commit("addComment", this.id, this.enteredComment);
      //console.log(this.$store.state.posters.find((poster) => poster.id === this.id).comment);
      this.enteredComment = null;
    },

    toggleShowComments() {
      this.areCommentsVisible = !this.areCommentsVisible;
      console.log("toggle");
      console.log(this.areCommentsVisible);
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