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
        <div>
          <b-badge variant="info">Origin Article</b-badge>
          <b-link :href="item.url" target="_blank">
            {{ item.url }}
          </b-link>
        </div>
        <div class="mt-4 mb-4">
          <b-button @click="viewNews(item.title, item.content)"
            >Read Here</b-button
          >
        </div>
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
        <div class="footer-space"></div>
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
    </b-sidebar>
  </div>
</template>
<script>
import { school } from "../../static/js/news_school_testData";
// import VueX
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      schools: [],
      title: "",
      content: ``,
      viewNewsTetail: false,
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
  created() {
    this.getSchoolNews();
  },
  methods: {
    viewNews(title, content) {
      this.title = title;
      this.content = content;
      this.viewNewsTetail = true;
    },
    getSchoolNews() {
      this.getSchoolNewsRequest();
    },
    async getSchoolNewsRequest() {
      axios
        .get(this.flaskBaseURL + this.getSchoolNewsURL)
        .then((response) => {
          console.log(response.data);
          this.schools = response.data.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      flaskBaseURL: (state) => {
        return state.api.flaskBaseURL;
      },
      getSchoolNewsURL: (state) => {
        return state.api.getSchoolNewsURL;
      },
    }),
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
#news-detail p {
  background: rgba(0, 0, 0, 0) !important;
}
#news-detail span {
  background: rgba(0, 0, 0, 0) !important;
}
#news-detail a {
  background: rgba(0, 0, 0, 0) !important;
}
.news-card {
  opacity: 0.8;
}
.footer-space {
  height: 10rem;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
