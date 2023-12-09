<template>
  <div class="loginpage">
    <home-layout>
      <!-- section content begin -->
      <div class="uk-section uk-padding-remove-vertical">



        <div class="logincard uk-card uk-card-body">
          <div class="">
             
            <h1 class="">
              Login user account
            </h1>
            
            <!-- login form begin -->
            <form class="uk-text-center" method="post">

            <span v-if="loading" class="f20"><i class="fa fa-spinner fa-spin"></i></span>
           
              <h4>Please Wait</h4>


              
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
//import initialize from "@/services"
//const toastr = new window.Toastr();

export default {
  name: "LoginView",
  components: {
    HomeLayout,
  },
  data() {
    return {
      email: "",

      loading: true,
    };
  },
  mounted() {
    document.title = "login user account";
    console.log(this.$route.query.key)
    if(!this.$route.query.key) console.log('no key') //this.$router.push("/login");
    if (localStorage.getItem('token'))   localStorage.removeItem('token');
    this.$store.commit("setToken", this.$route.query.key, {});
    this.$router.push("/dashboard");
  },
  methods: {

  },
};
</script>

<style scoped>
@import "@/assets/home.css";

 

.f20 i{font-size: 90px;     margin-bottom: 20px;}

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

 





 