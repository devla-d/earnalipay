<template>
  <div class="homelayout">
    <!--Header-->

    <home-navbar></home-navbar>

    <!--Header-->

    <!--content-->
    <main class="homelayout">
      <preload-spin v-if="isLoading"></preload-spin>
      <div v-else>
        <slot />
      </div>
    </main>
    <!--content-/-->

    <!--footer-->
    <home-footer></home-footer>
    <!--footer-->
    <div class="popup">
      <i class="fa fa-check-circle" id="pop-check"></i>
      <span id="full-name">Somebody</span> from
      <span id="country-name">Algeria</span> just
      <span id="payment-action">Deposit</span> <span id="full-amount">900</span>
    </div>

  </div>
</template>

<script>
import HomeNavbar from "@/components/HomeLNavbar.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import PreloadSpin from "@/components/PreloaSpin.vue";
import mYcountries from "@/services/country";
export default {
  name: "HomeLayout",
  data() {
    return {
      isLoading: false,
      initiatedPopup: false,
      popInterval: null,
      dateInterval: null,

    };
  },
  mounted() {
    this.showRandpop();
    let tidioScript = document.createElement('script')
    tidioScript.setAttribute('src', '//code.tidio.co/4xoyo9fhuf9katplsgp00346p9zcmha7.js')
    tidioScript.setAttribute('async', '')
    document.head.appendChild(tidioScript)
  },
  unmounted() {
    clearInterval(this.popInterval)
    clearInterval(this.dateInterval)




  },
  components: {
    HomeNavbar,
    HomeFooter,
    PreloadSpin,
  },
  methods: {
    showRandpop() {
      //console.log(mYcountries);
      this.dateInterval = setInterval(function () {
        var paymentActions = ["Invested", "Withdrew", "Deposit"];
        var amount = Math.floor(Math.random() * (2000 - 50 + 1)) + 50;

        window
          .$("#payment-action")
          .text(
            paymentActions[Math.floor(Math.random() * paymentActions.length)]
          );
        window
          .$("#country-name")
          .text(
            mYcountries[Math.floor(Math.random() * mYcountries.length - 1)]
              .country
          );
        window.$("#full-amount").text("$" + amount);
        this.initiatedPopup = true;
      }, 5000);

      this.popInterval = setInterval(function () {
        window.$(".popup").fadeToggle(5000);
      }, 5000);
    },
  },
};
</script>


<style >
@import "@/assets/home.css";

/* Popup container - can be anything you want */
.popup {
  display: block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #000;
  position: fixed;
  text-align: center;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  top: 20%;
  z-index: 100;
  font-weight: bolder;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

.uk-card-default {
  background: #f2f3f5;
  color: #666;
  border: 1px solid #e8e8e8;
}

.uk-breadcrumb> :last-child>a:not([href]),
.uk-breadcrumb> :last-child>span {
  color: #fd6a4f;
}

.uk-breadcrumb> :nth-child(n + 2):not(.uk-first-column)::before {
  content: "›";
  display: inline-block;
  margin: 0 20px;
  font-size: 17px;
  color: #999;
}

.uk-text-lead {
  font-size: 1.294rem;
  line-height: 1.5;
  color: #878787;
  font-weight: 400;
}

.uk-section-muted {
  background: #e9e8f0;
}

main .uk-slideshow-items {
  min-height: 542px !important;
}

.in-packages .uk-card-default {
  background-color: #fff;
  box-shadow: 0px 0px 55px 0px rgb(0 0 0 / 15%);
}

.in-package-head {
  display: flex;
}

.in-package-head .left {
  width: 50%;
  float: left;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
}

.in-package-head .right {
  width: 50%;
  float: left;
}

.in-package-head .right .h3 {
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 30px;
}

.in-package-head .right .pl {
  color: #e04d3d;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  background: #fff;
  padding: 0 20px;
  line-height: 28px;
  display: inline-block;
  border-radius: 50px;
  box-shadow: 0 0 4px #00000038;
}

.in-package-content {
  background: gray;
  width: 100%;

  border-radius: 10px;
  padding: 32px 25px;
}

.in-package-content ul {
  padding: 0px;
}

.in-package-content ul li {
  list-style: none;
  font-size: 15px;
  padding: 5px 8px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 1px solid #fff;
}

.in-package-content ul li span {
  float: right;
}

.in-packages .action {
  padding-top: 34px;
  width: 100%;
  text-align: center;
}

/* Small Devices Potrait */

@media (max-width: 767px) {
  .in-slideshow .uk-slidenav {
    display: none;
  }

  main .uk-slideshow-items {
    min-height: 345px !important;
  }

  .in-package-head .left[data-v-9ea40744] {
    font-size: 65px;
  }

  .in-package-head .right .pl[data-v-9ea40744] {
    font-size: 11px;
  }
}

/* Extra Small Devices, Phones */

@media only screen and (max-width: 395px) {
  .in-slideshow .uk-slideshow-items p {
    margin-top: 13px;
  }

  span#date-bar {
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
