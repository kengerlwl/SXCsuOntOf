<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item to="school" :active="$route.name === 'school'"
          >School's News</b-nav-item
        >
        <b-nav-item to="game" :active="$route.name === 'game'"
          >Game's News</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input class="mr-sm-2" placeholder="Search..."></b-form-input>
          <b-button class="my-2 my-sm-0" variant="outline-light"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <div id="news">
      <b-container>
        <router-view></router-view>
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
};
</script>
<style>
#news {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
  padding-top: 3em;
  padding-bottom: 3em;
}
.footer-space {
  height: 10rem;
}
#footer {
  background-color: rgb(50, 50, 50);
  color: white;
}
</style>
