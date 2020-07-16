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
          :state="usernameState"
        ></b-form-input>
        <b-form-invalid-feedback :state="usernameState">
          Enter at least 3 letters
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

      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="danger"
        @click="sendEmail"
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
    <!-- send success modal -->
    <b-modal
      class="top-index"
      v-model="sendSuccessModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="success"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <h4><strong>Your new password has been sent to your email.</strong></h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
    <!-- send fail modal -->
    <b-modal
      class="top-index"
      v-model="sendFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Fail"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <h4><strong>Oops...Please input the correct username and email.</strong></h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
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
      username: "",
      // input error
      emailError: true,
      usernameError: true,
      sendSuccessModal: false,
      sendFailModal: false,
    };
  },
  methods: {
    sendEmail() {
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
            this.sendSuccessModal = true;
          } else {
            this.sendFailModal = true;
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
      this.emailError = !this.validateEmail(this.email);
      return !this.emailError;
    },
    usernameState() {
      this.usernameError = this.username.length > 2 ? false : true;
      return !this.usernameError;
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
