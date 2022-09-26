<template>
  <base-popup :show="showError" title="Please Fix the Error" @close="closeError">
    <p>{{ error }}</p>
  </base-popup>
  <base-popup :show="isLoading" title="It is Authenticating now..." fixed>
    <p>Loading...</p>
  </base-popup>

  <base-container>
    <h2>Log In</h2>
    <form @submit.prevent="submitLogIn">
      <div class="email">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="enteredEmail.val"
          @blur="clearValidity('enteredEmail')"
        />
      </div>
      <p v-if="!enteredEmail.isValid">Email cannot be empty!</p>

      <div class="password">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="enteredPassword.val"
          @blur="clearValidity('enteredPassword')"
        />
      </div>
      <p v-if="!enteredPassword.isValid">Password cannot be empty!</p>

      <p v-if="!isFormValid">Please fix the errors.</p>

      <div class="submittButton">
        <base-button @click="setMode('login')">Log In</base-button>
        <base-button @click="setMode('signup')">Sign Up</base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      enteredEmail: {
        val: "",
        isValid: true,
      },
      enteredPassword: {
        val: "",
        isValid: true,
      },
      isFormValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },

  computed: {
    showError() {
      if (this.error) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    closeError() {
      this.error = null;
    },

    clearValidity(input) {
      this[input].isValid = true;
    },

    setMode(text) {
      this.mode = text;
    },

    validateForm() {
      this.isFormValid = true;
      if (this.enteredEmail.val === "") {
        this.enteredEmail.isValid = false;
        this.isFormValid = false;
      }
      if (this.enteredPassword.val === "" || this.enteredPassword.length < 6) {
        this.enteredPassword.isValid = false;
        this.isFormValid = false;
      }
      //console.log("form is valid? " +this.isFormValid);
    },

    async submitLogIn() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }

      const formData = {
        email: this.enteredEmail.val,
        password: this.enteredPassword.val,
      };
      console.log("the entered email and pass are? " + formData);

      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", formData);
        } else {
          await this.$store.dispatch("signup", formData);
        }
        this.$router.push("/");
      } catch (err) {
        this.error = err.message;
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

.submittButton {
  text-align: center;
}
</style>