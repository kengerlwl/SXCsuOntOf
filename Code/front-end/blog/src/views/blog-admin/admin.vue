<template>
  <div>
    <b-container id="admin" fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item :to="{ name: 'charts' }">Data Charts</b-list-group-item>
            <b-list-group-item :to="{ name: 'posts' }">Articles</b-list-group-item>
            <b-list-group-item href="#">Interfaces</b-list-group-item>
            <b-list-group-item href="#">Account</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col id="admin-router-view">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
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
