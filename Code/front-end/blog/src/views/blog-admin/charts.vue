<template>
  <div active>
    <h1>Statistical Data</h1>
    <hr class="my-4" />
    <b-alert show>Note: 這裡有你的 Blog 的瀏覽訪問數據統計圖表。</b-alert>
    <div class="mb-4">
      <b-card
        border-variant="dark"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <template v-slot:header>
          <h4 class="mb-0">
            <b-icon-house-door-fill></b-icon-house-door-fill> Visitor Volume
          </h4>
        </template>

        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </b-card>
    </div>
    <b-card
      border-variant="dark"
      header-bg-variant="dark"
      header-text-variant="white"
    >
      <template v-slot:header>
        <h4 class="mb-0">
          <b-icon-bar-chart-fill></b-icon-bar-chart-fill> Rank
        </h4>
      </template>
      <div class="overflow-auto">
        <b-table
          id="my-table"
          striped
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
        ></b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          limit="10"
        ></b-pagination>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
    };
    return {
      chartData: {
        columns: ["博客", "访问用户"],
        rows: [

        ],
      },
      perPage: 5,
      currentPage: 1,
      items: [
    
      ],
    };
  },
  computed: {
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
    }),
    rows() {
      return this.items.length;
    },
  },
  created(){
    console.log("created");
    this.getUserPostsRequest();
  },

  methods: {
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
              let tmp = this.posts[i];
              this.chartData.rows.push({ 博客: tmp.blogName, 访问用户: tmp.blogViews });



            }
//             var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b}); 
        this.posts.sort(function(a, b){
          return  b.blogViews - a.blogViews;
        })
        console.log(this.posts);

        for(let i=0; i < this.posts.length; i++){
          let tmp = this.posts[i];
          this.items.push({index: 1+i, blogName: tmp.blogName, blogViews: tmp.blogViews });
        }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
}
};
</script>
<style>
.page-item.active .page-link {
  background-color: rgb(100, 100, 100) !important;
  border-color: rgb(100, 100, 100) !important;
}
</style>
