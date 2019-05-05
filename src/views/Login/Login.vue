<template>
  <main id="auth">
    <div class="row">
      <div class="container">
        <form class="auth-form">
          <div class="form-group">
            <label for="Identifier">Email or Username</label>
            <input
              type="text"
              v-model="user.Identifier"
              id="identifier"
              name="identifier"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.user.Identifier.$error }"
            >
            <div
              v-if="submitted && !$v.user.Identifier.required"
              class="invalid-feedback"
            >Username or Email is required</div>
          </div>

          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Login-Page",
  data() {
    return {
      user: {
        identifier: ""
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
    handleSubmit(event) {}
  }
};
</script>

<style lang="scss" scoped>
@import "./Login.scss";
</style>
