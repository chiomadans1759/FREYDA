<template>
  <div id="forgot-password" class="row justify-content-center align-items-center">
    <div class="bg-white col-md-4 col-sm-7 col-10 py-3 p-0">
      <div class="row justify-content-center flex-column align-items-center px-5 mx-2">
        <div class="p-3 lock-icon d-flex justify-content-center align-items-center mb-3"><i class="fas fa-unlock-alt"></i></div>
        <h1>Trouble Signing In?</h1>
        <p class="text-center">Enter your email and we'll send you a link to get back your account</p>
        <div id="input-group" class="form-control">
          <input 
            type="text" 
            class="inputText"
            required 
            v-model="email"
          />
          <span class="floating-label">E-mail</span>
        </div>
        <button
          :disabled="!emailIsValid"
          @click.prevent="resetPassword"
          class="form-control mt-4">Send Password Reset Link
        </button>
      </div>
      <Divider class="my-4 px-2 mx-5"/>
      <div class="text-center">
        <router-link class="new-account" to="/">Create New Account</router-link>
        <hr>
        <router-link to="/login">Back To Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider.vue"

export default {
  components: { Divider },
  name:	"forgot-password",
  data(){
    return{
      email:''
    }
  }, 
  computed: {
    emailIsValid(){ 
      const exp = /\S+@\S+\.\S+/;
      return this.email && exp.test(this.email)
    }
  },
  methods: {
    resetPassword() {
      if (this.emailIsValid) {
          this.$router.push("/reset-password")
        }
      }
    }  
  }
</script>

<style>
#forgot-password {
  height:100vh;
}
#forgot-password .bg-white {
  border-radius:10px;
}
#forgot-password .lock-icon{
  border-radius:50%;
  border:3px solid rgba(0, 0, 0, .7);
  opacity:70%;
  height:60px;
  width:60px;
}
#forgot-password i{
  font-size:40px;
  color:rgba(0, 0, 0, .7);
}
#forgot-password hr{
  margin-top:4.5rem;
}
#forgot-password h1 {
  color:rgba(0, 0, 0, .9);
  font-size:20px;
  font-weight:bold;
}
#forgot-password .new-account {
  color:rgba(0, 0, 0, .9);
  font-size:16px;
  font-weight:bold;
}
#forgot-password p {
  font-size:14px;
}
#forgot-password input, button {
  font-size: 15px;
  height: 50px!important;
  outline: none !important;
  box-shadow: none !important;
  padding: 10px 0px 0 25px;
  border-radius:40px!important;
  width:100%
}
#forgot-password button:disabled {
  background-color:rgba(85, 140, 144, .67);
}
#forgot-password input {
  border:1px solid #707070;
  padding-top:14px;
  padding-left:16px;
  border:1px solid rgba(112, 112, 112, .38);
  font-size:15px;
}
#forgot-password input:focus ~ .floating-label,
#forgot-password input:not(:focus):valid ~ .floating-label{
  top: 2px;
  bottom: 10px;
  left: 20px;
  font-size: 10px;
  opacity: 1;
}
#forgot-password #input-group {
  position:relative;
  padding:0;
  margin:0;
  border:none;
}
#forgot-password .inputText {
  font-size: 16px;
  height: 40px; 
}
#forgot-password .floating-label {
  position: absolute;
  pointer-events: none;
  left: 20px;
  font-size: 16px;
  top: 25px;
  color: rgba(0, 0, 0, .40)!important;
  transition: 0.7s ease all;
}
#forgot-password button {
  background-color:#558C90;
  color:#fff;
  border:none;
  font-size:16px;
}
#forgot-password a {
  color:#558C90;
  font-size:16px;
}
#forgot-password a:hover {
  text-decoration:none;
}
</style>
