<template>
  <div id="home">
    <div id="first-part">
      <div class="title">
        Welcome Come To MD-BLOG
      </div>
      <div>
        <b-button variant="danger" size="lg">CREATE YOUR BLOG</b-button>
      </div>
      <b-container class="carousel-content">
        <!-- Content here -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="2000"
          controls
          indicators
          background="#ababab"
          img-width="500"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-container>
    </div>
    <div id="second-part">
      <div class="descript">
        <p class="des-title">優雅的寫作方式</p>
        <p class="des-content">使用 Markdown 作為編寫語言，寫起來輕鬆方便。</p>
        <vue-typer
          :text="typerContent"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      <div class="des-image">
        <img
          src="../../assets/markdown.png"
          width="480"
          height="480"
          alt="markdown"
        />
      </div>
    </div>
    <div id="third-part">
      <div class="des-image">
        <img src="../../assets/api.png" width="400" height="400" alt="api" />
      </div>
      <div class="descript">
        <p class="des-title">多種 API 服務選擇</p>
        <p class="des-content">提供方便的 API 給使用者選擇。</p>
      </div>
    </div>
    <div id="end-part">
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
import { VueTyper } from "vue-typer";

export default {
  components: {
    // ES6; property shorthand + Vue should automatically dasherize the key for us
    VueTyper,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      typerContent: [
        "# This is header 1",
        "**You can make the words strong**",
        "> This is a quote.",
      ],
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
#home {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
}
#first-part {
  height: 50rem;
  /*background: rgb(235, 152, 28);*/
  text-align: center;
}
#first-part > .title {
  padding-top: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  color: white;
}
.carousel-content {
  margin-top: 1rem;
}
#second-part {
  height: 30rem;
  /*background: rgb(7, 176, 95);*/
  display: flex;
  justify-content: space-between;
  padding-right: 3rem;
  padding-left: 3rem;
}
.title {
  font-size: 3rem;
}
.descript {
  padding: 5rem;
  color: white;
  width: 50%;
}
.des-title {
  font-size: 3rem;
}
.des-content {
  font-size: 2rem;
}
.des-image {
  width: 30%;
}

.vue-typer {
  font-size: 2.5rem;
}

.vue-typer .custom.char.typed {
  color: #607d8b;
}
.vue-typer .custom.char.selected {
  color: #607d8b;
  background-color: transparent;
}

#third-part {
  height: 30rem;
  /*background: rgb(7, 114, 176);*/
  display: flex;
  justify-content: space-around;
  padding-right: 3rem;
  padding-left: 3rem;
}

#end-part {
  height: 20rem;
  /*background: rgb(66, 66, 66);*/
  color: white;
  padding: 1rem;
}
.about-avatar {
  margin: 0.4rem;
}

#copy {
  text-align: center;
}
</style>
