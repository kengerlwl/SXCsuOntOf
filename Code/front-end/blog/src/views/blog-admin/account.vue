<template>
  <div active>
    <h1>Account Profile</h1>
    <hr class="my-4" />
    <b-row>
      <b-col md="auto">
        <b-container fluid>
          <div id="avatar-setting" class="mb-4">
            <b-avatar size="15em"></b-avatar>
          </div>
          <div id="avatar-edit">
            <b-button variant="dark" size="sm"><b-icon-brush></b-icon-brush> Edit</b-button>
          </div>
        </b-container>
      </b-col>
      <b-col>
        <b-container fluid>
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
                <b-form-group
                  id="input-group-username"
                  label="New Username:"
                  label-for="input-username"
                  description=""
                >
                  <b-form-input
                    id="input-username"
                    v-model="form.username"
                    required
                    placeholder="Enter New Username"
                  ></b-form-input>
                </b-form-group>
                <b-button variant="success">SUBMIT</b-button>
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
            <b-card-title>
              <b-icon-gear-fill
                @click="editEmailVisible = !editEmailVisible"
              ></b-icon-gear-fill>
              email</b-card-title
            >
            <b-card-text>
              <b-collapse
                id="collapse-email"
                v-model="editEmailVisible"
                class="mt-2"
              >
                <b-form-group
                  id="input-group-email"
                  label="New Email:"
                  label-for="input-email"
                  description=""
                >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    required
                    placeholder="Enter New Email"
                  ></b-form-input>
                </b-form-group>
                <b-button variant="success">GET CAPTCHA</b-button>
              </b-collapse>
            </b-card-text>
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
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editUsernameVisible: false,
      editEmailVisible: false,
      form: {
        username: "",
        email: "",
        password: "",
        newPassword: "",
        comfirmNewPassword: "",
      },
    };
  },
};
</script>
<style>
#avatar-edit {
  position: relative;
  top: -60px;
}
</style>
