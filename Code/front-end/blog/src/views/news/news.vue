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
    </div>
  </div>
</template>
<style>
#news {
  background: -webkit-linear-gradient(LightSteelBlue, LightSalmon);
  background: -o-linear-gradient(LightSteelBlue, LightSalmon);
  background: -moz-linear-gradient(LightSteelBlue, LightSalmon);
  background: linear-gradient(LightSteelBlue, LightSalmon);
  padding-top: 3em;
  padding-bottom: 3em;
}
</style>
