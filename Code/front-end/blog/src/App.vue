<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand to="/">MD-BLOG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="isSignIn" :to="{ name: 'user_blog_home' }">Your Blog</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/news">News</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="isSignIn" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <strong>{{ username }}</strong>
            </template>
            <b-dropdown-item :to="{ name: 'posts' }">Posts</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'charts' }"
              >Dashboard</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'collect' }"
              >Collection</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'account' }">Profile</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="openSignOutModal"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item v-if="!isSignIn" to="/sign">Sign In</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- sign out modal -->
    <b-modal
      v-model="signOutModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Sign In Fail"
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <h4>
        <strong>Are you sure you wnat to sign out?</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          Cancel
        </b-button>
        <b-button variant="danger" @click="signOut">
          Sign Out
        </b-button>
      </template>
    </b-modal>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      isSignIn: false,
      username: "",
      signOutModal: false,
    };
  },
  created() {
    this.verifyIsSignIn();
  },
  methods: {
    verifyIsSignIn() {
      let jwt_token = Vue.localStorage.get("jwt_token");
      if (jwt_token !== "" && jwt_token !== null && jwt_token !== undefined) {
        this.isSignIn = true;
        this.username = Vue.localStorage.get("user_name");
      } else {
        this.isSignIn = false;
      }
    },
    auto_login() {},
    openSignOutModal() {
      this.signOutModal = true;
    },
    signOut() {
      Vue.localStorage.set("jwt_token", "");
      Vue.localStorage.set("user_name", "");
      this.isSignIn = false;
      this.username = "";
      this.signOutModal = false;
      this.$router.push("/");
    },
  },
};
</script>
<style>
#app {
  font-family: "SF Pro TC", "SF Pro Text", "SF Pro Icons", "PingFang TC",
    "Helvetica Neue", "Helvetica", "Arial", "Microsoft JhengHei", wf_SegoeUI,
    "Segoe UI", Segoe, "Segoe WP", Tahoma, Verdana, Ubuntu,
    "Bitstream Vera Sans", "DejaVu Sans", Tahoma, 微軟正黑體, "LiHei Pro",
    "WenQuanYi Micro Hei", "Droid Sans Fallback", "AR PL UMing TW", Roboto,
    "Helvetica Neue", "Hiragino Maru Gothic ProN", メイリオ,
    "ヒラギノ丸ゴ ProN W4", Meiryo, "Droid Sans", sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
