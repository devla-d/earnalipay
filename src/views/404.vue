<template>
  <div class="loginpage">
    <blank-layout>
      <!-- section content begin -->
      <div class="uk-section uk-padding-remove-vertical">



          <div class="logincard">
                  <div class="">
                    <div class="error-body uk-text-center">
                        <h1 class="error-title uk-text-danger">404</h1>
                        <h3 class="uk-text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                        <p class="uk-text-muted mt-4 mb-4">YOU SEEM TO HAVE BEEN LOST </p>
                        <a href="/" class="uk-button uk-button-danger uk-button-rounded waves-effect waves-light mb-5 uk-text-white">Back to home</a>
                    </div>
                  </div>
                </div>
         


      </div>
      <!-- section content end -->
    </blank-layout>
  </div>
</template>

<script>
import BlankLayout from "@/layouts/BlankLayout.vue";
// import initialize from "@/services"
// const toastr = new window.Toastr();

export default {
  name: "LoginView",
  components: {
    BlankLayout,
  },
  data() {
    return {
    //   email: "",
    //   password: "",
      loading: false,
    };
  },
  mounted() {
    document.title = "Page Not Found";
  },
  methods: {
     
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
  justify-content:center;
  align-items:center;
  min-height:100vh;
}
.logincard {
    width: 380px;
    padding: 0px 24px;
}

/* .bigim {
  background-image: url("@/assets/images/in-signin-image.jpg");
} */
</style>

 





 