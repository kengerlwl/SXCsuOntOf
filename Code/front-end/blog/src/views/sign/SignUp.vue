<template>
  <div>
    <div class="title">
      <div>
        Sign Up
      </div>
    </div>
    <div id="sign-up-content">
      <!-- Username -->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          required
          placeholder="Enter Username"
          :state="usernameState"
          trim
        ></b-form-input>
        <b-form-valid-feedback :state="usernameState">
          Looks Good.
        </b-form-valid-feedback>
        <b-form-invalid-feedback :state="usernameState">
          Enter at least 3 letters
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Email -->
      <b-form-group id="input-group-2" label="Email" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="email"
          type="email"
          required
          placeholder="Enter Email"
          :state="emailState"
        ></b-form-input>
        <b-form-valid-feedback :state="emailState">
          Looks Good.
        </b-form-valid-feedback>
        <b-form-invalid-feedback :state="emailState">
          Enter a valid email
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Password -->
      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="password"
          type="password"
          required
          placeholder="Enter Password"
          :state="passwordState"
        ></b-form-input>
        <b-form-valid-feedback :state="passwordState">
          Looks Good.
        </b-form-valid-feedback>
        <b-form-invalid-feedback :state="passwordState">
          Enter at least 8 letters
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Confirm Password -->
      <b-form-group
        id="input-group-4"
        label="Confirm Password"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="confirmPassword"
          type="password"
          required
          placeholder="Enter Password"
          :state="confirmPasswordState"
        ></b-form-input>
        <b-form-valid-feedback :state="confirmPasswordState">
          Looks Good.
        </b-form-valid-feedback>
        <b-form-invalid-feedback :state="confirmPasswordState">
          Must same as the password
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- checkbox -->
      <b-form-checkbox id="checkbox-1" v-model="checkbox" name="checkbox-1">
        I accept MD-blog's policy
      </b-form-checkbox>
      <b-form-invalid-feedback :state="checkbox">
        Must accept it
      </b-form-invalid-feedback>
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="info"
        @click="usernameVerifyRequest"
        >SIGN UP</b-button
      >
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="outline-secondary"
        to="/sign/signIn"
        >SIGN IN</b-button
      >
    </div>
    <!-- sign up fail modal -->
    <b-modal
      v-model="signUpFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Sign Up Fail"
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <h4>
        <strong>{{ signUpFailMsg }}</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
    <!-- sign up success modal -->
    <b-modal
      v-model="signUpSuccessModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Sign Up Success"
      header-bg-variant="success"
      header-text-variant="light"
      body-text-variant="success"
    >
      <h4>
        <strong>{{ signUpSuccessMsg }}</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="toVerifyEmail">
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

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: true,
      // input error
      usernameError: true,
      emailError: true,
      passwordError: true,
      confirmPasswordError: true,
      // sign up modal and msg
      signUpFailModal: false,
      signUpFailMsg: "",
      signUpSuccessModal: false,
      signUpSuccessMsg: "",
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    // avoid same username
    // first check username
    usernameVerifyRequest() {
      if (
        !this.usernameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError &&
        this.checkbox
      ) {
        axios({
          method: "post",
          url: this.springBaseURL + this.usernameVerifyURL,
          headers: {},
          data: {
            username: this.username,
          },
        })
          .then((response) => {
            console.log(response.data);
            if (response.data.status === false) {
              this.signUpFailModal = true;
              this.signUpFailMsg =
                "This username has existed, please change one.";
            } else {
              this.signUp();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // second sign up
    signUp() {
      if (
        !this.usernameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError &&
        this.checkbox
      ) {
        this.signUpRequest();
      }
    },
    async signUpRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.signUpURL,
        headers: {},
        data: {
          username: this.username,
          email: this.email,
          birthday: "yyyy-mm-dd",
          company: "None",
          description: "None",
          sex: "None",
          password: this.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === true) {
            this.signUpSuccessModal = true;
            this.signUpSuccessMsg = response.data.msg;
          } else {
            this.signUpFailModal = true;
            this.signUpFailMsg = "Sign Up Fail";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toVerifyEmail() {
      // route push
      this.$router.push("/sign/verifyEmail");
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      springBaseURL: (state) => {
        return state.api.springBaseURL;
      },
      signUpURL: (state) => {
        return state.api.signUpURL;
      },
      usernameVerifyURL: (state) => {
        return state.api.usernameVerifyURL;
      },
    }),
    // feedback validate
    usernameState() {
      this.usernameError = this.username.length > 2 ? false : true;
      return !this.usernameError;
    },
    emailState() {
      this.emailError = !this.validateEmail(this.email);
      return !this.emailError;
    },
    passwordState() {
      this.passwordError = this.password.length > 7 ? false : true;
      return !this.passwordError;
    },
    confirmPasswordState() {
      this.confirmPasswordError = !(
        this.confirmPassword === this.password &&
        this.confirmPassword.length > 7
      );
      return !this.confirmPasswordError;
    },
  },
};
</script>
<style>
#sign-up-content {
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
