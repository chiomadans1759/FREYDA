<template>
  <main id="auth">
    <div class="row">
      <div class="container">
        <form class="auth-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="identifier">Email or Username</label>
            <input
              type="text"
              v-model="user.identifier"
              id="identifier"
              name="identifier"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.identifier.$error }"
            >
            <div
              v-if="submitted && !$v.user.identifier.required"
              class="invalid-feedback"
            >Email or Username is required</div>
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
          </div>

          <div class="d-flex justify-content-end">
            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :disabled="this.auth.isFetching"
            >{{ this.auth.isFetching ? 'Submitting...' : 'Submit' }}</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Login-Page",
  data() {
    return {
      user: {
        identifier: "",
        password: ""
      },
      submitted: false
    };
  },

  validations: {
    user: {
      identifier: { required },
      password: { required }
    }
  },

  methods: {
    ...mapActions(["login"]),

    handleSubmit(event) {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      let { identifier, password } = this.user;
      this.login(this.user)
        .then(() => {
          this.$swal({
            position: "top-end",
            type: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 2000
          });
        })
        .catch(error => {
          this.$swal({
            position: "top-end",
            height: 50,
            type: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 2000
          });
        });
    }
  },

  computed: {
    ...mapState(["auth"])
  }
};
</script>


<style lang="scss" scoped>
@import "./Login.scss";
</style>