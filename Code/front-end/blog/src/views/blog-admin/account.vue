<template>
  <div active>
    <b-row>
      <b-col>
        <div>
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-person-fill></b-icon-person-fill> Username
              </h4>
            </template>
            <b-card-title>
              <b-icon-gear-fill
                @click="editUsernameVisible = !editUsernameVisible"
              ></b-icon-gear-fill>
              username</b-card-title
            >
            <b-card-text>
              <b-collapse
                id="collapse-username"
                v-model="editUsernameVisible"
                class="mt-2"
              >
                hello
              </b-collapse>
            </b-card-text>
          </b-card>
          <b-card
            class="mb-4"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0"><b-icon-at></b-icon-at> Email</h4>
            </template>
            <b-card-title
              ><b-icon-gear-fill></b-icon-gear-fill> email</b-card-title
            >
          </b-card>
          <b-card
            class="mb-4"
            border-variant="danger"
            header-bg-variant="danger"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-lock-fill></b-icon-lock-fill> password
              </h4>
            </template>
            <b-card-title
              ><b-icon-gear-fill></b-icon-gear-fill> password</b-card-title
            >
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div id="avatar-setting" class="mb-4">
          <b-avatar size="15em"></b-avatar>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editUsernameVisible: false,
    };
  },
};
</script>
<style>
#avatar-setting {
  text-align: center;
}
</style>
