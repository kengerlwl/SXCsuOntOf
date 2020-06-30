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
      <b-button id="sign-btn" pill size="lg" block variant="danger"
        >VERIFY</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      captcha: "",
    };
  },
};
</script>

<style>
#verify-email {
  padding: 2rem;
}
#sign-btn {
  margin-top: 1rem;
}
.title {
  font-size: 3rem;
  text-align: start;
  padding-left: 2rem;
}
</style>
