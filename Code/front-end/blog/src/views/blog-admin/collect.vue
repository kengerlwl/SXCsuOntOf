<template>
  <div>
    <h1>Collect</h1>
    <hr class="my-4" />
    <b-alert show>Note: 查看你的收藏 Blog 文章</b-alert>
    <div class="mb-4">
      <b-button-toolbar justify aria-label="post create and search">
        <b-button-group class="mr-4"> </b-button-group>
        <b-button-group>
          <b-input-group>
            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
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
        <!-- left tags -->
        <b-card header-bg-variant="dark" header-text-variant="white">
          <template v-slot:header>
            <h4 class="mb-0">Tags</h4>
          </template>
          <b-card-text>
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
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="9">
        <!-- collect article -->
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
          <b-card-sub-title>
            <b-icon-person-fill></b-icon-person-fill> {{ item.username }}
          </b-card-sub-title>
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
          <b-button href="#" variant="outline-info" class="mr-3">
            READ MORE
          </b-button>
          <b-button href="#" variant="danger">
            <b-icon-trash-fill></b-icon-trash-fill> Delete
          </b-button>
          <template v-slot:footer>
            <small class="text-muted">
              <b-icon-clock></b-icon-clock> COLLECTED ON {{ item.collectTime }}
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
  </div>
</template>
<script>
// test data
const items = [
  {
    id: 1,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 2,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content. wfowijeoifjwoeijfwoije",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 3,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 4,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 5,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 6,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 7,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 8,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 9,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 10,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 11,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 12,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 13,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 14,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 15,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 16,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
  {
    id: 17,
    title: "Hello world",
    username: "MMMMM",
    collectTime: "2019年7月19日 06:21",
    descript:
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
    tags: ["info", "Helllow", "linux", "GNU"],
  },
];
export default {
  data() {
    return {
      // control pages
      currentPage: 1,
      perPage: 6,
      totalRows: items.length,
      paginated_items: {},
      currentPageIndex: 0,
      nbPages: 0,
      collectBlog: items,
      // tags
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
    };
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      let lengthAll = this.collectBlog.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.collectBlog.slice(
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
.post-card {
  box-shadow: 0px 0px 9px rgb(200, 200, 200);
}
.page-item.active .page-link {
  background-color: rgb(100, 100, 100) !important;
  border-color: rgb(100, 100, 100) !important;
}
</style>
