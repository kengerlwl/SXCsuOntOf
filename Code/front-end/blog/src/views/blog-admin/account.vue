<template>
  <div active>
    <h1>Account Profile</h1>
    <hr class="my-4" />
    <b-row>
      <!-- left avatar -->
      <b-col md="auto">
        <b-container fluid>
          <div id="avatar-setting" class="mb-4">
            <b-avatar size="15em"></b-avatar>
          </div>
          <div id="avatar-edit">
            <b-button variant="dark" size="sm"
              ><b-icon-brush></b-icon-brush> Edit</b-button
            >
          </div>
        </b-container>
      </b-col>
      <b-col>
        <!-- right data -->
        <b-container fluid>
          <!-- username -->
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
            <!-- Edit username -->
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
              <b-icon-gear-fill
                @click="editEmailVisible = !editEmailVisible"
              ></b-icon-gear-fill>
              email</b-card-title
            >
            <!-- edit email -->
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
                    type="email"
                    required
                    placeholder="Enter New Email"
                  ></b-form-input>
                </b-form-group>
                <!-- get captcha -->
                <b-button variant="success">GET CAPTCHA</b-button>
              </b-collapse>
            </b-card-text>
          </b-card>
          <!-- password -->
          <b-card
            class="mb-4"
            border-variant="danger"
            header-bg-variant="danger"
            header-text-variant="white"
          >
            <template v-slot:header>
              <h4 class="mb-0">
                <b-icon-lock-fill></b-icon-lock-fill> Password
              </h4>
            </template>
            <b-card-title
              ><b-icon-gear-fill
                @click="editPasswordVisible = !editPasswordVisible"
              ></b-icon-gear-fill>
              password</b-card-title
            >
            <!-- edit password -->
            <b-card-text>
              <b-collapse
                id="collapse-password"
                v-model="editPasswordVisible"
                class="mt-2"
              >
                <!-- origin password -->
                <b-form-group
                  id="input-group-origin-password"
                  label="Origin Password:"
                  label-for="input-origin-password"
                  description=""
                >
                  <b-form-input
                    id="iinput-origin-password"
                    v-model="form.originPassword"
                    required
                    type="password"
                    placeholder="Enter Origin Password"
                  ></b-form-input>
                </b-form-group>
                <!-- new password -->
                <b-form-group
                  id="input-group-new-password"
                  label="New Password:"
                  label-for="input-new-password"
                  description=""
                >
                  <b-form-input
                    id="input-new-password"
                    v-model="form.newPassword"
                    required
                    type="password"
                    placeholder="Enter New Password"
                  ></b-form-input>
                </b-form-group>
                <!-- confirm new password -->
                <b-form-group
                  id="input-group-confirm-new-password"
                  label="Confirm New Password:"
                  label-for="input-confirm-new-password"
                  description=""
                >
                  <b-form-input
                    id="iinput-confirm-new-password"
                    v-model="form.comfirmNewPassword"
                    required
                    type="password"
                    placeholder="Confirm New Password"
                  ></b-form-input>
                </b-form-group>
                <b-button variant="success">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
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
      editPasswordVisible: false,
      form: {
        username: "",
        email: "",
        originPassword: "",
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
