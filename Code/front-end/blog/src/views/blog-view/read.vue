<template>
  <div>
    <div>
      <div id="read-top-bg"></div>
      <div id="read-top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <span id="read-username">Username</span>
      </div>
    </div>
    <div id="markdown-content">
      <b-container>
        <b-navbar type="light" variant="light">
          <b-navbar-brand @click="goBack" v-b-tooltip.hover title="Back"
            ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill>
            Back</b-navbar-brand
          >
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
        <div id="comments" class="mt-5">
          <h2><b-icon-chat-square-dots-fill></b-icon-chat-square-dots-fill> Comments</h2>
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
                id="textarea-default"
                placeholder="Default textarea"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <div class="mt-2 send-btn">
            <b-button variant="success">Send</b-button>
          </div>
          <div>
            <b-row class="mt-2">
              <b-col cols="1">
                <b-avatar
                  size="64"
                  src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
                ></b-avatar>
              </b-col>
              <b-col>
                <div>
                  username
                </div>
                <div class="mb-1">
                  如果上天没有给你想要的，不是你值得拥有更好的，而是你不配。别以为今天是你人生的低谷，在你未来的日子里它都能算得上是巅峰了。见到长辈时，不是我们不想叫他，而是压根就不知道叫他什么。
                </div>
                <div>
                  2020-01-01 00:00
                </div>
                <div>
                  <b-button size="sm" variant="primary" class="mr-2"
                    >Edit</b-button
                  >
                  <b-button size="sm" variant="danger">Delete</b-button>
                </div>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row class="mt-2">
              <b-col cols="1">
                <b-avatar
                  size="64"
                  src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
                ></b-avatar>
              </b-col>
              <b-col>
                <div>
                  username
                </div>
                <div class="mb-1">
                  如果上天没有给你想要的，不是你值得拥有更好的，而是你不配。别以为今天是你人生的低谷，在你未来的日子里它都能算得上是巅峰了。见到长辈时，不是我们不想叫他，而是压根就不知道叫他什么。
                </div>
                <div>
                  2020-01-01 00:00
                </div>
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
</style>
