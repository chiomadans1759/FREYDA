<template>
  <main id="auth">
    <div class="row">
      <div class="container">
        <h2>Sign Up to use Freyda</h2>
        <div
          class="alert alert-danger"
          role="alert"
          v-show="getErrors.message"
        >{{ getErrors.message }}</div>
        <form class="auth-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              v-model="user.firstName"
              id="firstName"
              name="firstName"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
            >
            <div
              v-if="submitted && !$v.user.firstName.required"
              class="invalid-feedback"
            >First Name is required</div>
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              v-model="user.lastName"
              id="lastName"
              name="lastName"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
            >
            <div
              v-if="submitted && !$v.user.lastName.required"
              class="invalid-feedback"
            >Last Name is required</div>
          </div>

          <div class="form-group">
            <label for="lastName">User Name</label>
            <input
              type="text"
              v-model="user.username"
              id="username"
              name="username"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.username.$error }"
            >
            <div
              v-if="submitted && !$v.user.username.required"
              class="invalid-feedback"
            >User Name is required</div>
            <div v-if="submitted && !$v.user.username.validateUserName" class="invalid-feedback">
              Username is invalid:
              <br>1. A username can only have numbers at the end, and can have only _ as the allowed special character only after the first two letters
              <br>2. A username should at least be 2 characters long
            </div>
          </div>

          <div class="form-group">
            <label for="companyName">Company Name</label>
            <input
              type="text"
              v-model="user.companyName"
              id="companyName"
              name="companyName"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.companyName.$error }"
            >
            <div v-if="submitted && $v.user.companyName.$error" class="invalid-feedback">
              <span v-if="!$v.user.companyName.required">company Name is required</span>
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="user.email"
              id="email"
              name="email"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.email.$error }"
            >
            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-if="!$v.user.email.email">Email is invalid</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="user.password"
              id="password"
              name="password"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.password.$error }"
            >
            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
              <span v-if="!$v.user.password.required">Password is required</span>
            </div>
            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
              <span v-if="!$v.user.password.validatePassword">
                The password failed to match the following rules:
                <br>1. It must contain ONLY lower case, upper case or numerics
                <br>2. It must be at least 8 characters long, and not more than 32 characters
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              v-model="user.confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
            >
            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
              <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
              <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords does not match</span>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "register-page",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        companyName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },

  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      username: {
        required,
        validateUserName(username) {
          return /^[A-Z]{2,}_?[A-Z]*[0-9]*$/i.test(
            username && username.length >= 2
          );
        }
      },
      companyName: { required },
      email: { required, email },
      password: {
        required,
        validatePassword(password) {
          return /^[a-zA-Z0-9]{8,32}$/.test(password);
        }
      },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },

  methods: {
    ...mapActions(["register"]),

    handleSubmit(event) {
      this.submitted = true;
      this.errors = {};

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let user = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        username: this.user.username,
        companyName: this.user.companyName,
        email: this.user.email,
        password: this.user.password
      };
      this.register(user);
    }
  },

  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getErrors() {
      return this.$store.getters.getErrors;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Register.scss";
</style>
