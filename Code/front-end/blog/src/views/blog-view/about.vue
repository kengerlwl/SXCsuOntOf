<template>
  <div>
    <div>
      <div id="about-top-bg"></div>
      <div id="about-top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <a
          ><span
            id="about-username"
            @click="toUserBlogHome"
            v-b-tooltip.hover
            title="Home Blog List"
            >Username</span
          ></a
        >
      </div>
    </div>
    <div id="about-content">
      <b-container>
        <h2>Profile</h2>
        <hr class="my-4" />
        <b-container>
          <!-- username -->
          <b-card
            class="mb-4"
            border-variant="dark"
            header-bg-variant="dark"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-person-fill></b-icon-person-fill> Username
              </h4>
            </template>
            <b-card-title>
              {{ user.username }}
            </b-card-title>
          </b-card>
          <!-- email -->
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0"><b-icon-at></b-icon-at> Email</h4>
            </template>
            <b-card-title>
              {{ user.email }}
            </b-card-title>
          </b-card>
          <!-- sex -->
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0"><b-icon-asterisk></b-icon-asterisk> Sex</h4>
            </template>
            <b-card-title>
              {{ user.sex }}
            </b-card-title>
          </b-card>
          <!-- birthday -->
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-calendar3-fill></b-icon-calendar3-fill> Birthday
              </h4>
            </template>
            <b-card-title>
              {{ user.birthday }}
            </b-card-title>
          </b-card>
          <!-- description -->
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-chat-square-dots-fill></b-icon-chat-square-dots-fill>
                Description
              </h4>
            </template>
            <b-card-title>
              {{ user.description }}
            </b-card-title>
          </b-card>
          <!-- company -->
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-briefcase-fill></b-icon-briefcase-fill> Company
              </h4>
            </template>
            <b-card-title>
              {{ user.company }}
            </b-card-title>
          </b-card>
        </b-container>
      </b-container>
    </div>
    <div id="footer">
      <b-container>
        <!-- Content here -->
        <div>
          <div class="title">
            About
          </div>
          <div>
            Developer
          </div>
          <div>
            <b-avatar
              class="about-avatar"
              variant="info"
              v-for="(item, i) in aboutDeveloper"
              :src="item.avatar"
              :key="i"
              size="3rem"
              v-b-tooltip.hover
              :title="item.developer"
              :href="item.url"
              target="_blank"
            ></b-avatar>
          </div>
          <div>
            Github repositor
          </div>
          <div>
            <b-avatar
              class="about-avatar"
              :src="require(`../../assets/github-logo.png`)"
              size="3rem"
              v-b-tooltip.hover
              title="Github"
              href="https://github.com/2892211452/SXCsuOntOf"
              target="_blank"
            ></b-avatar>
          </div>
        </div>

        <div id="copy">
          <div>{{ new Date().getFullYear() }} — <strong>MD-BLOG</strong></div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      // here user data
      user: {
        username: "",
        email: "",
        description: "",
        birthday: "",
        sex: "",
        company: "",
        password: "********",
      },
      aboutDeveloper: [
        {
          developer: "2892211452",
          url: "https://github.com/2892211452",
          avatar:
            "https://avatars3.githubusercontent.com/u/54618163?s=460&u=55b46432f1406d9493e56a9d35b953a10cd00c97&v=4",
        },
        {
          developer: "李观星",
          url: "https://github.com/1349621303",
          avatar:
            "https://avatars3.githubusercontent.com/u/48098033?s=460&u=385bd42969fa1fb3b261d06e2fb1c8aef3239602&v=4",
        },
        {
          developer: "LiZisheng",
          url: "https://github.com/LiZisheng",
          avatar: "https://avatars1.githubusercontent.com/u/44458337?s=460&v=4",
        },
        {
          developer: "Before-r",
          url: "https://github.com/Before-r",
          avatar: "https://avatars0.githubusercontent.com/u/61647508?s=460&v=4",
        },

        {
          developer: "HuangNO1",
          url: "https://github.com/HuangNO1",
          avatar:
            "https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4",
        },
      ],
    };
  },
  created() {
    this.getUserDataRequest();
  },
  methods: {
    toUserBlogHome() {
      this.$router.push("/" + this.$route.params.id + "/blog/home");
    },
    // get user's data
    async getUserDataRequest() {
      console.log("getUserDataRequest");
      axios({
        method: "post",
        url: this.springBaseURL + this.getUserDataURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          username: this.$route.params.id,
        },
      })
        .then((response) => {
          console.log(response.data);
          // token verify fail
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              this.user.username = response.data.data.username;
              this.user.email = response.data.data.email;
              this.user.description = response.data.data.description;
              this.user.sex = response.data.data.sex;
              this.user.company = response.data.data.company;
              this.user.birthday = response.data.data.birthday;
            } else {
            }
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
      getUserDataURL: (state) => {
        return state.api.getUserDataURL;
      },
    }),
  },
};
</script>
<style>
#about-top-bg {
  width: 100%;
  height: 20vh;
  background: url("../../assets/top_bg.jpg") no-repeat fixed center center/cover;
  text-align: center;
  font-size: 3em;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#about-top-avatar {
  position: relative;
  top: -9em;
  left: 4em;
  display: inline-block;
}
#about-username {
  font-size: 3em;
  padding-left: 1em;
}
#about-content {
  position: relative;
  top: -12em;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
