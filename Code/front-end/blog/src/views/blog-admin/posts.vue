<template>
  <div active>
    <b-card
      tag="article"
      class="mb-4 post-card"
      v-for="(item, i) in currentPageItems"
      :key="i"
    >
      <b-card-title>{{ item.id + item.title }}</b-card-title>
      <b-card-sub-title>ON {{ item.postTime }}</b-card-sub-title>
      <b-badge
        class="mr-2"
        v-for="(tag, j) in item.tags"
        variant="success"
        :key="j"
        >{{ tag }}</b-badge
      >
      <b-card-text>
        {{ item.descript }}
      </b-card-text>
      <b-button href="#" variant="outline-info">READ MORE</b-button>
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
    />
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
      "Some quick example text to build on the card title and make up the bulk of the card/'s content.",
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
    };
  },
  computed: {
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    currentPageItems() {
      let lengthAll = this.posts.length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.perPage) {
        this.paginated_items[this.nbPages] = this.posts.slice(
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
  box-shadow: 0px 0px 9px rgb(150, 150, 150);
}
</style>
