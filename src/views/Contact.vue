<template>
  <base-container>
    <form @submit.prevent="submitRegisteraion">
      <div class="name" :class="{ invalid: !enteredName.isValid }">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          v-model.trim="enteredName.val"
          @blur="clearValidity('enteredName')"
        />
      </div>
      <p v-if="!enteredName.isValid">Name Filed is still empty!</p>

      <div class="age" :class="{ invalid: !enteredAge.isValid }">
        <label for="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          v-model.number="enteredAge.val"
          @blur="clearValidity('enteredAge')"
        />
      </div>

      <p v-if="!enteredAge.isValid">Age should be between 10 to 120 years!</p>

      <div class="email" :class="{ invalid: !enteredEmail.isValid }">
        <label for="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model.trim="enteredEmail.val"
          @blur="clearValidity('enteredEmail')"
        />
      </div>
      <p v-if="!enteredEmail.isValid">Email Address must be entered!</p>

      <div class="field" :class="{ invalid: !enteredField.isValid }">
        <label for="field">What is the question about?</label>
        <select id="field" name="field" v-model="enteredField.val">
          <option value="Posters">Posters</option>
          <option value="LogIn">Log in Issues</option>
          <option value="Security">Security</option>
          <option value="Sponsers">Sponsers</option>
          <option value="others">others</option>
        </select>
      </div>

      <div class="intrest" :class="{ invalid: !enteredInterest.isValid }">
        <h3>What are your specialized filed?</h3>
        <div>
          <input
            id="interest-Chemistry"
            name="interest"
            type="checkbox"
            value="Chemistry"
            v-model="enteredInterest.val"
            @blur="clearValidity('enteredInterest')"
          />
          <label for="interest-Chemistry">Chemistry</label>
        </div>

        <div>
          <input
            id="interest-Math"
            name="interest"
            type="checkbox"
            value="Math"
            v-model="enteredInterest.val"
            @blur="clearValidity('enteredInterest')"
          />
          <label for="interest-Math">Math</label>
        </div>

        <div>
          <input
            id="interest-Engineering"
            name="interest"
            type="checkbox"
            value="Engineering"
            v-model="enteredInterest.val"
            @blur="clearValidity('enteredInterest')"
          />
          <label for="interest-Engineering">Engineering</label>
        </div>

        <p v-if="!enteredInterest.isValid">
          At least one option must be selected.
        </p>
      </div>

      <div class="how" :class="{ invalid: !how.isValid }">
        <h3>How do you hear about Us?</h3>
        <div>
          <input
            id="how-Google"
            name="how-Google"
            type="radio"
            value="Google"
            v-model="how.val"
            @blur="clearValidity('how')"
          />
          <label for="how-Google">Google </label>
        </div>
        <div>
          <input
            id="how-WOM"
            name="how-WOM"
            type="radio"
            value="WOM"
            v-model="how.val"
            @blur="clearValidity('how')"
          />
          <label for="how-WOM">Word of Mouth</label>
        </div>
        <div>
          <input
            id="how-YouTube"
            name="how-YouTube"
            type="radio"
            value="YouTube"
            v-model="how.val"
            @blur="clearValidity('how')"
          />
          <label for="how-YouTube">YouTube</label>
        </div>
        <p v-if="!how.isValid">At least one option must be selected.</p>
      </div>

      <p v-if="!isFormValid">Please fix the errors.</p>
      <div class="submittButton">
        <base-button>Save Data</base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  emits: ["save-data"],

  data() {
    return {
      enteredName: {
        val: "",
        isValid: true,
      },

      enteredAge: {
        val: null,
        isValid: true,
      },
      enteredEmail: {
        val: "",
        isValid: true,
      },
      enteredField: {
        val: "LogIn",
        isValid: true,
      },
      enteredInterest: {
        val: [],
        isValid: true,
      },
      how: {
        val: null,
        isValid: true,
      },
      isFormValid: true,
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.isFormValid = true;
      if (this.enteredName.val === "") {
        this.enteredName.isValid = false;
        this.isFormValid = false;
      }

      if (
        !this.enteredAge.val ||
        this.enteredAge.val <= 10 ||
        this.enteredAge.val >= 120
      ) {
        this.enteredAge.isValid = false;
        this.isFormValid = false;
      }

      if (this.enteredEmail.val === "") {
        this.enteredEmail.isValid = false;
        this.isFormValid = false;
      }
      if (this.enteredInterest.val.length === 0) {
        this.enteredInterest.isValid = false;
        this.isFormValid = false;
      }

      if (!this.how.val) {
        this.how.isValid = false;
        this.isFormValid = false;
      }
    },

    submitRegisteraion() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.enteredName.val,
        age: this.enteredAge.val,
        email: this.enteredEmail.val,
        field: this.enteredField.val,
        interest: this.enteredInterest.val,
        how: this.how.val,
      };
      this.$emit("save-data", formData);

      this.enteredName.val = "";
      this.enteredAge.val = null;
      this.enteredEmail.val = "";
      this.enteredField.val = "LogIn";
      this.enteredInterest.val = [];
      this.how.val = null;
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

label,
h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
select {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.submittButton {
  text-align: center;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>