<template>
  <div id="home">
    <div id="first-part">
      <div class="title">
        Welcome Come To MD-Blog
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
    <div></div>
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
        "> this is a quote",
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
  height: 50rem;
}
#first-part {
  height: 100%;
  background: rgb(30, 30, 30);
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
  height: 60%;
  background: orange;
  display: flex;
  justify-content: space-between;
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
  font-size: 3rem;
}

.vue-typer .custom.char.typed {
  color: #607d8b;
}
.vue-typer .custom.char.selected {
  color: #607d8b;
  background-color: transparent;
}
</style>
