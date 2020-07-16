<template>
  <div>
    <div>
      <!-- title -->
      <b-navbar type="light" variant="light">
        <b-navbar-brand @click="goBack" v-b-tooltip.hover title="Back"
          ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill
        ></b-navbar-brand>
        <b-nav-form>
          <label for="input-blog-title" class="mr-3">TITLE</label>
          <b-form-input
            id="input-blog-title"
            v-model="blog.blogName"
            class="mr-sm-2"
            placeholder="Title..."
          ></b-form-input>
        </b-nav-form>
        <b-navbar-nav class="ml-auto">
          <b-button variant="success" @click="savePost">Save</b-button>
        </b-navbar-nav>
      </b-navbar>
      <!-- save error modal -->
      <b-modal
        class="top-index"
        v-model="saveFailModal"
        no-close-on-backdrop
        no-close-on-esc
        centered
        title="Save Post Fail"
        header-bg-variant="danger"
        header-text-variant="light"
      >
        <h4><strong>Please change a blog title.</strong></h4>
        <template v-slot:modal-footer="{ ok, cancel, hide }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button variant="success" @click="ok()">
            OK
          </b-button>
        </template>
      </b-modal>
      <!-- save success modal -->
      <b-modal
        class="top-index"
        v-model="saveSuccessModal"
        no-close-on-backdrop
        no-close-on-esc
        centered
        title="save success"
        header-bg-variant="success"
        header-text-variant="light"
      >
        <h4><strong>Save this post success.</strong></h4>
        <template v-slot:modal-footer="{ ok, cancel, hide }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button variant="success" @click="ok()">
            OK
          </b-button>
        </template>
      </b-modal>
    </div>
    <!-- tags -->
    <!--
    <div id="tag-input-box">
      <b-form-tags
        input-id="tags-pills"
        v-model="blogTags"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="Enter new tags separated by space"
        class="mb-2"
      ></b-form-tags>
    </div>-->
    <!-- blog content -->
    <mavon-editor
      id="posts-edit"
      v-model="blog.blogContent"
      language="en"
      fontSize="16px"
    />
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";

export default {
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
      // modal
      saveFailModal: false,
      saveSuccessModal: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.blogId === "-1" || to.query.blogId === -1) {
      this.blog.blogId = 0;
      this.blog.userId = Vue.localStorage.get("user_id");
      this.blog.blogContent = "# Title";
      this.blog.postTime = "";
      this.blog.blogName = "init";
    } else {
      this.getPostByBlogId(to.query.blogId);
    }
  },
  created() {
    if (this.$route.query.blogId === "-1" || this.$route.query.blogId === -1) {
      this.blog.blogId = -1;
      this.blog.userId = parseInt(Vue.localStorage.get("user_id"), 10);
      this.blog.blogContent = "# Title";
      this.blog.postTime = "";
      this.blog.blogName = "init";
    } else {
      this.getPostByBlogId(this.$route.query.blogId);
    }
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
    savePost() {
      if (
        this.blog.blogId === "-1" ||
        this.blog.blogId === -1
      ) {
        this.addNewPost();
      } else {
        this.updatePost();
      }
    },
    async addNewPost() {
      let date = new Date();
      let postTime =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      axios({
        method: "post",
        url: this.springBaseURL + this.createNewPostURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          blogId: null,
          userId: parseInt(Vue.localStorage.get("user_id"), 10),
          blogContent: this.blog.blogContent,
          postTime: null,
          blogViews: 0,
          blogName: this.blog.blogName,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              // change route query
              this.$route.query.blogId = response.data.data.result.blogId;
              this.blog.blogId = response.data.data.result.blogId;
              this.blog.userId = response.data.data.result.userId;
              this.saveSuccessModal = true;
            } else {
              this.saveFailModal = true;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updatePost() {
      let date = new Date();
      let postTime =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      axios({
        method: "post",
        url: this.springBaseURL + this.updatePostURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          blogId: this.blog.blogId,
          userId: this.blog.userId,
          blogContent: this.blog.blogContent,
          postTime: null,
          blogViews: this.blog.blogViews,
          blogName: this.blog.blogName,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              this.saveSuccessModal = true;
            } else {
              this.saveFailModal = true;
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
      getPostByBlogIdURL: (state) => {
        return state.api.getPostByBlogIdURL;
      },
      deletePostURL: (state) => {
        return state.api.deletePostURL;
      },
      updatePostURL: (state) => {
        return state.api.updatePostURL;
      },
      createNewPostURL: (state) => {
        return state.api.createNewPostURL;
      },
    }),
  },
};
</script>
<style>
#posts-edit {
  height: 100vh;
}

#tag-input-box {
  padding: 1em 5em 1em;
}
.v-note-wrapper {
  z-index: 100 !important;
}
.top-index {
  z-index: 100001;
}
</style>
