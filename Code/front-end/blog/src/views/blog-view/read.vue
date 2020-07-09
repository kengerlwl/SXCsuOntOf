<template>
  <div>
    <div>
      <div id="top-bg"></div>
      <div id="top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <span id="username">Username</span>
      </div>
    </div>
    <div id="markdown-content">
      <b-container>
        <b-navbar type="light" variant="light">
        <b-navbar-brand @click="goBack" v-b-tooltip.hover title="Back"
          ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill
        > Back</b-navbar-brand>
      </b-navbar>
        <div class="box-shadow">
          <h1>{{ blog.title }}</h1>
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

          <markdown-it-vue :content="blog.content" />
        </div>
        <div id="comments">
            
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import MarkdownText from "../../static/js/example_md";
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";

export default {
  components: {
    MarkdownItVue,
  },
  data() {
    return {
      blog: {
        title: "Demo",
        tags: ["markdown", "vue", "java", "python", "linux"],
        content: MarkdownText,
        postTime: "2020-07-09 00:00",
      },
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
<style>
#blog_home {
  height: 100vh;
}
#top-bg {
  width: 100%;
  height: 20vh;
  background: url("../../assets/top_bg.jpg") no-repeat fixed center center/cover;
  text-align: center;
  font-size: 3em;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#top-avatar {
  position: relative;
  top: -9em;
  left: 4em;
  display: inline-block;
}
#username {
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
</style>
