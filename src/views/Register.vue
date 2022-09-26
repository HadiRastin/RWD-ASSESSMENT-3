<template>
  <base-container>
    <h2>Registeration</h2>

    <form @submit.prevent="submitRegisteration">
      <div class="email">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="enteredEmail"
        />
      </div>

      <div class="password">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="enteredPassword"
          @blur="validateEnteredPassword"
        />
      </div>
      <p v-if="enteredPasswordValidity === 'invalid'">
        Password Field is still empty!
      </p>

      <div>
        <input
          id="confrim-agree"
          name="confrim-agree"
          type="checkbox"
          v-model="confirm"
        />
        <label for="confrim-agree">Agree to the terms</label>
      </div>

      <div class="submittButton">
        <base-button> Register </base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      confirm: false,
      enteredPasswordValidity: "waiting",
    };
  },

  methods: {
    validateEnteredPassword() {
      if (this.enteredPassword === "") {
        this.enteredPasswordValidity = "invalid";
      } else {
        this.enteredPasswordValidity = "valid";
      }
    },

    submitRegisteration() {
      try {
        this.$store.dispatch("signup", {
          email: this.enteredEmail,
          password: this.enteredPassword,
        });
        this.enteredEmail = "";
        this.enteredPassword = "";
        this.$router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    },
  },
};
</script>


<style scoped>
h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0 1.5rem 0;
  text-align: center;
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

input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 0.5rem;
}

.submittButton{
  text-align: center;
}
</style>