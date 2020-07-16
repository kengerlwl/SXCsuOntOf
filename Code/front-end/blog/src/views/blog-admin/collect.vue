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
            <h4 class="mb-0">{{ item.blogName }}</h4>
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
            {{ item.previewContent }}
          </b-card-text>
          <b-button variant="outline-info" class="mr-3" @click="toViewBlog(item.username, item.blogId)">
            READ MORE
          </b-button>
          <b-button
            variant="danger"
            @click="openDeleteModal(i, item.collectId)"
          >
            <b-icon-trash-fill></b-icon-trash-fill> Delete
          </b-button>
          <template v-slot:footer>
            <small class="text-muted">
              <b-icon-clock></b-icon-clock> COLLECTED ON {{ item.collectDate }}
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
      <b-col cols="3">
        <!-- right tags -->
        <b-card header-bg-variant="dark" header-text-variant="white">
          <template v-slot:header>
            <h4 class="mb-0">Tags</h4>
          </template>
          <b-card-text>
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
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- delete collect modal -->
    <b-modal
      v-model="deletePostModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Delete collection"
      header-bg-variant="danger"
      header-text-variant="light"
    >
      <h4><strong>Are you sure you want to delete this collection?</strong></h4>
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
    <!-- delete collect success modal -->
    <b-modal
      v-model="deleteCollectSuccessModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Delete Post"
      header-bg-variant="success"
      header-text-variant="light"
    >
      <h4><strong>Delete Success</strong></h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";

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
      showCollectBlog: [],
      // tags
      tags: [],
      // delete post modal
      deletePostModal: false,
      deleteItem: {},
      deleteCollectSuccessModal: false,
      // search
      search: "",
    };
  },
  created() {
    this.getCollectRequest();
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
    openDeleteModal(index, collectId) {
      this.deletePostModal = true;
      this.deleteItem.index = index;
      this.deleteItem.collectId = collectId;
    },
    deletePost() {
      // this.paginated_items[this.currentPage - 1].splice(this.deleteItem.index, 1);
      console.log("delete collection id: " + this.deleteItem.collectId);
      for (let i = 0; i < this.collectBlog.length; i++) {
        if (this.collectBlog[i].collectId === this.deleteItem.collectId) {
          this.collectBlog.splice(i, 1);
        }
      }

      for (let i = 0; i < this.showCollectBlog.length; i++) {
        if (this.showCollectBlog[i].collectId === this.deleteItem.collectId) {
          this.showCollectBlog.splice(i, 1);
        }
      }
      // axios
      this.deleteCollectRequest(this.deleteItem.collectId);
      // modal
      this.deletePostModal = false;
      // change totalRows
      this.totalRows = this.showCollectBlog.length;
    },
    filterByTag(tagName) {
      this.showCollectBlog = [];
      for (let i = 0; i < this.collectBlog.length; i++) {
        for (let j = 0; j < this.collectBlog[i].tags.length; j++) {
          if (this.collectBlog[i].tags[j] === tagName) {
            this.showCollectBlog.push(this.collectBlog[i]);
            break;
          }
        }
      }
      this.totalRows = this.showCollectBlog.length;
    },
    showAllPost() {
      this.showCollectBlog = this.collectBlog;
      this.totalRows = this.showCollectBlog.length;
    },
    searchBlogList() {
      let v = this.search;
      this.showCollectBlog = this.collectBlog.filter(function(
        item,
        index,
        array
      ) {
        return (
          item.blogName.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.blogContent.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.collectDate.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.username.toLowerCase().indexOf(v.toLowerCase()) > -1
        );
      });
      this.totalRows = this.showCollectBlog.length;
    },
    toViewBlog(username , blogId) {
      // 跳轉到 user_blog_read 子組件檢視，并添加 query string 作為参数
      this.$router.push({
        path:
          "/" + username + "/blog/read",
        query: { blogId: blogId },
      });
    },
    async deleteCollectRequest(collectId) {
      axios({
        method: "post",
        url: this.springBaseURL + this.deleteCollectURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          collectId: String(collectId),
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            this.deleteCollectSuccessModal = true;
            this.getAllTagsbyUserIdRequest();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCollectRequest() {
      console.log("getCollectRequest");
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getCollectURL +
          "?user_id=" +
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
            this.collectBlog = response.data.data.collectList;
            console.log(this.collectBlog);

            for (let i = 0; i < this.collectBlog.length; i++) {
              // blog username
              this.collectBlog[i].username =
                response.data.data[
                  String(this.collectBlog[i].blogId + "username")
                ];
              // origin blog info
              this.collectBlog[i].originUserId =
                response.data.data[this.collectBlog[i].blogId].userId;
              this.collectBlog[i].postTime =
                response.data.data[this.collectBlog[i].blogId].postTime;
              this.collectBlog[i].blogName =
                response.data.data[this.collectBlog[i].blogId].blogName;
              this.collectBlog[i].blogContent =
                response.data.data[this.collectBlog[i].blogId].blogContent;
              this.collectBlog[i].blogViews =
                response.data.data[this.collectBlog[i].blogId].blogViews;
              // blog content
              this.collectBlog[i].previewContent =
                this.collectBlog[i].blogContent.length > 200
                  ? this.collectBlog[i].blogContent.substring(0, 200) + "..."
                  : this.collectBlog[i].blogContent;

              console.log("before tag");
              console.log(this.collectBlog);
              // tag init
              this.collectBlog[i].tags = [];

              console.log(this.collectBlog[i].blogId);
              for (
                let j = 0;
                j <
                response.data.data[String(this.collectBlog[i].blogId + "tag")]
                  .length;
                j++
              ) {
                this.collectBlog[i].tags.push(
                  response.data.data[
                    String(this.collectBlog[i].blogId + "tag")
                  ][j].tagName
                );
              }
            }
            this.showCollectBlog = this.collectBlog;
            this.totalRows = this.showCollectBlog.length;
          }
          console.log(this.collectBlog);
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
          this.getAllCollectTagsByUserIdURL + "?userid=" + Vue.localStorage.get("user_id"),
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              this.tags = response.data.data.tags;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  computed: {
    ...mapState({
      springBaseURL: (state) => {
        return state.api.springBaseURL;
      },
      getUserDataURL: (state) => {
        return state.api.getUserDataURL;
      },
      getCollectURL: (state) => {
        return state.api.getCollectURL;
      },
      getAllCollectTagsByUserIdURL: (state) => {
        return state.api.getAllCollectTagsByUserIdURL;
      },
      deleteCollectURL: (state) => {
        return state.api.deleteCollectURL;
      },
      tokenVerifyFailModal: (state) => {
        return state.user.tokenVerifyFailModal;
      },
      tokenVerifyFailModal: (state) => {
        return state.user.tokenVerifyFailModal;
      },
    }),
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      if (this.showCollectBlog.length === 0) {
        this.showCollectBlog = this.collectBlog;
      }
      let lengthAll = this.showCollectBlog.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.showCollectBlog.slice(
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
