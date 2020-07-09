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
        <span id="username">Username</span>
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
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
              </b-input-group>
              <b-button-group class="mx-1">
                <b-button variant="outline-success" type="submit">
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
              variant="outline-secondary"
              pill
              v-for="(item, i) in tags"
              :key="i"
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
                <h4 class="mb-0">{{ item.id + item.title }}</h4>
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
                {{
                  item.descript.length > 200
                    ? item.descript.substring(0, 200) + "..."
                    : item.descript
                }}
              </b-card-text>
              <b-button to="read" variant="outline-info" class="mr-3">
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
  </div>
</template>
<script>
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
      tags: [
        "Hello",
        "linux",
        "blog",
        "archLinux",
        "macOS",
        "npm",
        "bootstrap",
        "json",
        "Golang",
      ],
      blogList: items,
      currentPage: 1,
      perPage: 6,
      totalRows: items.length,
      paginated_items: {},
      currentPageIndex: 0,
      nbPages: 0,
    };
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      let lengthAll = this.blogList.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.blogList.slice(
          i,
          i + this.perPage
        );
        this.nbPages++;
      }

      return this.paginated_items[this.currentPage - 1];
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
#top-desc {
  padding-top: 5em;
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
</style>
