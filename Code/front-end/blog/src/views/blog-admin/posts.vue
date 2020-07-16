<template>
  <div active>
    <!--
    {{ posts }}<br /><br /><br />
    {{ showPosts }}<br />-->
    <h1>Your Posts</h1>
    <hr class="my-4" />
    <b-alert show>Note: 這裡管理你的 Blog 文章</b-alert>
    <div class="mb-4">
      <b-button-toolbar justify aria-label="post create and search">
        <b-button-group class="mr-4">
          <b-button variant="success" @click="toEditBlog(-1)"
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
            <!--
            {{
              item.blogContent.length > 200
                ? item.blogContent.substring(0, 200) + "..."
                : item.blogContent
            }}-->
            {{ item.previewContent }}
          </b-card-text>
          <b-button
            @click="toEditBlog(item.blogId)"
            variant="outline-info"
            class="mr-3"
          >
            <b-icon-brush></b-icon-brush> Edit
          </b-button>
          <b-button
            @click="openEditTagsModal(item.blogId, item.blogName, item.tags)"
            variant="outline-primary"
            class="mr-3"
          >
            <b-icon-brush></b-icon-brush> Tags
          </b-button>
          <b-button variant="danger" @click="openDeleteModal(i, item.blogId)">
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
      <b-col cols="3">
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
    <!-- delete success modal -->
    <b-modal
      v-model="deletePostSuccessModal"
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
    <!-- edit tags modal -->
    <b-modal
      v-model="editTagsModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Edit Tags"
      header-bg-variant="success"
      header-text-variant="light"
      size="lg"
    >
      <h4>{{ currentEditBlogName }}</h4>
      <div class="mb-4">
        <ul
          id="my-custom-tags-list"
          class="list-unstyled d-inline-flex flex-wrap mb-0"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions removals"
        >
          <b-card
            v-for="(tag, i) in currentEditTags"
            :key="i"
            tag="li"
            class="mt-1 mr-1"
            body-class="py-1 pr-2 text-nowrap"
            bg-variant="info"
            text-variant="light"
            border-variant="light"
          >
            <strong>{{ tag }}</strong>
            <b-button variant="info" size="sm" @click="deleteTag(tag)"
              ><b-icon-x></b-icon-x
            ></b-button>
          </b-card>
        </ul>
      </div>
      <div>
        <!-- new Tag -->
        <b-form-group id="input-group-1" label="New Tag" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="newTag.tagName"
            required
            placeholder="Enter a new tag"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="tag-add-btn">
        <b-button variant="outline-dark" @click="addNewTag">Add</b-button>
      </div>
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
      tags: [],
      // delete post modal
      deletePostModal: false,
      deleteItem: {},
      deletePostSuccessModal: false,
      // search
      search: "",
      // edit tags modal
      editTagsModal: false,
      currentEditTags: [],
      currentEditBlogName: "",
      currentEditBlogId: "",
      newTag: {
        blogId: -1,
        tagName: "",
      },
    };
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
    openDeleteModal(index, blogId) {
      this.deletePostModal = true;
      this.deleteItem.index = index;
      this.deleteItem.blogId = blogId;
    },
    deletePost() {
      // this.paginated_items[this.currentPage - 1].splice(this.deleteItem.index, 1);
      console.log("delete post id: " + this.deleteItem.blogId);
      for (let i = 0; i < this.showPosts.length; i++) {
        if (this.showPosts[i].blogId === this.deleteItem.blogId) {
          this.showPosts.splice(i, 1);
        }
      }
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].blogId === this.deleteItem.blogId) {
          this.posts.splice(i, 1);
        }
      }
      // axios request
      this.deletePostRequest(this.deleteItem.blogId);

      this.deletePostModal = false;
      // change totalRows
      this.totalRows = this.showPosts.length;
    },
    searchBlogList() {
      let v = this.search;
      this.showPosts = this.posts.filter(function(item, index, array) {
        return (
          item.blogName.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.blogContent.toLowerCase().indexOf(v.toLowerCase()) > -1 ||
          item.postTime.toLowerCase().indexOf(v.toLowerCase()) > -1
        );
      });
      this.totalRows = this.showPosts.length;
    },
    toEditBlog(blogId) {
      // 跳轉到 viewProduct 子組件檢視產品詳細，并添加 query string 作為参数
      this.$router.push({
        path:
          "/" + Vue.localStorage.get("user_name") + "/admin/posts/post_edit",
        query: { blogId: blogId },
      });
    },
    openEditTagsModal(blogId, blogName, tags) {
      this.currentEditBlogId = blogId;
      this.currentEditBlogName = blogName;
      this.currentEditTags = tags;
      this.newTag.blogId = blogId;
      this.editTagsModal = true;
    },
    deleteTag(tagName) {
      for (let i = 0; i < this.currentEditTags.length; i++) {
        if (this.currentEditTags[i] === tagName) {
          this.currentEditTags.splice(i, 1);
          break;
        }
      }
    },
    addNewTag() {
      this.addNewTagRequest(this.currentEditBlogId, this.newTag.tagName);
      this.currentEditTags.push(this.newTag.tagName);
      this.newTag.tagName = "";
    },
    async deleteTagRequest() {
      axios({
        method: "get",
        url: this.springBaseURL + this.deleteTagURL,
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
    async addNewTagRequest(blogId, tagName) {
      axios({
        method: "post",
        url: this.springBaseURL + this.addNewTagURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          blogId: blogId,
          tagName: tagName,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              this.getAllTagsbyUserIdRequest();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterByTag(tagName) {
      this.showPosts = [];
      for (let i = 0; i < this.posts.length; i++) {
        for (let j = 0; j < this.posts[i].tags.length; j++) {
          if (this.posts[i].tags[j] === tagName) {
            this.showPosts.push(this.posts[i]);
            break;
          }
        }
      }
      this.totalRows = this.showPosts.length;
    },
    showAllPost() {
      this.showPosts = this.posts;
      this.totalRows = this.showPosts.length;
    },
    async getUserPostsRequest() {
      axios({
        method: "get",
        url:
          this.springBaseURL +
          this.getPostsURL +
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
            this.posts = response.data.data.bloglist;
            console.log(this.posts);
            for (let i = 0; i < this.posts.length; i++) {
              this.posts[i].tags = [];

              this.posts[i].previewContent =
                this.posts[i].blogContent.length > 200
                  ? this.posts[i].blogContent.substring(0, 200) + "..."
                  : this.posts[i].blogContent;
              console.log(this.posts[i].blogId);
              for (
                let j = 0;
                j < response.data.data[this.posts[i].blogId].length;
                j++
              ) {
                this.posts[i].tags.push(
                  response.data.data[this.posts[i].blogId][j].tagName
                );
              }
            }
            this.showPosts = this.posts;
            this.totalRows = this.showPosts.length;
          }
          console.log(this.showPosts);
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

    async deletePostRequest(postId) {
      axios({
        method: "post",
        url: this.springBaseURL + this.deletePostURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          blogId: String(postId),
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            this.deletePostSuccessModal = true;
            this.getAllTagsbyUserIdRequest();
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
      deletePostURL: (state) => {
        return state.api.deletePostURL;
      },
      getAllTagsByUserIdURL: (state) => {
        return state.api.getAllTagsByUserIdURL;
      },
      addNewTagURL: (state) => {
        return state.api.addNewTagURL;
      },
      deleteTagURL: (state) => {
        return state.api.deleteTagURL;
      },
    }),
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
.tag-add-btn {
  display: flex;
  justify-content: flex-end;
}
</style>
