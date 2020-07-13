<template>
  <div>
    <b-container id="admin" fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item
              :to="{ name: 'charts' }"
              :class="activeClass('charts')"
              >Statistical Data</b-list-group-item
            >
            <b-list-group-item
              :to="{ name: 'posts' }"
              :class="activeClass('posts')"
              >Articles</b-list-group-item
            >
            <b-list-group-item
              :to="{ name: 'collect' }"
              :class="activeClass('collect')"
              >Collect</b-list-group-item
            >
            <b-list-group-item
              :to="{ name: 'account' }"
              :class="activeClass('account')"
              >Account</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col id="admin-router-view">
          <router-view></router-view>
        </b-col>
      </b-row>
      <div class="footer-space"></div>
    </b-container>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  methods: {
    activeClass: function(...names) {
      for (let name of names) {
        if (name == this.$route.name) return "active";
      }
    },
  },
};
</script>
<style>
#admin {
  padding-top: 2rem;
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
}
#admin-router-view {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
.footer-space {
  height: 10rem;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
