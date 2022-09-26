<template>
  <base-container>
    <li>
      <h3>email address: {{ email }}</h3>
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="isMessageVisible">{{ message }}</p>
      </transition>
      <base-button @click="toggleMessage"> Show/Hide Message</base-button>
    </li>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isMessageVisible: false,
    };
  },

  props: ["email", "message"],

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

    toggleMessage() {
      this.isMessageVisible = !this.isMessageVisible;
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