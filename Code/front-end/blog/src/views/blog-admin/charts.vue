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
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      perPage: 5,
      currentPage: 1,
      items: [
        { Blog: 1, post: "Fred", volumns: "Flintstone" },
        { Blog: 2, post: "Wilma", volumns: "Flintstone" },
        { Blog: 3, post: "Barney", volumns: "Rubble" },
        { Blog: 4, post: "Betty", volumns: "Rubble" },
        { Blog: 5, post: "Pebbles", volumns: "Flintstone" },
        { Blog: 6, post: "Bamm Bamm", volumns: "Rubble" },
        { Blog: 7, post: "The Great", volumns: "Gazzoo" },
        { Blog: 8, post: "Rockhead", volumns: "Slate" },
        { Blog: 9, post: "Pearl", volumns: "Slaghoople" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
<style>
.page-item.active .page-link {
  background-color: rgb(100, 100, 100) !important;
  border-color: rgb(100, 100, 100) !important;
}
</style>
