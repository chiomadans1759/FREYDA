<template>
  <main id="register">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="shadow bg-white card register-layout border-0">
          <form class="auth-form register-container" @submit.prevent="handleSubmit">
            <div class="text-center register-text">FREYDA</div>
            <div class="form-group first-name">
              <input
                required
                type="text"
                v-model="user.firstName"
                autocomplete="new-password"
                id="firstName"
                name="firstName"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
              >
              <div
                v-if="submitted && !$v.user.firstName.required"
                class="invalid-feedback"
              >First Name is required</div>
              <span class="floating-label">First Name</span>
            </div>

            <div class="form-group last-name">
              <input
                required
                type="text"
                v-model="user.lastName"
                id="lastName"
                name="lastName"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
              >
              <div
                v-if="submittedinputText  && !$v.user.lastName.required"
                class="invalid-feedback"
              >Last Name is required</div>
              <span class="floating-label">Last Name</span>
            </div>

            <div class="form-group username">
              <input
                required
                type="text"
                v-model="user.username"
                autocomplete="new-password"
                id="username"
                name="username"
                class="inputText form-control"
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
              <span class="floating-label">Username</span>
            </div>

            <div class="form-group company">
              <input
                required
                type="text"
                v-model="user.companyName"
                id="companyName"
                name="companyName"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.companyName.$error }"
              >
              <div v-if="submitted && $v.user.companyName.$error" class="invalid-feedback">
                <span v-if="!$v.user.companyName.required">company Name is required</span>
              </div>
              <span class="floating-label">Company Name</span>
            </div>

            <div class="form-group email">
              <input
                required
                type="email"
                v-model="user.email"
                id="email"
                name="email"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
              >
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
              </div>
              <span class="floating-label">Email</span>
            </div>

            <div class="form-group password">
              <input
                required
                type="password"
                v-model="user.password"
                autocomplete="new-password"
                id="password"
                name="password"
                class="inputText form-control"
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
              <span class="floating-label">Password</span>
            </div>

            <div class="form-group confirm-password">
              <input
                required
                type="password"
                v-model="user.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
              >
              <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords does not match</span>
              </div>
              <span class="floating-label">Confirm Password</span>
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-primary submit-btn"
                :disabled="this.auth.isFetching"
              >{{ this.auth.isFetching ? 'Submitting...' : 'Submit' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
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

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      let {
        firstName,
        lastName,
        username,
        companyName,
        email,
        password
      } = this.user;
      this.register(this.user)
        .then(() => {
          this.$router.push("/admin");
          this.$toastr.success(
            "Success",
            `Welcome ${this.auth.user.firstName}`
          );
        })
        .catch(error => {
          this.$toastr.error(error.message);
        });
    }
  },

  computed: {
    ...mapState(["auth"])
  }
};
</script>

<style>
#register .register-text {
  font-size: 30px;
  font-weight: bolder;
  color: #558c90;
  margin: 20px 0;
}
#register .first-name,
.last-name,
.username,
.company,
.password,
.email,
.confirm-password {
  position: relative;
}
#register .register-container {
  position: relative;
  margin: 0 50px;
}
#register input {
  font-size: 15px;
  height: 50px;
  outline: none !important;
  box-shadow: none !important;
  padding: 10px 0px 0 25px;
}
#register .form-control {
  border: 1px solid #c9c9c9;
  border-radius: 40px;
  color: black;
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 25px;
  top: 25px;
  transition: 0.2s ease all;
  font-size: 11px;
  color: #000000;
  opacity: 0.31;
}

#register input:focus ~ .floating-label,
#register input:not(:focus):valid ~ .floating-label {
  top: 4px;
  bottom: 10px;
  left: 25px;
  font-size: 10px;
  opacity: 0.31;
}
.inputText {
  font-size: 14px !important;
  height: 35px;
  width: 300px;
}
#register .register-layout {
  margin-top: 50px;
}
</style>
