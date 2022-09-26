<template>
  <base-container>
    <form @submit.prevent="submitPoster">
      <div class="title" :class="{ invalid: !enteredTitle.isValid }">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          v-model.trim="enteredTitle.val"
          @blur="clearValidity('enteredTitle')"
        />
      </div>
      <p v-if="!enteredTitle.isValid">Title Filed cannot be empty!</p>

      <div class="abstract" :class="{ invalid: !enteredAbstract.isValid }">
        <label for="abstract"> Abstract </label>
        <textarea
          id="abstract"
          rows="10"
          v-model.trim="enteredAbstract.val"
          @blur="clearValidity('enteredAbstract')"
        ></textarea>
        <p v-if="!enteredAbstract.isValid">Abstract cannot be empty.</p>
      </div>

      <div class="field" :class="{ invalid: !enteredField.isValid }">
        <h3>What are your specialized filed?</h3>
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

        <p v-if="!enteredField.isValid">At least one field must be selected.</p>
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
      enteredTitle: {
        val: "",
        isValid: true,
      },

      enteredAbstract: {
        val: "",
        isValid: true,
      },
      enteredField: {
        val: [],
        isValid: true,
      },
      comment: {
        val:{},
        isValid: true,
      },
      votedUsers: {
        val: {},
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
      if (this.enteredTitle.val === "") {
        this.enteredTitle.isValid = false;
        this.isFormValid = false;
      }

      if (this.enteredAbstract.val === "") {
        this.enteredAbstract.isValid = false;
        this.isFormValid = false;
      }

      if (this.enteredField.val.length === 0) {
        this.enteredField.isValid = false;
        this.isFormValid = false;
      }
    },

    submitPoster() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }
      const formData = {
        title: this.enteredTitle.val,
        abstract: this.enteredAbstract.val,
        fields: this.enteredField.val,
      };

      this.$emit("save-data", formData);

      this.enteredTitle.val = "";
      this.enteredAbstract.val = "";
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