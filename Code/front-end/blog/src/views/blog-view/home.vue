<template>
  <div id="blog_home">
    <div id="fixed-menu">
      <div id="menu-avatar">
        <b-avatar size="15em"></b-avatar>
      </div>
      <div></div>
    </div>
    <div id="content">
      hello
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        sex: "",
        birthday: "",
        description: "",
        company: "",
      },
    };
  },
};
</script>
<style>
#blog_home {
  height: 100vh;
}
#fixed-menu {
  position: fixed;
  background: url("../../assets/bg1.png") no-repeat fixed center center/cover;
  width: 20vw;
  height: 100vh;
}
#menu-avatar {
  padding-top: 1em;
  text-align: center;
}
#content {
  margin-left: 20vw;
}
</style>
