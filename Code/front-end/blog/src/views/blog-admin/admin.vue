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
            <b-list-group-item href="#">Interfaces</b-list-group-item>
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
    </b-container>
  </div>
</template>
<script>
export default {
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
}
#admin-router-view {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
</style>
