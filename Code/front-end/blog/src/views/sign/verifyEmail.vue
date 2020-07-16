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
      <b-button class="sign-btn" pill size="lg" block variant="danger" @click="verify"
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
    };
  },

  methods: {
    verify(){
        console.log("verify");
  axios({
        method: "post",
        url: this.baseURL + this.verifyEmailURL,
        headers: {},
        data: {
          code: this.captcha
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.msg=== "") {
            console.log("success")
           
            // route push
            // this.$router.push("/user/signIn");
          } else {
            console.log("error")
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
