<template>
  <div id="not-found">
    <b-container fluid>
      <div class="not-found-title">404</div>
      <div class="not-found-desc">
        This is not the page you're looking for.
      </div>
      <div class="text-center">
        <b-spinner class="m-2" variant="danger" label="Spinning"></b-spinner>
        <b-spinner
          class="m-2"
          variant="danger"
          type="grow"
          label="Spinning"
        ></b-spinner>
        <b-spinner class="m-2" variant="primary" label="Spinning"></b-spinner>
        <b-spinner
          class="m-2"
          variant="primary"
          type="grow"
          label="Spinning"
        ></b-spinner>
        <b-spinner class="m-2" variant="success" label="Spinning"></b-spinner>
        <b-spinner
          class="m-2"
          variant="success"
          type="grow"
          label="Spinning"
        ></b-spinner>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style>
#not-found {
  background: rgb(240, 240, 240);
}
.not-found-title {
  font-size: 10em;
  text-align: center;
  padding-top: 3rem;
}
.not-found-desc {
  font-size: 3em;
  text-align: center;
}

#not-found {
  width: 100%;
  height: 60rem;
}

#not-found {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
}
</style>
