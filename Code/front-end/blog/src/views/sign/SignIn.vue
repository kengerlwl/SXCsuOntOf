<template>
  <div>
    <div class="title">
      <div>
        Sign In
      </div>
    </div>
    <div id="sign-in-content">
      <!-- Username -->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <!-- Password -->
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <!-- Forgot Password -->
      <div id="forgot-pwd-link">
        <b-link to="/sign/forgotPassword">
          Forgot Password?
        </b-link>
      </div>

      <!-- checkbox -->
      <b-form-checkbox id="checkbox-1" v-model="checkbox" name="checkbox-1">
        Auto Sign In
      </b-form-checkbox>
      <!-- Sign In -->
      <b-button class="sign-btn" pill size="lg" block variant="success"
        >SIGN IN</b-button
      >
      <!-- Sign Up -->
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="outline-secondary"
        to="/sign/signUp"
        >SIGN UP</b-button
      >
    </div>
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
      checkbox: true,
    };
  },
  methods: {
    signIn() {},
    async signInRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.signInURL,
        headers: {},
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      springBaseURL: (state) => {
        return state.api.baseURL;
      },
      signInURL: (state) => {
        return state.api.signInURL;
      },
    }),
  },
};
</script>
<style>
#sign-in-content {
  padding: 2rem;
}
#sign-in-content > #forgot-pwd-link {
  display: flex;
  justify-content: flex-end;
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
