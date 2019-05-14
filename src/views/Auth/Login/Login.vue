<template>
  <main id="login">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="shadow bg-white card login-layout border-0">
          <form class="auth-form login-container" @submit.prevent="handleSubmit">
            <div class="text-center login-text">FREYDA</div>
            <div class="form-group username mb-4">
              <input
                v-model="user.identifier"
                type="text"
                autocomplete="new-password"
                name="identifier"
                onfocus
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.identifier.$error }"
                required
              >
              <div
                v-if="submitted && !$v.user.identifier.required"
                class="invalid-feedback pl-4"
              >Email or Username is required</div>
              <span class="floating-label">Username or E-mail</span>
            </div>
            <div class="form-group password mb-4">
              <input
                v-model="user.password"
                type="password"
                onfocus="this.value=''"
                value
                autocomplete="new-password"
                class="inputText form-control"
                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                required
              >
              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback pl-4">
                <span v-if="!$v.user.password.required">Password is required</span>
              </div>
              <span class="floating-label">Password</span>
            </div>
            <div class="form-group button">
              <button
                class="btn btn-block login-button"
                type="submit"
                :disabled="this.auth.isFetching"
              >{{ this.auth.isFetching ? 'Submitting...' : 'Submit' }}</button>
            </div>
            <div class="agreement px-2">
              By Signing In, you agree to Freyda's
              <router-link to="/terms" class="links">Terms of Use</router-link>&nbsp; and
              <router-link to="/privacy">Privacy Policy.</router-link>
            </div>
            <div class="forgot-password text-center">
              <router-link to="/forgot-password">Forgot Your Password</router-link>
            </div>
            <div class="sign-up-prompt text-center pb-2">
              Don't have an account?
              <router-link to="/register">Sign-Up</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
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
  computed: {
    ...mapState(["auth"])
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
          this.$router.push("/Admin/Dashboard'");
          this.$toastr.success("Success", "Login Successful");
        })
        .catch(error => {
          this.$toastr.error(error.message);
        });
    }
  }
};
</script>

<style <style scoped>
@import "./Login.css";
</style>
