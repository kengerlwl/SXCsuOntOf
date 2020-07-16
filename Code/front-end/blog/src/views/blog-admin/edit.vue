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
          <b-button variant="success">Save</b-button>
        </b-navbar-nav>
      </b-navbar>
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
      blogContent: "",
      blogTags: [],
      blog: {
        blogId: 0,
        userId: "",
        blogContent: "",
        postTime: "",
        blogViews: 0,
        blogName: "",
      },
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
      this.blog.userId = Vue.localStorage.get("user_id");
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
            this.$route.query.blogId = response.data.data.blog_id.blogId;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    savePost() {
      if (
        this.$route.query.blogId === "-1" ||
        this.$route.query.blogId === -1
      ) {
        this.addNewPost();
      } else {
        this.updatePost();
      }
    },
    async addNewPost() {
      axios({
        method: "post",
        url: this.springBaseURL + this.createNewPostURL,
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
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updatePost() {
      axios({
        method: "post",
        url: this.springBaseURL + this.updatePostURL,
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
</style>
