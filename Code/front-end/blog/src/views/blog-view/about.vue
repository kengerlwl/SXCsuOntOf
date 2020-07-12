<template>
  <div>
    <div>
      <div id="about-top-bg"></div>
      <div id="about-top-avatar">
        <b-avatar
          size="15em"
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
        ></b-avatar>
        <span id="about-username">Username</span>
      </div>
    </div>
    <div id="about-content">
      <b-container>
        <h2>Profile</h2>
        <hr class="my-4" />
        <!-- username -->
        <b-card
          class="mb-4"
          border-variant="dark"
          header-bg-variant="dark"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0">
              <b-icon-person-fill></b-icon-person-fill> Username
            </h4>
          </template>
          <b-card-title>
            username
          </b-card-title>
        </b-card>
        <!-- email -->
        <b-card
          class="mb-4"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0"><b-icon-at></b-icon-at> Email</h4>
          </template>
          <b-card-title>
            email
          </b-card-title>
        </b-card>
        <!-- sex -->
        <b-card
          class="mb-4"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0"><b-icon-asterisk></b-icon-asterisk> Sex</h4>
          </template>
          <b-card-title>
            sex
          </b-card-title>
        </b-card>
        <!-- birthday -->
        <b-card
          class="mb-4"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0">
              <b-icon-calendar3-fill></b-icon-calendar3-fill> Birthday
            </h4>
          </template>
          <b-card-title>
            birthday
          </b-card-title>
        </b-card>
        <!-- description -->
        <b-card
          class="mb-4"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0">
              <b-icon-chat-square-dots-fill></b-icon-chat-square-dots-fill>
              Description
            </h4>
          </template>
          <b-card-title>
            description
          </b-card-title>
        </b-card>
        <!-- company -->
        <b-card
          class="mb-4"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <template v-slot:header>
            <h4 class="mb-0">
              <b-icon-briefcase-fill></b-icon-briefcase-fill> Company
            </h4>
          </template>
          <b-card-title>
            company
          </b-card-title>
        </b-card>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
#about-top-bg {
  width: 100%;
  height: 20vh;
  background: url("../../assets/top_bg.jpg") no-repeat fixed center center/cover;
  text-align: center;
  font-size: 3em;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#about-top-avatar {
  position: relative;
  top: -9em;
  left: 4em;
  display: inline-block;
}
#about-username {
  font-size: 3em;
  padding-left: 1em;
}
#about-content {
  position: relative;
  top: -12em;
}
</style>
