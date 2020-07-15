<template>
  <div active>
    <!--
    {{ posts }}<br /><br /><br />
    {{ showPosts }}<br />
    <h1>Your Posts</h1>-->
    <hr class="my-4" />
    <b-alert show>Note: 這裡管理你的 Blog 文章</b-alert>
    <div class="mb-4">
      <b-button-toolbar justify aria-label="post create and search">
        <b-button-group class="mr-4">
          <b-button variant="success" :to="{ name: 'post_edit' }"
            >Create New Post</b-button
          >
        </b-button-group>
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
          <b-button href="#" variant="outline-info" class="mr-3">
            <b-icon-brush></b-icon-brush> Edit
          </b-button>
          <b-button variant="danger" @click="openDeleteModal(i, item.id)">
            <b-icon-trash-fill></b-icon-trash-fill> Delete
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
    <!-- delete modal -->
    <b-modal
      v-model="deletePostModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Delete Post"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <h4><strong>Are you sure you want to delete this post?</strong></h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="cancel()">
          Cancel
        </b-button>
        <b-button variant="danger" @click="deletePost()">
          Delete
        </b-button>
      </template>
    </b-modal>
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
      currentPage: 1,
      perPage: 6,
      totalRows: items.length,
      paginated_items: {},
      currentPageIndex: 0,
      nbPages: 0,
      posts: items,
      showPosts: [],
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
      // delete post modal
      deletePostModal: false,
      deleteItem: {},
      // search
      search: "",
    };
  },
  created() {
    this.showPosts = this.posts;
  },
  methods: {
    openDeleteModal(index, id) {
      this.deletePostModal = true;
      this.deleteItem.index = index;
      this.deleteItem.id = id;
    },
    deletePost() {
      // this.paginated_items[this.currentPage - 1].splice(this.deleteItem.index, 1);
      console.log("delete post id: " + this.deleteItem.id);
      for (let i = 0; i < this.showPosts.length; i++) {
        if (this.showPosts[i].id === this.deleteItem.id) {
          this.showPosts.splice(i, 1);
        }
      }
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id === this.deleteItem.id) {
          this.posts.splice(i, 1);
        }
      }

      this.deletePostModal = false;
      // change totalRows
      this.totalRows = this.showPosts.length;
    },
    searchBlogList() {
      let v = this.search;
      this.showPosts = this.posts.filter(function(item, index, array) {
        return (
          item.title.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.descript.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.postTime.toLowerCase().indexOf(v.toLowerCase()) > -1
        );
      });
      this.totalRows = this.showPosts.length;
    },
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      if (this.showPosts.length === 0) {
        this.showPosts = this.posts;
      }
      let lengthAll = this.showPosts.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.showPosts.slice(
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
