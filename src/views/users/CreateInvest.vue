<template>
  <user-layout :isLoading="loadstat">
    <form @submit.prevent="createInvestment">
      <div class="uk-section">
        <div class="uk-container">
          <div class="uk-grid uk-flex uk-flex-center">
            <div class="uk-width-1-2@m uk-text-center">
              <h2>INVESTMENT PRICING.</h2>
              <p class="uk-text-lead">
                You can choose a plan that best suit you.
              </p>
              <i class="fas fa-chevron-down uk-text-primary"></i>
            </div>
            <div class="uk-flex"></div>

            <div class="uk-width-5-6@m">
              <div uk-slider>
                <div
                  class="uk-position-relative uk-visible-toggle"
                  tabindex="-1"
                >
                  <ul
                    class="
                      uk-slider-items
                      uk-child-width-1-2@s
                      uk-child-width-1-2@m
                      uk-grid
                    "
                  >
                    <li v-for="pack in packages" :key="pack.id">
                      <div class="in-packages">
                        <div
                          class="uk-card uk-card-default uk-box-shadow-medium"
                        >
                          <div class="uk-card-body">
                            <div class="in-package-head">
                              <div class="left">
                                <span>{{ pack.percent }}%</span>
                              </div>
                              <div class="right">
                                <div class="h3">{{ pack.name }}</div>
                                <div class="pl">
                                  After {{ pack.hours }} Hours
                                </div>
                              </div>
                            </div>
                            <div class="in-package-content">
                              <ul>
                                <li>
                                  Minimum:
                                  <span>{{ pack.min_amount }} USD</span>
                                </li>
                                <li>
                                  maxiimum:
                                  <span>{{ pack.max_amount }} USD</span>
                                </li>
                              </ul>
                            </div>

                            <div class="action">
                              <div class="radio-toolbar">
                                <input
                                  type="radio"
                                  name="package"
                                  :value="pack.id"
                                  :id="`package_` + pack.id"
                                  v-model="spackage"
                                  required
                                />
                                <label :id="`package_` + pack.id">Select</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <a
                    class="
                      uk-position-center-left uk-position-small uk-hidden-hover
                    "
                    href="#"
                    uk-slidenav-previous
                    uk-slider-item="previous"
                  ></a>
                  <a
                    class="
                      uk-position-center-right uk-position-small uk-hidden-hover
                    "
                    href="#"
                    uk-slidenav-next
                    uk-slider-item="next"
                  ></a>
                </div>

                <ul
                  class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"
                ></ul>
              </div>
            </div>
          </div>
          <div class="uk-flex uk-flex-center">
            <div class="uk-width-1-2@m uk-text-center">
              <div class="uk-margin-small uk-width-1-1 uk-inline">
                <label class="uk-form-label" for="form-stacked-text"
                  >Amount</label
                >
                <div class="uk-form-controls">
                  <input
                    type="number"
                    v-model="amount"
                    class="uk-input uk-border-rounded"
                    placeholder="Input The Amount You want to Invest"
                    required=""
                    id="id_amount"
                  />
                </div>
              </div>
              <div class="uk-margin-small uk-width-1-1">
                <button
                  class="
                    uk-button
                    uk-width-1-1
                    uk-button-primary
                    uk-border-rounded
                    uk-float-left
                    submitBtn
                  "
                  type="submit"
                  name="submit"
                >
                  <span v-if="loading"
                    ><i class="fa fa-spinner fa-spin"></i
                  ></span>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="pbd"></div>
  </user-layout>
</template>

<script>
import UserLayout from "@/layouts/UserLayout.vue";
import initialize from "@/services";
const toastr = new window.Toastr();

export default {
  name: "CreateInvest",
  components: {
    UserLayout,
  },
  data() {
    return {
      loadstat: true,
      loading: false,
      packages: [],
      spackage: "",
      amount: "",
    };
  },
  async mounted() {
    initialize.setupajax(this.$store.state.token);
    document.title = "Activate Investment";
    await window.$.get("https://earnalipay.org/packages/", (data) => {
      //console.log(data)
      this.packages = data;
    });
    this.loadstat = false;
  },
  methods: {
    createInvestment() {
      this.loading = true;
      window.$(".submitBtn").attr("disabled", "disabled");
      const formData = { pack_id: this.spackage, amount: this.amount };
      window.$.post(
        "https://earnalipay.org/create-investment/",
        formData,
        (data) => {
          console.log(data);
          if(data.msgi){
            toastr.warning(`${data.msgi}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          }else if(data.msge){
            toastr.warning(`${data.msge}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          }else{
              toastr.success(`${data.msgs}`);
              this.$router.push('/dashboard')
          }

        }
      );
    },
  },
};
</script>

<style scoped>
.pbd {
  padding-top: 40px;
  padding-bottom: 40px;
}
/* .radio-toolbar input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
    
    .radio-toolbar label {
        color: #ffffff;
        display: inline-block;
        background-color: #1d1d1d;
        ;
        padding: 5px 15px;
        font-size: 16px;
        border: 2px solid #444;
        border-radius: 5px;
    }
    
    .radio-toolbar label:hover {
        background-color: #000;
    }
     */
/* .radio-toolbar input[type="radio"]:checked+label {
        background-color: #DA5444;
        border-color: #DA5444;
    } */
.in-package-head .left {
  font-size: 53px !important;
}
.in-package-head .right .pl {
  font-size: 11px !important;
}
</style>