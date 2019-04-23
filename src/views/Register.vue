<template>
  <main id="auth">
    <div class="row">
      <div class="container">
        <h2>Sign Up to use Freyda</h2>
        <form class="auth-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="First name" ref="firstName">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Last name">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

           <div class="form-group">
            <input type="text" class="form-control" placeholder="Company name">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email address">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
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
export default {
  name: 'register-page',
  mounted() {
    this.$nextTick(() => this.$refs.firstName.focus())
  }
  
}
</script>

<style scoped>
#auth {
  height: 100vh;
  background: #578a8d;
}

#auth h2 {
  text-align: center;
  font-weight: bold;
  color: rgb(243, 248, 248);
  margin-top: 2rem;
  text-transform: uppercase;
}

#auth form {
  width: 40%;
  margin: auto;
  margin-top: 3rem;
  background: #578a8d;
  padding: 3rem;
  box-shadow: 6px 12px 24px rgba(0, 0, 0, 0.20);
}

#auth .form-control {
  border-radius: 0 !important;
  border: 1px solid rgba(243, 248, 248, 0.4);
  background: rgba(243, 248, 248, 0.1);
  color: rgb(243, 248, 248) !important;
}

#auth .form-control:focus {
  border: 1px solid rgb(243, 248, 248);
}


#auth .auth-form input:focus {
  outline: none !important;
  box-shadow: none;
}

#auth .auth-form input::-webkit-input-placeholder {
  color: rgba(243, 248, 248, 0.68);
}

#auth .auth-form button:hover {
  background: rgb(211, 216, 216);
  box-shadow: 6px 12px 24px rgba(0, 0, 0, 0.20);
}

#auth .auth-form button {
  width: 100%;
  border: 1px solid rgb(243, 248, 248);
  border-radius: 0;
  background: rgb(243, 248, 248);
  color: #222222;
}

@media (max-width: 767.98px){ 
  #auth form {
  width: 100%;
  margin: auto;
  margin-top: 3rem;
  background: #578a8d;
  padding: 3rem;
}
 }

</style>
