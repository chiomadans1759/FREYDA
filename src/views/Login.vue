<template>
  <main id="login-page">
    <div class="row">
      <div class="container">
        <form class="registeration-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter user name">
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
  name: 'Login-page'
  
}
</script>

<style scoped>

#login-page {
  height: 100vh;
}

#login-page form {
  width: 40%;
  margin: auto;
  margin-top: 3rem;
  background: #578a8d;
  padding: 3rem;
}

</style>
