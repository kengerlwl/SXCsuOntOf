<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item to="school" :active="$route.name === 'school'"
          >School's New</b-nav-item
        >
        <b-nav-item to="game" :active="$route.name === 'game'"
          >Game's New</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            class="mr-sm-2"
            placeholder="Search..."
          ></b-form-input>
          <b-button class="my-2 my-sm-0" variant="outline-light"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>
