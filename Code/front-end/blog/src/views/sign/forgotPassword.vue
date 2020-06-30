<template>
  <div>
    <div class="title">
      <div>
        Forgot Password
      </div>
    </div>
    <div id="forgot-password">
      <!-- email -->
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>
      <b-button id="sign-btn" pill size="lg" block variant="danger"
        >GET NEW PASSWORD</b-button
      >
      <!-- Sign In -->
      <b-button
        id="sign-btn"
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
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style>
#forgot-password {
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
