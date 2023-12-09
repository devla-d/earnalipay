<template>
    <!--[referal panel]--> 
    <div :class="['referral-dialog', active ? 'active' : '']">
      <div class="ref-dialog-content">
        <div class="ref-icon animate" style="display: block">
          <i class="fas fa-check"></i>
        </div>
        <h2>Your referrals!</h2>
        <ul class="ref-menu">
          <li>
            <h3>No of Referrals</h3>
            <p>{{user.referral}}</p>
          </li>
          <li>
            <h3>Referral Bonus</h3>
            <p>${{user.referral_bonus}}</p>
          </li>
          <li>
            <label for="">Referral code</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="uk-input ref-link"
                :value="user.username"
                id="myInput"
                disabled
              />

              <div class="mytooltip input-group-append">
                <button
                  type="button"
                  style="height: 43px"
                  class="uk-button-primary"
                  @click="copyFunction('myInput')"
                >
                  <span class="txt">Copy</span>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div class="close-ref-dialog">
          <i @click="$emit('close-modal')" class="fas fa-times"></i>
        </div>
      </div>
    </div>
    <!--[referral panel]-->
</template>

<script>
import initialize from "@/services";
const toastr = new window.Toastr();

export default {
    name : 'RefModal',
    props:{
        active:Boolean
    },
    data(){
        return{
              user: [],
        }
    },
    mounted(){
        initialize.setupajax(this.$store.state.token);
   
        window.$.get("https://earnalipay.org/withdrawal", (data) => {
            this.user = data;
        });
    },
    methods:{
      
            copyFunction(input) {
                var copyText = document.getElementById(input);
                copyText.select();
                copyText.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(copyText.value);

               
                  toastr.success("Copied");
            }
    },

}
</script>

<style scoped>

.referral-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: none;
  transition: all 0.5s ease-in-out;
  /*make it smooth*/
}

.referral-dialog.active {
  display: block;
}

.referral-dialog .ref-dialog-content {
  background-color: #fff;
  margin: 0 auto;
  display: block;
  top: 50%;
  position: absolute;
  left: 50%;
  background: #fff;
  border-radius: 0px;
  color: gray !important;
  transform: translate(-50%, -50%);
  height: 448px;
  width: 300px;
  padding: 17px;
  transition: all 0.5s ease-in-out;
  z-index: 9999;
  /*make it smooth*/
}

.ref-icon {
  width: 80px;
  height: 80px;
  border: 4px solid gray;
  border-color: #4cae4c;
  border-radius: 50%;
  margin: 20px auto;
  position: relative;
  box-sizing: content-box;
}

.ref-icon i {
  padding: 18px;
  font-size: 48px;
  color: #4cae4c;
}

.ref-dialog-content h2 {
  padding: 20px 0;
  font-family: "PFBeauSansPro-Bold";
  font-size: 22px;
  text-transform: uppercase;
  color: #323232;
  text-align: center;
}

ul.ref-menu li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

ul.ref-menu li:nth-child(3) {
  display: block;
}

ul.ref-menu li h3 {
  font-size: 18px;
}

ul.ref-menu li p {
  margin: 0;
}

.ref-dialog-content .uk-input {
  width: 79%;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.close-ref-dialog {
    position: absolute;
    right: 50%;
        bottom: -26px;
    background-color: #fff;
    height: 30px;
    width: 30px;
    box-shadow: rgb(58 59 69 / 15%) 0px 0.15rem 1.75rem 0px !important;
    border-radius: 50px;
    padding: 7px 10px;
}
</style>