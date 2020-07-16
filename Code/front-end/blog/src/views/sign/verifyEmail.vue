<template>
  <div>
    <div class="title">
      <div>
        Verify Email
      </div>
    </div>
    <div id="verify-email">
      <!-- captcha -->
      <b-form-group id="input-group-1" label="Captcha" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="captcha"
          required
          placeholder="Enter Captcha"
        ></b-form-input>
      </b-form-group>
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="danger"
        @click="verify"
        >VERIFY</b-button
      >
      <b-button
        class="sign-btn"
        pill
        size="lg"
        block
        variant="outline-secondary"
        to="/sign/signUp"
        >BACK</b-button
      >
    </div>
    <!-- verify success modal -->
    <b-modal
      class="top-index"
      v-model="verifySuccessModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="success"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <h4><strong>Your have signed up successfully.</strong></h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="toSignIn()">
          Sign In
        </b-button>
      </template>
    </b-modal>
    <!-- verify fail modal -->
    <b-modal
      class="top-index"
      v-model="verifyFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Fail"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <h4>
        <strong>Oops...Please input the correct captcha.</strong>
      </h4>
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
      captcha: "",
      // modal
      verifySuccessModal: false,
      verifyFailModal: false,
    };
  },

  methods: {
    verify() {
      console.log("verify");
      axios({
        method: "post",
        url: this.baseURL + this.verifyEmailURL,
        headers: {},
        data: {
          code: this.captcha,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.msg === "") {
            console.log("success");
            this.verifySuccessModal = true;
          } else {
            console.log("error");
            this.verifyFailModal = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toSignIn() {
      this.$router.push("/user/signIn");
    }
  },
  computed: {
    // get data from vuex
    ...mapState({
      baseURL: (state) => {
        return state.api.springBaseURL;
      },
      verifyEmailURL: (state) => {
        return state.api.verityNewEmailURL;
      },
    }),
  },
};
</script>

<style>
#verify-email {
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
