<template>
  <div>
    <div>
      <div id="read-top-bg"></div>
      <div id="read-top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <span
          id="read-username"
          @click="toUserBlogHome"
          v-b-tooltip.hover
          title="Home Blog List"
          >{{ this.$route.params.id }}</span
        >
      </div>
    </div>
    <div id="markdown-content">
      <b-container>
        <b-navbar type="light" variant="light">
          <b-navbar-brand @click="goBack" v-b-tooltip.hover title="Back"
            ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill>
            Back</b-navbar-brand
          >
          <b-navbar-nav class="ml-auto">
            <b-button variant="outline-success" @click="addNewCollect"
              >Collect</b-button
            >
          </b-navbar-nav>
          <!-- collect success modal -->
          <b-modal
            class="top-index"
            v-model="collectSuccessModal"
            no-close-on-backdrop
            no-close-on-esc
            centered
            title="collect success"
            header-bg-variant="success"
            header-text-variant="light"
          >
            <h4><strong>Collect this post success.</strong></h4>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="success" @click="ok()">
                OK
              </b-button>
            </template>
          </b-modal>
          <!-- collect fail modal -->
          <b-modal
            class="top-index"
            v-model="collectFailModal"
            no-close-on-backdrop
            no-close-on-esc
            centered
            title="collect Fail"
            header-bg-variant="danger"
            header-text-variant="light"
          >
            <h4><strong>You have collect this post.</strong></h4>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="success" @click="ok()">
                OK
              </b-button>
            </template>
          </b-modal>
          <!-- guest need sign modal -->
          <b-modal
            class="top-index"
            v-model="guestSignInModal"
            no-close-on-backdrop
            no-close-on-esc
            centered
            title="Oops..."
            header-bg-variant="info"
            header-text-variant="light"
          >
            <h4><strong>Please sign in to do the action.</strong></h4>
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button variant="info" @click="ok()">
                OK
              </b-button>
            </template>
          </b-modal>
        </b-navbar>
        <div class="box-shadow">
          <h1>{{ blog.blogName }}</h1>
          <div class="subheader p-1 mb-1">POST ON {{ blog.postTime }}</div>
          <div class="mb-4">
            <b-button
              size="sm"
              class="m-1"
              variant="outline-secondary"
              pill
              v-for="(item, i) in blog.tags"
              :key="i"
            >
              {{ item }}
            </b-button>
          </div>

          <markdown-it-vue :content="blog.blogContent" />
        </div>
        <div id="comments" class="mt-5">
          <h2>
            <b-icon-chat-square-dots-fill></b-icon-chat-square-dots-fill>
            Comments
          </h2>
          <hr class="my-4" />
          <b-row class="mt-2">
            <b-col cols="1">
              <b-avatar
                size="64"
                src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
              ></b-avatar>
            </b-col>
            <b-col>
              <b-form-textarea
                v-model="writeComment"
                id="textarea-default"
                placeholder="Write something"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <div class="mt-2 send-btn">
            <b-button variant="success" @click="sendComment">Send</b-button>
          </div>
          <hr class="my-4" />
          <div v-for="(comment, i) in commentList">
            <b-row class="mt-2">
              <b-col cols="1">
                <b-avatar
                  size="64"
                  src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
                ></b-avatar>
              </b-col>
              <b-col>
                <div>
                  {{ comment.userId }}
                </div>
                <div class="mb-1">
                  {{ comment.commentWord }}
                </div>
                <div>post on {{ comment.commentDate }}</div>

                <div>
                  <b-button size="sm" variant="primary" class="mr-2"
                    >Edit</b-button
                  >
                  <b-button size="sm" variant="danger">Delete</b-button>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
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
// import VueX
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";
import MarkdownText from "../../static/js/example_md";
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";

export default {
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      blogTags: [],
      blog: {
        blogId: 0,
        userId: 0,
        blogContent: "",
        postTime: "",
        blogViews: 0,
        blogName: "",
      },
      commentList: [],
      writeComment: "",
      // collect
      collectSuccessModal: false,
      collectFailModal: false,
      // need sign in
      guestSignInModal: false,
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
  beforeRouteUpdate(to, from, next) {
    this.getPostByBlogId(to.query.blogId);
  },
  created() {
    this.getPostByBlogId(this.$route.query.blogId);
    this.getCommentByBlogIdRequest();
  },
  methods: {
    ...mapMutations({
      updateUsername: "updateUsername",
      updateIsSignIn: "updateIsSignIn",
      updateSignOutModal: "updateSignOutModal",
      updateTokenVerifyFailModal: "updateTokenVerifyFailModal",
    }),
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    toUserBlogHome() {
      this.$router.push("/" + this.$route.params.id + "/blog/home");
    },
    addNewCollect() {
      let token = Vue.localStorage.get("jwt_token");
      if (token === undefined || token === null || token === "") {
        this.guestSignInModal = true;
      } else {
        this.addNewCollectRequest();
      }
    },
    sendComment() {
      if (this.writeComment !== "") {
        this.sendCommentRequest(this.writeComment);
        this.writeComment = "";
      }
    },
    async addNewCollectRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.addCollectURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          collectId: null,
          userId: this.blog.userId,
          blogId: this.blog.blogId,
          collectDate: null,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              this.collectSuccessModal = true;
            } else {
              this.collectFailModal = true;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getPostByBlogId(BlogId) {
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getPostByBlogIdURL +
          "?blog_id=" +
          this.$route.query.blogId,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {},
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            this.blog = response.data.data.blog_id;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCommentByBlogIdRequest() {
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getCommentByBlogIdURL +
          "?blog_id=" +
          this.$route.query.blogId,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {},
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            this.commentList = response.data.data.commentList;
            console.log("comment list");
            console.log(this.commentList);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async sendCommentRequest(text) {
      axios({
        method: "post",
        url: this.springBaseURL + this.addNewCommentURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          commentId: null,
          userId: this.blog.userId,
          blogId: this.blog.blogId,
          commentWord: text,
          commentDate: null,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            this.getCommentByBlogIdRequest();
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
      getPostByBlogIdURL: (state) => {
        return state.api.getPostByBlogIdURL;
      },
      getCommentByBlogIdURL: (state) => {
        return state.api.getCommentByBlogIdURL;
      },
      addCollectURL: (state) => {
        return state.api.addCollectURL;
      },
      addNewCommentURL: (state) => {
        return state.api.addNewCommentURL;
      },
    }),
  },
};
</script>
<style>
#read-top-bg {
  width: 100%;
  height: 20vh;
  background: url("../../assets/top_bg.jpg") no-repeat fixed center center/cover;
  text-align: center;
  font-size: 3em;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#read-top-avatar {
  position: relative;
  top: -9em;
  left: 4em;
  display: inline-block;
}
#read-username {
  font-size: 3em;
  padding-left: 1em;
}
#markdown-content {
  position: relative;
  top: -12em;
}
.box-shadow {
  box-shadow: 0px 0px 9px rgb(200, 200, 200);
  padding: 1.5em;
}
.send-btn {
  display: flex;
  justify-content: flex-end;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
