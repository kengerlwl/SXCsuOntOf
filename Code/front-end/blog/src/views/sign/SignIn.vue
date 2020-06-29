<template>
  <div id="sign-in-content">
    <b-form-group id="input-group-1" label="Username:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="username"
        required
        placeholder="Enter Username"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="password"
        type="password"
        required
        placeholder="Enter Password"
      ></b-form-input>
    </b-form-group>
    <div id="forgot-pwd-link">
      <b-link>
        Forgot Password?
      </b-link>
    </div>
    <b-form-checkbox id="checkbox-1" v-model="checkbox" name="checkbox-1">
      I accept
    </b-form-checkbox>
    <b-button id="sign-in-btn" pill size="lg" block variant="success"
      >SIGN IN</b-button
    >
    <b-button
      id="sign-in-btn"
      pill
      size="lg"
      block
      variant="outline-secondary"
      to="/sign/signUp"
      >SIGN UP</b-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checkbox: "",
    };
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
#sign-in-btn {
  margin-top: 1rem;
}
</style>
