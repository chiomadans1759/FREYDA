<template>
  <main id="register-page">
    <div class="row">
      <div class="container">
        <h2>Sign Up to use Freyda</h2>
        <form class="registeration-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter first name" ref="firstName">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter last name">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

           <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter company name">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter user name">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="email" class="form-control" placeholder="Enter email address">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>

          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
#register-page {
  height: 100vh;
  margin: 2rem;
}

#register-page h2 {
  text-align: center;
  font-weight: bold;
  color: rgb(59, 145, 151);
  margin-top: 2rem;
  text-transform: uppercase;
}

#register-page form {
  width: 40%;
  margin: auto;
  margin-top: 3rem;
  background: #578a8d;
  padding: 3rem;
}

#register-page .submit-btn {
  background: rgb(243, 248, 248);
  color: #222222;
}

#register-page .form-control {
  border-radius: 0 !important;
}

#register-page .registeration-form input:focus {
  outline: none !important;
  box-shadow: none;
}

#register-page button {
  border: none;
}

@media (max-width: 767.98px){ 
  #register-page form {
  width: 100%;
  margin: auto;
  margin-top: 3rem;
  background: #578a8d;
  padding: 3rem;
}
 }

</style>
