<template>
  <div>
    <div>
      <h1>CSU's CS's News</h1>
    </div>
    <b-card class="mb-2 news-card" v-for="(item, i) in schools" :key="i">
      <b-media>
        <h4 class="mt-0">
          <h3>{{ "#" + (i + 1) }}</h3>
          {{ item.title }}
        </h4>
        <p>
          Origin Article:
          <b-link :href="item.url" target="_blank">
            {{ item.url }}
          </b-link>
        </p>
        <p>
          <b-button @click="viewNews(item.title, item.content)">Read Here</b-button>
        </p>
      </b-media>
    </b-card>
    <b-sidebar
      v-model="viewNewsTetail"
      :title="title"
      width="100%"
      backdrop
      shadow
      bg-variant="dark"
      text-variant="light"
    >
    <div id="news-detail">
      <b-container>
        <div class="px-3 py-2" v-html="content"></div>
      </b-container>
    </div>
      
    </b-sidebar>
  </div>
</template>
<script>
import { school } from "../../static/js/news_school_testData";
export default {
  data() {
    return {
      schools: school,
      title: "",
      content: ``,
      viewNewsTetail: false,
    };
  },
  methods: {
    viewNews(title, content) {
      this.title = title;
      this.content = content;
      this.viewNewsTetail = true;
    },
  },
  computed: {
    libText: function() {
      // return directly html
      var str = "<div><p>some html</p></div>";
      return str;
    },
  },
};
</script>
<style>
#news-detail {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon) !important;
  background: -o-linear-gradient(LightSteelBlue, LightSalmon) !important;
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon) !important;
  background: linear-gradient(LightSteelBlue, LightSalmon) !important;
}
#vsb_content p span {
  background: rgba(0, 0, 0, 0) !important;
}
#vsb_content a {
  background: rgba(0, 0, 0, 0) !important;
}
.news-card {
  opacity: 0.8;
}
</style>