<template>
  <div class="loginpage">
    <home-layout>
      <!-- section content begin -->
      <div class="uk-section uk-padding-remove-vertical">



        <div class="logincard uk-card uk-card-body">
          <div class="">
            <!-- module logo begin -->
            <!-- <a class="uk-logo" href="/">
              <img class="in-offset-top-10" src="@/assets/images/logoii.png" alt="logo" width="170" height="36"
                data-uk-img="" />
            </a> -->
            <!-- module logo begin -->
            <h1 class="">
              Log into your account
            </h1>
            <h4 class="
                        uk-text-small
                        uk-margin-remove-top
                        uk-margin-medium-bottom
                      ">
              Don't have an account?
              <router-link to="/sign-up/">Register here</router-link>
            </h4>
            <!-- login form begin -->
            <form @submit.prevent="signIN" class="uk-grid uk-form" method="post">
              <div class="uk-margin-small uk-width-1-1 uk-inline">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <div class="uk-form-controls">
                  <input type="email" v-model="email" class="uk-input uk-border-rounded" placeholder="Email"
                    maxlength="80" required="" id="id_email" />
                  <span class="uk-form-msg uk-text-danger"></span>
                </div>
              </div>
              <div class="uk-margin-small uk-width-1-1 uk-inline">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <div class="uk-form-controls">
                  <input type="password" v-model="password" placeholder="Password" class="uk-input uk-border-rounded"
                    maxlength="30" minlength="6" required="" id="id_password" />
                    <i class="fas fa-eye-slash togglePassword" id="togglePassword"></i>
                  <span class="uk-form-msg uk-text-danger"></span>
                </div>
              </div>
              <div class="uk-margin-small uk-width-auto uk-text-small">
                <label><input class="uk-checkbox uk-border-rounded" type="checkbox" />
                  Remember me</label>
              </div>
              <div class="uk-margin-small uk-width-expand uk-text-small">
                <label class="uk-align-right">
                  <router-link class="uk-link-reset" to="/forgot-password/">Forgot password?</router-link>
                </label>
              </div>
              <div class="uk-margin-small uk-width-1-1">
                <button class="
                            uk-button
                            uk-width-1-1
                            uk-button-primary
                            uk-border-rounded
                            uk-float-left
                            submitBtn
                          " type="submit" name="submit">
                  <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>



      </div>
      <!-- section content end -->
    </home-layout>
  </div>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import initialize from "@/services"
const toastr = new window.Toastr();

export default {
  name: "LoginView",
  components: {
    HomeLayout,
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  mounted() {
    document.title = "Login";
    this.togglePassword();
  },
  methods: {
    signIN() {
      this.loading = true;

      window.$(".submitBtn").attr("disabled", "disabled");
      window.$.post(
        "https://earnalipay.org/login/",
        { email: this.email, password: this.password },
        (data) => {
          //console.log(data);
          if (data.erro) {
            toastr.warning(`${data.erro}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          } else {
            this.$store.commit("setToken", data.token, data.user);
            initialize.setupajax(data.token)

            this.$router.push("/dashboard");
          }
        }
      );
    },
    togglePassword() {
      window.$(".togglePassword").click(function () {
        if (this.is_visible == false) {
          window.$("#id_password").attr("type", "text");

          window.$(this).removeClass("fa-eye-slash");
          window.$(this).addClass("fa-eye");
          this.is_visible = true;
        } else {
          window.$("#id_password").attr("type", "password");
          window.$(this).removeClass("fa-eye");
          window.$(this).addClass("fa-eye-slash");
          this.is_visible = false;
        }
      });
    },
  },
};
</script>

<style scoped>
@import "@/assets/home.css";

.uk-section.uk-padding-remove-vertical {
  background-position: 50% 0 !important;
  background-repeat: no-repeat !important;
  background-image: url("@/assets/images/bg_main.png") !important;
  background-size: cover !important;
  z-index: 2 !important;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
}

.uk-card-body {
  background-color: transparent !important;
  box-shadow: 0 14px 25px rgb(0 0 0 / 16%);
  width: 500px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.togglePassword {
  position: absolute;

  top: 36px;

  right: 10px;
}


.logincard {
  width: 500px;
  /* padding: 0px 24px; */
}

/* .bigim {
  background-image: url("@/assets/images/in-signin-image.jpg");
} */
</style>

 





 