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
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="success"
        @click="signIn"
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
    <!-- sign in fail modal -->
    <b-modal
      v-model="signInFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Sign In Fail"
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <h4>
        <strong>{{ signInFailMsg }}</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          Ok
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
      username: "",
      password: "",
      checkbox: true,
      signInFailMsg: "",
      signInFailModal: false,
    };
  },
  methods: {
    ...mapMutations({
      updateUsername: 'updateUsername',
      updateIsSignIn: 'updateIsSignIn',
    }),
    signIn() {
      if (this.username !== "" && this.password !== "") {
        this.signInRequest();
      }
    },
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
          console.log(response.data);
          if (response.data.status === true) {
            // localstorage jwt_token
            Vue.localStorage.set("jwt_token", response.data.data.token);
            Vue.localStorage.set("user_name", response.data.data.username);
            this.updateIsSignIn(true);
            this.updateUsername(response.data.data.username);
            // route push
            this.$router.push("/" + response.data.data.username + "/admin");
          } else {
            this.signInFailModal = true;
            this.signInFailMsg = response.data.msg;
          }
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
        return state.api.springBaseURL;
      },
      signInURL: (state) => {
        return state.api.signInURL;
      },
      username: (state) => {
        return state.user.username;
      },
      isSignIn: (state) => {
        return state.user.isSignIn;
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
