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

      <div
        class="affiliation"
        :class="{ invalid: !enteredAffiliation.isValid }"
      >
        <label for="affiliation">Your Affiliation</label>
        <input
          id="affiliation"
          name="affiliation"
          type="text"
          v-model.trim="enteredAffiliation.val"
          @blur="clearValidity('enteredAffiliation')"
        />
      </div>
      <p v-if="!enteredAffiliation.isValid">Affiliation cannot be empty!</p>

      <div class="intrest" :class="{ invalid: !enteredField.isValid }">
        <h3>What are your main research filed?</h3>
        <div>
          <input
            id="interest-Chemistry"
            name="interest"
            type="checkbox"
            value="Chemistry"
            v-model="enteredField.val"
            @blur="clearValidity('enteredField')"
          />
          <label for="interest-Chemistry">Chemistry</label>
        </div>

        <div>
          <input
            id="interest-Math"
            name="interest"
            type="checkbox"
            value="Math"
            v-model="enteredField.val"
            @blur="clearValidity('enteredField')"
          />
          <label for="interest-Math">Math</label>
        </div>

        <div>
          <input
            id="interest-Engineering"
            name="interest"
            type="checkbox"
            value="Engineering"
            v-model="enteredField.val"
            @blur="clearValidity('enteredField')"
          />
          <label for="interest-Engineering">Engineering</label>
        </div>

        <p v-if="!enteredField.isValid">
          At least one option must be selected.
        </p>
      </div>

      <div class="Description">
        <label for="Description">Short biography</label>
        <textarea
          rows="5"
          id="Description"
          v-model.trim="enteredDescription.val"
          @blur="clearValidity('enteredDescription')"
        ></textarea>
        <p v-if="!enteredDescription.isValid">Message is empty!</p>
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
  emits: ["save-data-author"],

  data() {
    return {
      enteredName: {
        val: "",
        isValid: true,
      },

      enteredAffiliation: {
        val: "",
        isValid: true,
      },
      enteredField: {
        val: [],
        isValid: true,
      },
      enteredDescription: {
        val: "",
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

      if (this.enteredAffiliation.val === "") {
        this.enteredAffiliation.isValid = false;
        this.isFormValid = false;
      }

       if (this.enteredDescription.val === "") {
        this.enteredDescription.isValid = false;
        this.isFormValid = false;
      }

      if (this.enteredField.val.length === 0) {
        this.enteredField.isValid = false;
        this.isFormValid = false;
      }

    },

    submitRegisteraion() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }

      const formData = {
        name: this.enteredName.val,
        affiliation: this.enteredAffiliation.val,
        description: this.enteredDescription.val,
        field: this.enteredField.val,
      };
      this.$emit("save-data-author", formData);
      console.log("the form data are: "+ formData);

      this.enteredName.val = "";
      this.enteredAffiliation.val = "";
      this.enteredDescription.val = "";
      this.enteredField.val = [];
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