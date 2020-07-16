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
              {{ user.username }}
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
                <b-button variant="success" @click="usernameVerifyRequest"
                  >SUBMIT</b-button
                >
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
              {{ user.email }}
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
                <!--<b-button variant="success" @click="openVerifyEmailModal"
                  >GET CAPTCHA</b-button
                >-->
                <b-button variant="success" @click="updateEmailRequest"
                  >SUBMIT</b-button
                >
              </b-collapse>
            </b-card-text>
          </b-card>
          <!-- verify email modal -->
          <b-modal
            v-model="verifyEmailModal"
            no-close-on-backdrop
            no-close-on-esc
            centered
            title="Verify Captcha"
            header-bg-variant="dark"
            header-text-variant="light"
          >
            <!-- captcha -->
            <b-form-group
              id="input-group-1"
              label="Captcha"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="user.captcha"
                required
                placeholder="Enter Captcha"
              ></b-form-input>
            </b-form-group>
            <b-button class="sign-btn" pill block variant="success"
              >VERIFY</b-button
            >
            <template v-slot:modal-footer="{ ok, cancel, hide }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
              </b-button>
            </template>
          </b-modal>
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
              {{ user.sex }}
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
                <b-button variant="success" @click="updateSexRequest">SUBMIT</b-button>
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
              {{ user.birthday }}
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
                <b-button variant="success" @click="updateBirthdayRequest">SUBMIT</b-button>
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
              {{ user.description }}
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
                <b-button variant="success" @click="updateDescriptionRequest">SUBMIT</b-button>
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
              {{ user.company }}
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
                <b-button variant="success" @click="updateCompanyRequest">SUBMIT</b-button>
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
              {{ user.password }}
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
                <!--<b-form-group
                  id="input-group-origin-password"
                  label="Origin Password:"
                  label-for="input-origin-password"
                  description=""
                >
                  <b-form-input
                    id="iinput-origin-password"
                    v-model="user.originPassword"
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
                </b-form-group>-->
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
                <b-button variant="success" @click="updatePasswordRequest">SUBMIT</b-button>
              </b-collapse>
            </b-card-text>
          </b-card>
          <hr class="my-4" />
          <b-button-toolbar>
            <b-button-group class="mr-3">
              <b-button variant="warning" @click="updateSignOutModal(true)"
                >Sign Out</b-button
              >
            </b-button-group>
            <b-button-group>
              <b-button variant="danger" @click="openDeleteAccountModal"
                >Delete Your Account</b-button
              >
            </b-button-group>
          </b-button-toolbar>
          <b-alert class="mt-4" show variant="danger"
            >Note: 請小心謹慎。</b-alert
          >
        </b-container>
      </b-col>
    </b-row>
    <!-- update fail modal -->
    <b-modal
      v-model="updateFailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Update Fail"
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <h4>
        <strong>{{ updateFailMsg }}</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
    <!-- update success modal -->
    <b-modal
      v-model="updateSuccessModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Update Success"
      header-bg-variant="success"
      header-text-variant="light"
      body-text-variant="success"
    >
      <h4>
        <strong>{{ updateSuccessMsg }}</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
    <!-- delete account modal -->
    <b-modal
      v-model="deleteAccountModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      title="Delete Account"
      header-bg-variant="danger"
      header-text-variant="light"
      body-text-variant="danger"
    >
      <h4>
        <strong>Are you sure you want to delete this account?</strong>
      </h4>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="success" @click="cancel()">
          Cancel
        </b-button>
        <b-button variant="danger" @click="deleteAccount">
          Delete Account
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
// import VueX
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      // setting visible
      editUsernameVisible: false,
      editEmailVisible: false,
      editSexVisible: false,
      editBirthdayVisible: false,
      editDescriptionVisible: false,
      editCompanyVisible: false,
      editPasswordVisible: false,
      // here user data
      user: {
        username: "",
        email: "",
        description: "",
        birthday: "",
        sex: "",
        company: "",
        password: "******",
      },
      // update data
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
        captcha: "",
      },
      // new data input error
      newDataError: {
        username: true,
        email: true,
        originPassword: true,
        newPassword: true,
        confirmNewPassword: true,
        captcha: true,
      },
      // verify email dialog
      verifyEmailModal: false,
      // update modal and msg
      updateFailModal: false,
      updateFailMsg: "fail",
      updateSuccessModal: false,
      updateSuccessMsg: "success",
      // delete account modal
      deleteAccountModal: false,
    };
  },
  created() {
    console.log("created");
    this.getUserDataRequest();
  },
  methods: {
    ...mapMutations({
      updateUsername: "updateUsername",
      updateIsSignIn: "updateIsSignIn",
      updateSignOutModal: "updateSignOutModal",
      updateTokenVerifyFailModal: "updateTokenVerifyFailModal",
    }),
    openDeleteAccountModal() {
      this.deleteAccountModal = true;
    },
    async deleteAccount() {
      console.log("delete account");
    },

    // async updateUser() {
    //   console.log(this.user);
    //   axios({
    //     method: "post",
    //     url: this.springBaseURL + this.updateUserUrl,
    //     headers: {
    //       token: Vue.localStorage.get("jwt_token"),
    //     },
    //     data: {
    //       birthday: this.user.birthday,
    //       sex: this.user.sex,
    //       description: this.user.description,
    //       company: this.user.company,
    //       email: this.user.email,
    //       username: this.user.username,
    //       password: this.user.password,
    //     },
    //   })
    //     .then((response) => {
    //       console.log(response.data);
    //       // token verify fail
    //       if (response.data.code === "500000") {
    //         this.updateTokenVerifyFailModal(true);
    //       } else {
    //         if (response.data.status === true) {
    //           Vue.localStorage.set("user_name", this.user.username);
    //           this.updateUsername(this.user.username);
    //           this.updateSuccessModal = true;
    //         } else {
    //           this.updateFailModal = true;
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // get user's data
    async getUserDataRequest() {
      console.log("getUserDataRequest");
      axios({
        method: "post",
        url: this.springBaseURL + this.getUserDataURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          username: Vue.localStorage.get("user_name"),
        },
      })
        .then((response) => {
          console.log(response.data);
          // token verify fail
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === true) {
              console.log();
              this.user.username = response.data.data.username;
              this.user.email = response.data.data.email;
              this.user.description = response.data.data.description;
              this.user.sex = response.data.data.sex;
              this.user.company = response.data.data.company;
              this.user.birthday = response.data.data.birthday;
            } else {
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // avoid same username
    usernameVerifyRequest() {
      if (!this.newDataError.username) {
        axios({
          method: "post",
          url: this.springBaseURL + this.usernameVerifyURL,
          headers: {
            token: Vue.localStorage.get("jwt_token"),
          },
          data: {
            username: this.form.username,
          },
        })
          .then((response) => {
            console.log(response.data);
            if (response.data.code === "500000") {
              this.updateTokenVerifyFailModal(true);
            } else {
              if (response.data.status === false) {
                this.updateFailModal = true;
                this.updateFailMsg =
                  "This username has existed, please change one.";
              } else {
                this.updateUsernameRequest();
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async updateUsernameRequest() {
      if (!this.newDataError.username) {
        axios({
          method: "post",
          url: this.springBaseURL + this.updateUsernameURL,
          headers: {
            token: Vue.localStorage.get("jwt_token"),
          },
          data: {
            userid: Vue.localStorage.get("user_id"),
            birthday: this.user.birthday,
            sex: this.user.sex,
            description: this.user.description,
            company: this.user.company,
            email: this.user.email,
            username: this.form.username,
            // password: this.user.password,
          },
        })
          .then((response) => {
            console.log(response.data);
            if (response.data.code === "500000") {
              this.updateTokenVerifyFailModal(true);
            } else {
              if (response.data.status === false) {
                this.updateFailModal = true;
                this.updateFailMsg = "Update username fail.";
              } else {
                Vue.localStorage.set("user_name", this.form.username);
                this.updateUsername(this.form.username);
                this.updateSuccessModal = true;
                this.updateSuccessMsg = "Update username successfully.";
                this.editUsername();
                this.getUserDataRequest();
                // this.$router.push("/" + Vue.localStorage.get("user_name") + "/admin/account");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async updateEmailRequest() {
      if (!this.newDataError.email) {
        axios({
          method: "post",
          url: this.springBaseURL + this.updateEmailURL,
          headers: {
            token: Vue.localStorage.get("jwt_token"),
          },
          data: {
            userid: Vue.localStorage.get("user_id"),
            birthday: this.user.birthday,
            sex: this.user.sex,
            description: this.user.description,
            company: this.user.company,
            email: this.form.email,
            username: this.user.username,
            // password: this.user.password,
          },
        })
          .then((response) => {
            console.log(response.data);
            if (response.data.code === "500000") {
              this.updateTokenVerifyFailModal(true);
            } else {
              if (response.data.status === false) {
                this.updateFailModal = true;
                this.updateFailMsg = "update email fail.";
              } else {
                this.updateSuccessModal = true;
                this.updateSuccessMsg = "Update email successfully.";
                this.editEmail();
                this.getUserDataRequest();
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async updateDescriptionRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.updateDescriptionURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          userid: Vue.localStorage.get("user_id"),
          birthday: this.user.birthday,
          sex: this.user.sex,
          description: this.form.description,
          company: this.user.company,
          email: this.user.email,
          username: this.user.username,
          // password: this.user.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === false) {
              this.updateFailModal = true;
              this.updateFailMsg = "Update description fail.";
            } else {
              this.updateSuccessModal = true;
              this.updateSuccessMsg = "Update description successfully.";
              this.editDescription();
              this.getUserDataRequest();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateSexRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.updateSexURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          userid: Vue.localStorage.get("user_id"),
          birthday: this.user.birthday,
          sex: this.form.sex,
          description: this.user.description,
          company: this.user.company,
          email: this.user.email,
          username: this.user.username,
          // password: this.user.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === false) {
              this.updateFailModal = true;
              this.updateFailMsg = "Update sex fail.";
            } else {
              this.updateSuccessModal = true;
              this.updateSuccessMsg = "Update sex successfully.";
              this.editSex();
              this.getUserDataRequest();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateBirthdayRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.updateBirthdayURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          userid: Vue.localStorage.get("user_id"),
          birthday: this.form.birthday,
          sex: this.user.sex,
          description: this.user.description,
          company: this.user.company,
          email: this.user.email,
          username: this.user.username,
          // password: this.user.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === false) {
              this.updateFailModal = true;
              this.updateFailMsg = "Update birthday fail.";
            } else {
              this.updateSuccessModal = true;
              this.updateSuccessMsg = "Update birthday successfully.";
              this.editBirthday();
              this.getUserDataRequest();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateCompanyRequest() {
      axios({
        method: "post",
        url: this.springBaseURL + this.updateCompanyURL,
        headers: {
          token: Vue.localStorage.get("jwt_token"),
        },
        data: {
          userid: Vue.localStorage.get("user_id"),
          birthday: this.user.birthday,
          sex: this.user.sex,
          description: this.user.description,
          company: this.form.company,
          email: this.user.email,
          username: this.user.username,
          // password: this.user.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.code === "500000") {
            this.updateTokenVerifyFailModal(true);
          } else {
            if (response.data.status === false) {
              this.updateFailModal = true;
              this.updateFailMsg = "Update company fail.";
            } else {
              this.updateSuccessModal = true;
              this.updateSuccessMsg = "Update company successfully.";
              this.editCompany();
              this.getUserDataRequest();
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updatePasswordRequest() {
      if (
        !this.newDataError.newPassword &&
        !this.newDataError.confirmNewPassword
      ) {
        axios({
          method: "post",
          url: this.springBaseURL + this.updatePasswordURL,
          headers: {
            token: Vue.localStorage.get("jwt_token"),
          },
          data: {
            userid: Vue.localStorage.get("user_id"),
            birthday: this.user.birthday,
            sex: this.user.sex,
            description: this.user.description,
            company: this.user.company,
            email: this.user.email,
            username: this.user.username,
            password: this.form.newPassword,
          },
        })
          .then((response) => {
            console.log(response.data);
            if (response.data.code === "500000") {
              this.updateTokenVerifyFailModal(true);
            } else {
              if (response.data.status === false) {
                this.updateFailModal = true;
                this.updateFailMsg = "Update password fail.";
              } else {
                this.updateSuccessModal = true;
                this.updateSuccessMsg = "Update password successfully.";
                this.editPassword();
                this.getUserDataRequest();
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    // edit control func
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
        this.form.confirmNewPassword = "";
      }
    },
    // validate email
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    openVerifyEmailModal() {
      this.verifyEmailModal = true;
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      springBaseURL: (state) => {
        return state.api.springBaseURL;
      },
      updateUserUrl: (state) => {
        return state.api.updateUserUrl;
      },
      getUserDataURL: (state) => {
        return state.api.getUserDataURL;
      },
      tokenVerifyFailModal: (state) => {
        return state.user.tokenVerifyFailModal;
      },
      usernameVerifyURL: (state) => {
        return state.api.usernameVerifyURL;
      },
      updateUsernameURL: (state) => {
        return state.api.updateUsernameURL;
      },
      updateEmailURL: (state) => {
        return state.api.updateEmailURL;
      },
      updateSexURL: (state) => {
        return state.api.updateSexURL;
      },
      updateCompanyURL: (state) => {
        return state.api.updateCompanyURL;
      },
      updateBirthdayURL: (state) => {
        return state.api.updateBirthdayURL;
      },
      updateDescriptionURL: (state) => {
        return state.api.updateDescriptionURL;
      },
      updatePasswordURL: (state) => {
        return state.api.updatePasswordURL;
      },
    }),
    // feedback validate
    newUsernameState() {
      this.newDataError.username = this.form.username.length > 2 ? false : true;
      return !this.newDataError.username;
    },
    newEmailState() {
      this.newDataError.email = !this.validateEmail(this.form.email);
      return !this.newDataError.email;
    },
    originPasswordState() {
      this.newDataError.originPassword =
        this.form.originPassword.length > 7 ? false : true;
      return !this.newDataError.originPassword;
    },
    newPasswordState() {
      this.newDataError.newPassword =
        this.form.newPassword.length > 7 ? false : true;
      return !this.newDataError.newPassword;
    },
    confirmNewPasswordState() {
      this.newDataError.confirmNewPassword = !(
        this.form.confirmNewPassword.length > 7 &&
        this.form.confirmNewPassword === this.form.newPassword
      );
      return !this.newDataError.confirmNewPassword;
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
