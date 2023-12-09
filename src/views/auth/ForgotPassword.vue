<template>
  <div class="loginpage">
    <home-layout>
      <!-- section content begin -->
      <div class="uk-section uk-padding-remove-vertical">



        <div class="logincard uk-card uk-card-body">
          <div class="">

            <h1 class="">
              Reset your account password
            </h1>
            <p class="
                        uk-text-small
                        uk-margin-remove-top
                        uk-margin-medium-bottom
                      ">
              Don't have an account?
              <router-link to="/sign-up/">Register here</router-link>
            </p>
            <!-- login form begin -->
            <form class="uk-grid uk-form" method="post" @submit.prevent="handleSubmit">
              <div class="uk-margin-small uk-width-1-1 uk-inline">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <div class="uk-form-controls">
                  <input type="email" v-model="email" class="uk-input uk-border-rounded" placeholder="Email"
                    maxlength="80" required="" id="id_email" />
                  <span class="uk-form-msg uk-text-danger"></span>
                </div>
              </div>



              <div class="uk-margin-top uk-width-1-1">
                <button class="
                            uk-button
                            uk-width-1-1
                            uk-button-primary
                            uk-border-rounded
                            uk-float-left
                            submitBtn
                          " type="submit" name="submit" :disabled="loading">
                  <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                  Submit
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
const toastr = new window.Toastr();

export default {
  name: "LoginView",
  components: {
    HomeLayout,
  },
  data() {
    return {
      email: "",

      loading: false,
    };
  },
  mounted() {
    document.title = "Reset Password";
  },
  methods: {
    handleSubmit() {
      this.loading = true

      window.$.post(
        "https://earnalipay.org/forgot-password/",
        { email: this.email },
        (data) => {

          if (data.msg === "SUCCESS") {
            toastr.success(`A Confirmation email has been sent to your mail box`);
          } else {
            toastr.warning(`A user with this email does not exist`);

          }
          this.loading = false
          return
        }
      );

    }
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
  min-height: 74vh;
}

.uk-card-body {
  background-color: transparent !important;
  box-shadow: 0 14px 25px rgb(0 0 0 / 16%);
  width: 500px;
  margin-top: 30px;
  margin-bottom: 30px;
}



.logincard {
  width: 500px;
  /* padding: 0px 24px; */
}

/* .bigim {
  background-image: url("@/assets/images/in-signin-image.jpg");
} */
</style>

 





 