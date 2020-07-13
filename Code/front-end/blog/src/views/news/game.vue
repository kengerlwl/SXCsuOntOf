<template>
  <div>
    <div>
      <h1>Free games from <strong>Epic</strong> in this week</h1>
    </div>
    <b-card class="mb-2 news-card" v-for="(item, i) in games" :key="i">
      <b-media>
        <template v-slot:aside>
          <b-img :src="item.image" width="250" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">{{ item.name }}</h5>
        <p>
          effective date: {{ item.data }}<br />
          origin price: {{ item.originPrice }}
        </p>
        <p>
          <b-button :href="item.url" target="_blank" variant="primary"
            >Buy It</b-button
          >
        </p>
      </b-media>
    </b-card>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios'

const games = [
  {
    name: "Hades OLD",
    data: "2018-11-27T21:25:00.000Z",
    image:
      "https://cdn1.epicgames.com/min/offer/blood_EventCover_01-800x450-6d2dae89e7061a5a191d77875d2661cf.png",
    originPrice: "US$10.99",
    url: "https://www.epicgames.com/store/zh-CN/product/hades/home",
  },
  {
    name: "Hue",
    data: "2020-07-02T15:00:00.000Z",
    image:
      "https://cdn1.epicgames.com/cd88d9edc5a748cfa138e467205adcac/offer/Diesel_productv2_hue_home_EGS_Hue_FiddleSticks_S3-1360x766-d1cb4d0e7b61c0ba596d3546fa4dc7bea9190bfd-1360x766-2da72302af40c17b0405c392bf160b88.jpg",
    originPrice: "US$7.99",
    url: "https://www.epicgames.com/store/zh-CN/product/hue/home",
  },
  {
    name: "Lifeless Planet: Premier Edition",
    data: "2020-07-09T15:00:00.000Z",
    image:
      "https://cdn1.epicgames.com/9ce4c6f216cf43e7ba5eff1045b6e08d/offer/EGS_LifelessPlanetPremierEdition_Stage2Studios_S1-2560x1440-a466b8c6b0f8d8b850fdd839216a9ad1.jpg",
    originPrice: "0",
    url:
      "https://www.epicgames.com/store/zh-CN/product/lifeless-planet-premier-edition/home/home",
  },
  {
    name: "Killing Floor 2",
    data: "2020-07-09T15:00:00.000Z",
    image:
      "https://cdn1.epicgames.com/affc33b82405457595a032f00284abd2/offer/KF2_2560x1440-2560x1440-644173a0251b030bd2612e8f33b800d5.jpg",
    originPrice: "US$11.99",
    url: "https://www.epicgames.com/store/zh-CN/product/killing-floor-2/home",
  },
  {
    name: "The Escapists 2",
    data: "2020-07-09T15:00:00.000Z",
    image:
      "https://cdn1.epicgames.com/115577f4ef1e4055aaf0da534fdfe81e/offer/egs-theescapists2-team17andmouldytoofstudios-s5-1360x765-1360x765-5e7a7db47fdfb418519b2b6eccec0fed.jpg",
    originPrice: "US$8.99",
    url:
      "https://www.epicgames.com/store/zh-CN/product/the-escapists-2/home/home",
  },
  {
    name: "Overcooked",
    data: "2099-01-01T00:00:00.000Z",
    image:
      "https://cdn1.epicgames.com/d5241c76f178492ea1540fce45616757/offer/EpicVault_Clean_OPEN_V10_LightsON-1920x1080-75e6d0636a6083944570a1c6f94ead4f.png",
    originPrice: "0",
    url: "https://www.epicgames.com/store/zh-CN/product/overcooked/home",
  },
];

export default {
  data() {
    return {
      games: games,
    };
  },
  created() {
    this.getFreeGameNews();
  },
  methods: {
    getFreeGameNews() {
      this.getFreeGameNewsRequest();
    },
    async getFreeGameNewsRequest() {
      axios
        .get(this.flaskBaseURL + this.getGamesNewsURL)
        .then((response) => {
          console.log(response.data);
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
      getGamesNewsURL: (state) => {
        return state.api.getGamesNewsURL;
      },
    }),
  },
};
</script>
<style>
.news-card {
  opacity: 0.8;
}
</style>
