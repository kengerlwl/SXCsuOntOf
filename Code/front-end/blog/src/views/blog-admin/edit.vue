<template>
  <div>
    <div>
      <b-navbar type="light" variant="light">
        <b-navbar-brand @click="goBack" v-b-tooltip.hover title="Back"
          ><b-icon-arrow-left-circle-fill></b-icon-arrow-left-circle-fill
        ></b-navbar-brand>
        <b-nav-form>
          <label for="input-blog-title" class="mr-3">TITLE</label>
          <b-form-input
            id="input-blog-title"
            class="mr-sm-2"
            placeholder="Title..."
          ></b-form-input>
        </b-nav-form>
        <b-navbar-nav class="ml-auto">
          <b-button variant="success">Save</b-button>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div id="tag-input-box">
      <b-form-tags
      input-id="tags-pills"
      v-model="blogTags"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Enter new tags separated by space"
      class="mb-2"
    ></b-form-tags>
    </div>
    <mavon-editor
      id="posts-edit"
      v-model="blogContent"
      language="en"
      fontSize="16px"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogContent: "",
      blogTags: []
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
<style>
#posts-edit {
  height: 100vh;
}

#tag-input-box {
  padding: 1em 5em 1em;
}
</style>
