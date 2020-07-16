<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand to="/">MD-BLOG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="isSignIn" @click="to('/blog/home')"
            >Your Blog</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/news">News</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="top-index" v-if="isSignIn" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <strong>{{ username }}</strong>
            </template>
            <b-dropdown-item @click="to('/admin/posts')">Posts</b-dropdown-item>
            <b-dropdown-item @click="to('/admin/charts')"
              >Dashboard</b-dropdown-item
            >
            <b-dropdown-item @click="to('/admin/collect')"
              >Collection</b-dropdown-item
            >
            <b-dropdown-item @click="to('/admin/account')">Profile</b-dropdown-item>
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
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <template v-slot:modal-header="{ close }">
        <h5>Sign Out</h5>
      </template>
      <h4>
        <strong>Are you sure you wnat to sign out?</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="cancelSignOut">
          Cancel
        </b-button>
        <b-button variant="danger" @click="signOut">
          Sign Out
        </b-button>
      </template>
    </b-modal>
    <!-- token verify fail modal -->
    <b-modal
      v-model="tokenVerifyFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <template v-slot:modal-header="{ close }">
        <h5>Token Expired</h5>
      </template>
      <h4>
        <strong>You must sign in again.</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="signOut">
          OK
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
// import VueX
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default {
  data() {
    return {};
  },
  created() {
    this.verifyIsSignIn();
  },
  methods: {
    ...mapMutations({
      updateUsername: "updateUsername",
      updateIsSignIn: "updateIsSignIn",
      updateSignOutModal: "updateSignOutModal",
      updateTokenVerifyFailModal: "updateTokenVerifyFailModal",
    }),
    verifyIsSignIn() {
      let jwt_token = Vue.localStorage.get("jwt_token");
      if (jwt_token !== "" && jwt_token !== null && jwt_token !== undefined) {
        this.updateIsSignIn(true);
        this.updateUsername(Vue.localStorage.get("user_name"));
      } else {
        this.updateIsSignIn(false);
      }
    },
    auto_login() {},
    openSignOutModal() {
      this.updateSignOutModal(true);
    },
    cancelSignOut() {
      this.updateSignOutModal(false);
    },
    signOut() {
      Vue.localStorage.set("jwt_token", "");
      Vue.localStorage.set("user_name", "");
      this.updateIsSignIn(false);
      this.updateUsername("");
      this.updateSignOutModal(false);
      this.updateTokenVerifyFailModal(false);
      this.$router.push("/");
    },
    to(path) {
      this.$router.push("/" + Vue.localStorage.get("user_name") + path);
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      username: (state) => {
        return state.user.username;
      },
      isSignIn: (state) => {
        return state.user.isSignIn;
      },
      signOutModal: (state) => {
        return state.user.signOutModal;
      },
      tokenVerifyFailModal: (state) => {
        return state.user.tokenVerifyFailModal;
      },
    }),
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

.top-index {
  z-index: 1000000 !important;
}
</style>
