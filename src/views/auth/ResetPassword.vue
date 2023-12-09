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
                                <label class="uk-form-label" for="form-stacked-text">New Password</label>
                                <div class="uk-form-controls">
                                    <input type="password" v-model="newpassword" class="uk-input uk-border-rounded"
                                        placeholder="Password" minlength="8" maxlength="10" required=""
                                        id="id_newpassword" />

                                    <span class="uk-form-msg uk-text-danger" id="id_newpassword_msg"></span>
                                    <small class="uk-form-msg uk-text-danger" id="pas_strenght" style="display: none">
                                        Must contain at least one number and one uppercase
                                        and lowercase letter, and at least 6 or more
                                        characters with at least one special characters
                                    </small>
                                </div>
                            </div>


                            <div class="uk-margin-small uk-width-1-1 uk-inline">
                                <label class="uk-form-label" for="form-stacked-text">Confirm New Password</label>
                                <div class="uk-form-controls">
                                    <input type="password" v-model="confirmpassword" class="uk-input uk-border-rounded"
                                        placeholder="Confirm new Password" minlength="8" maxlength="10" required=""
                                        id="id_cnewpassword" />

                                    <span class="uk-form-msg uk-text-danger" id="id_cnewpassword_msg"></span>
                                    <small class="uk-form-msg uk-text-danger" id="pas_strenght" style="display: none">
                                        Must contain at least one number and one uppercase
                                        and lowercase letter, and at least 6 or more
                                        characters with at least one special characters
                                    </small>
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
            newpassword: "",
            confirmpassword: "",
            is_visible: false,
            user: {},


            loading: false,
        };
    },
    mounted() {
        this.loading = true
        document.title = "Reset Password";
        const uid = this.$route.query.uid
        const token = this.$route.query.token
        if (!uid && !token) {
            toastr.warning(`Link is invalid`);
            this.$router.push("/login")
        } else {
            window.$.get(`https://earnalipay.org/reset-password/?uid=${uid}&token=${token}`, (data) => {
                if (!data.error) {

                    this.user = data.user
                } else {
                    toastr.warning(`Link is invalid`);
                    this.$router.push("/login");

                }
            })
            this.loading = false
        }



    },
    methods: {
        handleSubmit() {
            this.loading = true
            if (this.newpassword === this.confirmpassword) {
                const form_data = { ...this.user, newpassword: this.newpassword, confirmpassword: this.confirmpassword }

                window.$.post(`https://earnalipay.org/reset-password/`, form_data, (data) => {
                    if (!data.error) {

                        toastr.success(`Password changed successful you can now login`);
                        this.$router.push("/login");
                    } else {
                        toastr.warning(`SOMETHING WENT WRONG`);


                    }

                })
            } else {
                toastr.warning(`Password dont match`);
            }
            this.loading = false
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

.togglePassword {
    position: absolute;

    top: 36px;

    right: 10px;
}


/* .bigim {
    background-image: url("@/assets/images/in-signin-image.jpg");
  } */
</style>
  
   
  
  
  
  
  
   