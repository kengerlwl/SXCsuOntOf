<template>
  <div active>
    <h1>Account Profile</h1>
    <hr class="my-4" />
    <b-row>
      <!-- left avatar -->
      <b-col md="auto">
        <b-container fluid>
          <div id="avatar-setting" class="mb-4">
            <b-avatar
              size="15em"
              src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
            ></b-avatar>
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
              <b-icon-gear-fill
                id="tooltip-username-gear"
                @click="editUsername"
              ></b-icon-gear-fill>
              username
            </b-card-title>
            <b-tooltip target="tooltip-username-gear" triggers="hover">
              Edit
            </b-tooltip>
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
                    :state="newUsernameState"
                  ></b-form-input>
                  <b-form-valid-feedback :state="newUsernameState">
                    Looks Good.
                  </b-form-valid-feedback>
                  <b-form-invalid-feedback :state="newUsernameState">
                    Enter at least 3 letters
                  </b-form-invalid-feedback>
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
                id="tooltip-email-gear"
                @click="editEmail"
              ></b-icon-gear-fill>
              email
            </b-card-title>
            <b-tooltip target="tooltip-email-gear" triggers="hover">
              Edit
            </b-tooltip>
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
                    :state="newEmailState"
                  ></b-form-input>
                  <b-form-valid-feedback :state="newEmailState">
                    Looks Good.
                  </b-form-valid-feedback>
                  <b-form-invalid-feedback :state="newEmailState">
                    Enter a valid email
                  </b-form-invalid-feedback>
                </b-form-group>
                <!-- get captcha -->
                <b-button variant="success">GET CAPTCHA</b-button>
              </b-collapse>
            </b-card-text>
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
              <b-icon-gear-fill
                id="tooltip-sex-gear"
                @click="editSex"
              ></b-icon-gear-fill>
              sex
            </b-card-title>
            <b-tooltip target="tooltip-sex-gear" triggers="hover">
              Edit
            </b-tooltip>
            <!-- edit sex -->
            <b-card-text>
              <b-collapse
                id="collapse-sex"
                v-model="editSexVisible"
                class="mt-2"
              >
                <b-form-group
                  id="input-group-sex"
                  label="New Sex:"
                  label-for="input-sex"
                  description=""
                >
                  <b-form-input
                    id="input-sex"
                    v-model="form.sex"
                    required
                    placeholder="Enter New Sex"
                  ></b-form-input>
                </b-form-group>
                <!-- submit -->
                <b-button variant="success">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
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
              <b-icon-gear-fill
                id="tooltip-birthday-gear"
                @click="editBirthday"
              ></b-icon-gear-fill>
              birthday
            </b-card-title>
            <b-tooltip target="tooltip-birthday-gear" triggers="hover">
              Edit
            </b-tooltip>
            <!-- edit birthday -->
            <b-card-text>
              <b-collapse
                id="collapse-birthday"
                v-model="editBirthdayVisible"
                class="mt-2"
              >
                <label for="birthday-datepicker">Choose a date</label>
                <b-form-datepicker
                  id="birthday-datepicker"
                  v-model="form.birthday"
                  class="mb-2"
                ></b-form-datepicker>
                <!-- submit -->
                <b-button variant="success">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
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
              <b-icon-gear-fill
                id="tooltip-description-gear"
                @click="editDescription"
              ></b-icon-gear-fill>
              description
            </b-card-title>
            <b-tooltip target="tooltip-description-gear" triggers="hover">
              Edit
            </b-tooltip>
            <!-- edit description -->
            <b-card-text>
              <b-collapse
                id="collapse-description"
                v-model="editDescriptionVisible"
                class="mt-2"
              >
                <b-form-group
                  id="input-group-description"
                  label="New Description:"
                  label-for="textarea-description"
                  description=""
                >
                  <b-form-textarea
                    id="textarea-description"
                    v-model="form.description"
                    required
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <!-- submit -->
                <b-button variant="success">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
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
              <b-icon-gear-fill
                id="tooltip-company-gear"
                @click="editCompany"
              ></b-icon-gear-fill>
              company
            </b-card-title>
            <b-tooltip target="tooltip-company-gear" triggers="hover">
              Edit
            </b-tooltip>
            <!-- edit company -->
            <b-card-text>
              <b-collapse
                id="collapse-company"
                v-model="editCompanyVisible"
                class="mt-2"
              >
                <b-form-group
                  id="input-group-company"
                  label="New Company:"
                  label-for="input-company"
                  description=""
                >
                  <b-form-input
                    id="input-company"
                    v-model="form.company"
                    required
                    placeholder="Enter New company"
                  ></b-form-input>
                </b-form-group>
                <!-- submit -->
                <b-button variant="success">SUBMIT</b-button>
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
                id="tooltip-password-gear"
                @click="editPassword"
              ></b-icon-gear-fill>
              password
            </b-card-title>
            <b-tooltip target="tooltip-password-gear" triggers="hover">
              Edit
            </b-tooltip>
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
                    :state="originPasswordState"
                  ></b-form-input>
                  <b-form-valid-feedback :state="originPasswordState">
                    Make sure this password is your original password.
                  </b-form-valid-feedback>
                  <b-form-invalid-feedback :state="originPasswordState">
                    Enter at least 8 letters
                  </b-form-invalid-feedback>
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
                    :state="newPasswordState"
                  ></b-form-input>
                  <b-form-valid-feedback :state="newPasswordState">
                    Looks Good.
                  </b-form-valid-feedback>
                  <b-form-invalid-feedback :state="newPasswordState">
                    Enter at least 8 letters
                  </b-form-invalid-feedback>
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
                    v-model="form.confirmNewPassword"
                    required
                    type="password"
                    placeholder="Confirm New Password"
                    :state="confirmNewPasswordState"
                  ></b-form-input>
                  <b-form-valid-feedback :state="confirmNewPasswordState">
                    Looks Good.
                  </b-form-valid-feedback>
                  <b-form-invalid-feedback :state="confirmNewPasswordState">
                    Must same as the password
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-button variant="success">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
          </b-card>
          <hr class="my-4" />
          <b-button-toolbar>
            <b-button-group class="mr-3">
              <b-button variant="warning">Sign Out</b-button>
            </b-button-group>
            <b-button-group>
              <b-button variant="danger">Delete Your Account</b-button>
            </b-button-group>
          </b-button-toolbar>
          <b-alert class="mt-4" show variant="danger"
            >Note: 請小心謹慎。</b-alert
          >
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      editUsernameVisible: false,
      editEmailVisible: false,
      editSexVisible: false,
      editBirthdayVisible: false,
      editDescriptionVisible: false,
      editCompanyVisible: false,
      editPasswordVisible: false,
      form: {
        username: "",
        email: "",
        sex: "",
        birthday: "",
        description: "",
        company: "",
        originPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
    };
  },
  methods: {
    editUsername() {
      this.editUsernameVisible = !this.editUsernameVisible;
      if (this.editUsernameVisible === false) {
        this.form.username = "";
      }
    },
    editEmail() {
      this.editEmailVisible = !this.editEmailVisible;
      if (this.editEmailVisible === false) {
        this.form.email = "";
      }
    },
    editSex() {
      this.editSexVisible = !this.editSexVisible;
      if (this.editSexVisible === false) {
        this.form.sex = "";
      }
    },
    editBirthday() {
      this.editBirthdayVisible = !this.editBirthdayVisible;
      if (this.editBirthdayVisible === false) {
        this.form.birthday = "";
      }
    },
    editDescription() {
      this.editDescriptionVisible = !this.editDescriptionVisible;
      if (this.editDescriptionVisible === false) {
        this.form.description = "";
      }
    },
    editCompany() {
      this.editCompanyVisible = !this.editCompanyVisible;
      if (this.editCompanyVisible === false) {
        this.form.company = "";
      }
    },
    editPassword() {
      this.editPasswordVisible = !this.editPasswordVisible;
      if (this.editPasswordVisible === false) {
        this.form.originPassword = "";
        this.form.newPassword = "";
        this.form.comfirmNewPassword = "";
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      baseURL: (state) => {
        return state.api.baseURL;
      },
      signUpURL: (state) => {
        return state.api.signUpURL;
      },
    }),
    newUsernameState() {
      return this.form.username.length > 2 ? true : false;
    },
    newEmailState() {
      return this.validateEmail(this.form.email);
    },
    originPasswordState() {
      return this.form.originPassword.length > 7 ? true : false;
    },
    newPasswordState() {
      return this.form.newPassword.length > 7 ? true : false;
    },
    confirmNewPasswordState() {
      return (
        this.form.confirmNewPassword.length > 7 &&
        this.form.confirmNewPassword === this.form.newPassword
      );
    },
  },
};
</script>
<style>
#avatar-edit {
  position: relative;
  top: -60px;
}
</style>
