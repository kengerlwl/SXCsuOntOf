<template>
  <div id="blog_home">
    <div>
      <div id="top-bg">
        <p id="top-desc">看时间不是为了起床，而是看还能睡多久</p>
      </div>
      <div id="top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <span id="username">{{ this.$route.params.id }}</span>
        <b-button
          id="about-btn"
          variant="dark"
          size="sm"
          @click="toViewUserAbout"
          ><b-icon-brightness-alt-high></b-icon-brightness-alt-high>
          About
        </b-button>
      </div>
    </div>
    <div id="blog-list">
      <b-container>
        <div class="mb-4">
          <b-button-toolbar justify aria-label="post create and search">
            <b-button-group class="mr-4"> </b-button-group>
            <b-button-group>
              <b-input-group>
                <b-form-input
                  v-model="search"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
              </b-input-group>
              <b-button-group class="mx-1">
                <b-button variant="outline-success" @click="searchBlogList">
                  Search
                </b-button>
              </b-button-group>
            </b-button-group>
          </b-button-toolbar>
        </div>
        <b-row>
          <b-col cols="3">
            <h2>Tags</h2>
            <hr class="my-4" />
            <b-button
              size="sm"
              class="m-1"
              variant="outline-success"
              pill
              @click="showAllPost"
            >
              ALL
            </b-button>
            <b-button
              size="sm"
              class="m-1"
              variant="outline-secondary"
              pill
              v-for="(item, i) in tags"
              :key="i"
              @click="filterByTag(item)"
            >
              {{ item }}
            </b-button>
          </b-col>
          <b-col cols="9">
            <b-card
              tag="article"
              class="mb-4 post-card"
              v-for="(item, i) in currentPageItems"
              :key="i"
              header-bg-variant="info"
              header-text-variant="white"
            >
              <template v-slot:header>
                <h4 class="mb-0">{{ item.blogName }}</h4>
              </template>
              <b-card-sub-title>POST ON {{ item.postTime }}</b-card-sub-title>
              <b-badge
                class="mr-2"
                v-for="(tag, j) in item.tags"
                variant="success"
                :key="j"
                >{{ tag }}</b-badge
              >
              <b-card-text>
                {{ item.previewContent }}
              </b-card-text>
              <b-button
                @click="toViewBlog(item.blogId)"
                variant="outline-info"
                class="mr-3"
              >
                READ MORE
              </b-button>
              <template v-slot:footer>
                <small class="text-muted">
                  <b-icon-clock></b-icon-clock> Last updated 3 mins ago
                </small>
              </template>
            </b-card>
            <b-pagination
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              class="my-0"
              limit="10"
            />
          </b-col>
        </b-row>
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

const items = [
  {
    id: 1,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 2,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content. wfowijeoifjwoeijfwoije",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 3,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 4,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 5,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 6,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 7,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 8,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 9,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 10,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 11,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 12,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 13,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 14,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 15,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 16,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 17,
    title: "Hello world",
    postTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
];
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        sex: "",
        birthday: "",
        description: "",
        company: "",
      },
      tags: [],
      search: "",
      blogList: items,
      showBlogList: [],
      currentPage: 1,
      perPage: 6,
      totalRows: items.length,
      paginated_items: {},
      currentPageIndex: 0,
      nbPages: 0,
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
    this.getUserPostsRequest();
    this.getAllTagsbyUserIdRequest();
  },
  created() {
    this.getUserPostsRequest();
    this.getAllTagsbyUserIdRequest();
  },
  methods: {
    // vueX mutation
    ...mapMutations({
      updateUsername: "updateUsername",
      updateIsSignIn: "updateIsSignIn",
      updateSignOutModal: "updateSignOutModal",
      updateTokenVerifyFailModal: "updateTokenVerifyFailModal",
    }),
    toViewUserAbout() {
      this.$router.push("/" + this.$route.params.id + "/blog/about");
    },
    searchBlogList() {
      let v = this.search;
      this.showBlogList = this.blogList.filter(function(item, index, array) {
        return (
          item.blogName.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.blogContent.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.postTime.toLowerCase().indexOf(v.toLowerCase()) > -1
        );
      });
      this.totalRows = this.showBlogList.length;
    },
    filterByTag(tagName) {
      this.showBlogList = [];
      for (let i = 0; i < this.blogList.length; i++) {
        for (let j = 0; j < this.blogList[i].tags.length; j++) {
          if (this.blogList[i].tags[j] === tagName) {
            this.showBlogList.push(this.blogList[i]);
            break;
          }
        }
      }
      this.totalRows = this.showBlogList.length;
    },
    showAllPost() {
      this.showBlogList = this.blogList;
      this.totalRows = this.showBlogList.length;
    },
    toViewBlog(blogId) {
      // 跳轉到 user_blog_read 子組件檢視，并添加 query string 作為参数
      this.$router
        .push({
          path: "/" + this.$route.params.id + "/blog/read",
          query: { blogId: blogId },
        })
        .catch((err) => {
          err;
        });
    },
    async getUserPostsRequest() {
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getPostByUsernameURL +
          "?user_name=" +
          this.$route.params.id,
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
            this.blogList = response.data.data.bloglist;
            console.log(this.blogList);
            for (let i = 0; i < this.blogList.length; i++) {
              this.blogList[i].tags = [];

              this.blogList[i].previewContent =
                this.blogList[i].blogContent.length > 200
                  ? this.blogList[i].blogContent.substring(0, 200) + "..."
                  : this.blogList[i].blogContent;
              console.log(this.blogList[i].blogId);
              for (
                let j = 0;
                j < response.data.data[this.blogList[i].blogId].length;
                j++
              ) {
                this.blogList[i].tags.push(
                  response.data.data[this.blogList[i].blogId][j].tagName
                );
              }
            }
            this.showBlogList = this.blogList;
            this.totalRows = this.showBlogList.length;
          }
          console.log(this.showBlogList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAllTagsbyUserIdRequest() {
      console.log(Vue.localStorage.get("user_id"));
      console.log(typeof parseInt(Vue.localStorage.get("user_id")));
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getAllTagsByUserIdURL +
          "?userid=" +
          Vue.localStorage.get("user_id"),
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
            if (response.data.status === true) {
              this.tags = response.data.data.tag;
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
      getPostsURL: (state) => {
        return state.api.getPostsURL;
      },
      getAllTagsByUserIdURL: (state) => {
        return state.api.getAllTagsByUserIdURL;
      },
      getPostByUsernameURL: (state) => {
        return state.api.getPostByUsernameURL;
      },
    }),
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      let lengthAll = this.showBlogList.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.showBlogList.slice(
          i,
          i + this.perPage
        );
        this.nbPages++;
      }

      return this.paginated_items[this.currentPage - 1];
    },
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to !== from) {
        location.reload();
      }
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
  height: 50vh;
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
#about-btn {
  position: relative;
  top: -1em;
  left: 1em;
}
#top-desc {
  padding-top: 4em;
}
#blog-list {
  position: relative;
  top: -13em;
}
.post-card {
  box-shadow: 0px 0px 9px rgb(200, 200, 200);
}
.page-item.active .page-link {
  background-color: rgb(100, 100, 100) !important;
  border-color: rgb(100, 100, 100) !important;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
