<template>
  <div>
    <div class="title">
      <div>
        Forgot Password
      </div>
    </div>
    <div id="forgot-password">


    <!--    username-->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="email"
          required
          placeholder="Enter Username"
          :state="emailState"
        ></b-form-input>
        <b-form-invalid-feedback :state="emailState">
          Enter Your Username
        </b-form-invalid-feedback>
      </b-form-group>


      <!-- email -->

      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter Email"
          :state="emailState"
        ></b-form-input>
        <b-form-invalid-feedback :state="emailState">
          Enter a valid email
        </b-form-invalid-feedback>
      </b-form-group>



      <b-button class="sign-btn" pill size="lg" block variant="danger" @click="sendEmail"
        >GET NEW PASSWORD</b-button
      >
      <!-- Sign In -->
      <b-button
        calss="sign-btn"
        pill
        size="lg"
        block
        variant="outline-success"
        to="/sign/signIn"
        >SIGN IN</b-button
      >
    </div>
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      email: "",
      username:""
    };
  },
  methods: {
    sendEmail(){
      console.log("send email");
        axios({
        method: "post",
        url: this.baseURL + this.forgotPasswordURL,
        headers: {},
        data: {
          username: this.username,
          email: this.email,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === true) {
            // localstorage jwt_token
           
          } else {
           
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      baseURL: (state) => {
        return state.api.springBaseURL;
      },
      forgotPasswordURL: (state) => {
        return state.api.forgotPasswordURL;
      },
    }),
    emailState() {
      return this.validateEmail(this.email);
    },
  },
};
</script>

<style>
#forgot-password {
  padding: 2rem;
}
.sign-btn {
  margin-top: 1rem;
}
.title {
  font-size: 3rem;
  text-align: start;
  padding-left: 2rem;
}
</style>
