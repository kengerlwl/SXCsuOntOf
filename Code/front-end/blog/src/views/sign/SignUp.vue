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
        to="/sign/verifyEmail"
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
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: true,
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    signUp() {

    },
    async signUpRequest() {

    }
  },
  computed: {
    // get data from vuex
    ...mapState({
      baseURL: (state) => {
        return state.api.baseURL;
      },
      signUpURL: (state) => {
        return state.api.signUpURL;
      },
    }),
    // feedback validate
    usernameState() {
      return this.username.length > 2 ? true : false;
    },
    emailState() {
      return this.validateEmail(this.email);
    },
    passwordState() {
      return this.password.length > 7 ? true : false;
    },
    confirmPasswordState() {
      return (this.confirmPassword === this.password && this.confirmPassword.length > 7 );
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
