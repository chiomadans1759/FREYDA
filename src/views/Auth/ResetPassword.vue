<template>
  <div id="reset-password" class="row justify-content-center align-items-center">
    <div class="bg-white col-md-3 py-3 p-0">
      <div class="row justify-content-center flex-column align-items-center px-5">
        <h1 class="pt-3 pb-4">FREYDA</h1>
        <div id="input-group" class="form-control mb-3">
          <input 
            type="text" 
            class="inputText"
            required 
            v-model="password"
          />
          <span class="floating-label">Enter Password</span>
        </div>
        <div id="input-group" class="form-control">
          <input 
            type="text" 
            class="inputText"
            required 
            v-model="confirm_password"
          />
          <span class="floating-label">Confirm Password</span>
        </div>
        <button
          :disabled="!passwordIsValid"
          class="form-control mt-4 mb-5">Reset Password</button>
      </div> 
      <div class="text-center">
        <hr>
        <a href="#">Back To Sign In</a>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name:	"reset-password",
  data(){
    return{
      password:'',
      confirm_password:''
    }
  }, 
  computed: {
    passwordIsValid(){ 
      return this.password && this.confirm_password && (this.password === this.confirm_password)
    }
  },
}
</script>

<style>
#reset-password {
  height:100vh;
}
#reset-password .bg-white {
  border-radius:10px;
}
#reset-password h1 {
  color:#558C90;
  font-size:30px;
  font-weight:900;
}
#reset-password input, button {
  border-radius:40px!important;
  outline:none!important;
  width:100%
}
#reset-password input {
  border:1px solid rgba(112, 112, 112, .38);
  padding-top:14px;
  padding-left:16px;
  font-size:15px;
}
#reset-password input:focus ~ .floating-label,
#reset-password input:not(:focus):valid ~ .floating-label{
  top: 2px;
  bottom: 10px;
  left: 20px;
  font-size: 10px;
  opacity: 1;
}
#reset-password #input-group {
  position:relative;
  padding:0;
  margin:0;
  border:none;
}
#reset-password .floating-label {
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 16px;
  color: rgba(0, 0, 0, .31)!important;
  transition: 0.7s ease all;
}
#reset-password button {
  background-color:#558C90;
  color:#fff;
  border:none;
  font-size:16px;
}
#reset-password button:disabled {
  background-color:rgba(85, 140, 144, .67);
}
#reset-password a {
  color:#558C90;
  font-size:16px;
}
#reset-password a:hover {
  text-decoration:none;
}
</style>
