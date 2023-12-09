<template>
  <div class="loginpage">
    <home-layout>
      <!-- section content begin -->
      <section id="regsection">

        <div class="regBox">
          <div class="uk-card uk-card-body">
            <div class="in-padding-horizontal@s">
              <!-- module logo begin -->
              <!-- <a class="uk-logo" href="/">
                    <img class="in-offset-top-10" src="@/assets/images/logoii.png" alt="logo" width="170" height="36"
                      data-uk-img="" />
                  </a> -->
              <!-- module logo begin -->
              <h1 class="">
                Create an account
              </h1>
              <h4 class="
                      uk-text-small uk-margin-remove-top uk-margin-medium-bottom
                    ">
                Already have an account?
                <router-link to="/login">Sign in</router-link>
              </h4>
              <!-- login form begin -->
              <form @submit.prevent="validateForm" class="uk-grid uk-form" method="post">
                <!--first step-->
                <div class="form-step">
                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Full name</label>
                    <div class="uk-form-controls">
                      <input type="text" v-model="full_name" class="uk-input uk-border-rounded" placeholder="Full name"
                        maxlength="80" required="" id="id_full_name" />
                      <span class="uk-form-msg uk-text-danger" id="id_full_name_msg"></span>
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Email</label>
                    <div class="uk-form-controls">
                      <input type="email" v-model="email" class="uk-input uk-border-rounded" placeholder="Email"
                        maxlength="80" required="" id="id_email" />
                      <span class="uk-form-msg uk-text-danger" id="id_email_msg"></span>
                    </div>
                  </div>

                  <!-- <div class="uk-margin-small uk-width-1-1 uk-inline">
                        <label class="uk-form-label" for="form-stacked-text"
                          >Username</label
                        >
                        <div class="uk-form-controls">
                          <input
                            type="text"
                            v-model="username"
                            placeholder="username"
                            class="uk-input uk-border-rounded"
                            minlength="4"
                            maxlength="30"
                            required=""
                            id="id_username"
                          /> @focus="showPasswordmsg()"@blur="hidePaswordmsg()"
                          <span
                            class="uk-form-msg uk-text-danger"
                            id="id_username_msg"
                          ></span>
                        </div>
                      </div> -->

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Password</label>
                    <div class="uk-form-controls">
                      <input type="password" v-model="password" class="uk-input uk-border-rounded"
                        placeholder="Password" minlength="8" maxlength="10" required="" id="id_password" />
                      <i class="fas fa-eye-slash togglePassword" id="togglePassword"></i>
                      <span class="uk-form-msg uk-text-danger" id="id_password_msg"></span>
                      <small class="uk-form-msg uk-text-danger" id="pas_strenght" style="display: none">
                        Must contain at least one number and one uppercase
                        and lowercase letter, and at least 6 or more
                        characters with at least one special characters
                      </small>
                    </div>
                  </div>
                </div>
                <!--second step-->
                <div class="form-step">
                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Phone</label>
                    <div class="uk-form-controls">
                      <input type="tel" v-model="phone" class="uk-input uk-border-rounded" placeholder="Phone"
                        maxlength="80" required="" id="id_phone" />
                      <span class="uk-form-msg uk-text-danger" id="id_phone_msg"></span>
                    </div>
                  </div>






                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Referral code(optional)</label>
                    <div class="uk-form-controls">
                      <input type="text" placeholder="referral code(optional)" class="uk-input uk-border-rounded"
                        maxlength="30" v-model="ref_code" id="id_ref_code" />
                      <span class="uk-form-msg uk-text-danger" id="id_ref_code_msg"></span>
                    </div>
                  </div>

                </div>


                <!--fourth step-->
                <div class="form-step">
                  <h4 id="paytxt">Payment methods</h4>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Perfect Money</label>
                    <div class="uk-form-controls">
                      <input type="text" v-model="perfect_money_id" placeholder="Perfect Money"
                        class="uk-input uk-border-rounded" maxlength="30" id="id_perfect_money_id" />
                      <span class="uk-form-msg uk-text-danger" id="id_perfect_money_id_msg"></span>
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Bitcoin address</label>
                    <div class="uk-form-controls">
                      <input type="text" v-model="btc_id" class="uk-input uk-border-rounded"
                        placeholder="Bitcoin Address" maxlength="80" id="id_btc" />
                      <span class="uk-form-msg uk-text-danger" id="id_btc_msg"></span>
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">USDT address</label>
                    <div class="uk-form-controls">
                      <input type="text" v-model="usdt_id" placeholder="Usdt address" class="uk-input uk-border-rounded"
                        maxlength="30" id="id_usdt_id" />
                      <span class="uk-form-msg uk-text-danger" id="id_usdt_msg"></span>
                    </div>
                  </div>
                </div>

                <div class="uk-margin-top uk-width-1-1">
                  <button class="
                          uk-button
                          uk-width-1-1
                          uk-button-primary
                          uk-border-rounded
                          <!-- uk-float-left -->
                          submitBtn
                        " type="submit">
                    <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>




      </section>

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
      currentTab: 0,
      full_name: "",
      // username: "",
      email: "",
      // zipcode: "",
      // address: "",
      // city: "",
      // state: "",
      // date_of_birth: "",
      phone: "",
      // country_of_residence: "",
      // citizenship: "",
      btc_id: "",
      usdt_id: "",
      perfect_money_id: "",
      password: "",
      is_visible: false,
      loading: false,
      ref_code: null,
    };
  },
  mounted() {
    document.title = "Sign Up";
    // window.$('#id_date_of_birth').addClass('kk');

    this.togglePassword();
  },
  methods: {
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

    hidePaswordmsg() {
      document.getElementById("pas_strenght").style.display = "none";
    },
    showPasswordmsg() {
      document.getElementById("pas_strenght").style.display = "block";
    },

    validateForm() {
      const formdata = {
        full_name: this.full_name,
        // username: this.username,
        email: this.email,
        // zipcode: this.zipcode,
        // address: this.address,
        // city: this.city,
        // state: this.state,
        // date_of_birth: this.date_of_birth,
        phone: this.phone,
        // country_of_residence: this.country_of_residence,
        // citizenship: this.citizenship,
        btc_id: this.btc_id,
        usdt_id: this.usdt_id,
        perfect_money_id: this.perfect_money_id,
        password: this.password,
        ref_code: this.ref_code
      };

      // var valid = false;

      // var passw =
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

      // if (this.password.match(passw)) {
      //   document.getElementById("pas_strenght").innerHTML = "";

      //   valid = true;
      // } else {
      //   document.getElementById("pas_strenght").style.display = "block";
      //   document.getElementById("pas_strenght").innerHTML =
      //     " Must contain at least  one number and one uppercase and lowercase letter, and  at least 6 or more characters with at least one special characters";
      //   valid = false;
      // }

      // if (valid == false) {
      //   toastr.warning("Form is invalid");
      // } else {
      var rat_e = window.stringSimilarity.compareTwoStrings(
        `${this.password}`,
        `${this.email}`
      );
      // console.log(rat_e);

      if (rat_e >= 0.4) {
        toastr.warning("Password too similar to email");

        return false;
      } else {
        this.loading = true;

        window.$(".submitBtn").attr("disabled", "disabled");

        window.$.post("https://earnalipay.org/register/", formdata, (data) => {
          //console.log(data);
          if (data.erro) {
            toastr.warning(`${data.erro}`);
            this.loading = false
            window.$(".submitBtn").removeAttr("disabled");
          } else {
            toastr.success(
              "Account has been created you can now login"
            );
            this.$router.push("/login/");
          }
        });

      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/home.css";

#regsection {
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

input#id_password {
  position: relative;
}


h4#paytxt {
  margin: 0;
  margin-top: 10px;
}

.togglePassword {
  position: absolute;

  top: 36px;

  right: 10px;
}

.uk-form-icon {
  top: -26px;
}

.uk-card-body {
  background-color: #fff;
  box-shadow: 0 14px 25px rgb(0 0 0 / 16%);
  width: 500px;
}

/* 
 .form-step {
    display: none;
}

.step {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbbbbb;
    border: none;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;
}

.step.active {
    opacity: 1;
}
 */

/* Mark the steps that are finished and valid: */

.step.finish {
  background-color: #04aa6d;
}

button#nextBtn {
  float: right;
}

button#prevBtn {
  margin-right: 25px;
  float: left;
}

@media (max-width: 789px) {
  #stepbtn {
    margin-top: 30px;
  }

  .uk-card-body {
    padding: 30px 0px !important;
  }
}
</style>

 





 
