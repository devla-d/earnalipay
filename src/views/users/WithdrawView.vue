<template>
  <user-layout :isLoading="loadstat">
    <!-- breadcrumb content begin -->
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="uk-grid">
          <div class="uk-width-1-1 in-breadcrumb">
            <ul class="uk-breadcrumb uk-float-right">
              <li><a href="/">Home</a></li>
              <li><span>Withdraw funds</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumb content end -->

    <div class="uk-section">
      <div class="uk-container">
        <div class="depo-box">
          <div>
            <p>
              Enter the amount you want to withdwral, Current Balance : ${{
                  user.balance.toFixed(2)
              }}
            </p>

            <ul class="uk-flex-center uk-tab" data-uk-tab="{connect:'#my-withdrawal'}">
              <li><a href="">Details</a></li>
              <li><a href="">Bank Account</a></li>
            </ul>
            <ul id="my-withdrawal" class="uk-switcher uk-margin">
              <li>
                <a href="#" id="autoplayer" data-uk-switcher-item="next"></a>
                <form @submit.prevent="createWithdrawal">


                  <div class="uk-margin-small uk-width-1-1 uk-inline ">
                    <label>Select a method to recieve money</label>
                    <div class="paymethod">
                      <div class="radio-toolbar">
                        <input type="radio" name="mode" value="Perfect money" id="mode_perfect_money"
                          v-model="paymethod" required />
                        <label for="mode_perfect_money"><img src="@/assets/images/bitcoin.svg" alt="method icon"
                            width="28px" />Perfect Money</label>
                      </div>
                      <div class="radio-toolbar">
                        <input type="radio" name="mode" value="Bitcoin" id="mode_btc" v-model="paymethod" required />
                        <label for="mode_btc"><img src="@/assets/images/bitcoin.svg" alt="method icon" width="28px" />
                          Bitcoin</label>
                      </div>
                      <div class="radio-toolbar">
                        <input type="radio" name="mode" value="USDT" id="mode_usdt" v-model="paymethod" required />
                        <label for="mode_usdt"><img src="@/assets/images/bitcoin.svg" alt="method icon" width="28px" />
                          USDT</label>
                      </div>
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Amount</label>
                    <div class="uk-form-controls">
                      <input type="number" class="uk-input" id="Wamount" name="Wamount" v-model="amount"
                        placeholder="Amount in USD" required />
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1">
                    <button class="
                  uk-button uk-width-1-1 uk-button-primary uk-border-rounded
                  submitBtn
                  uk-float-left
                " type="submit">
                      <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                      Done
                    </button>
                  </div>



                </form>
              </li>
              <li>
                <form @submit.prevent="createcreateWithdrawalii" id="bankwithdrawal">

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Bank</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="Wbank" name="Wbank" v-model="ty_pe"
                        placeholder="Bank name" required />
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Account Number</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="Wacc-number" name="Wacc-number" v-model="acc_num"
                        placeholder="Account number" required />
                    </div>
                  </div>


                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Account Name</label>
                    <div class="uk-form-controls">
                      <input type="text" class="uk-input" id="Wacc-name" name="Wacc-name" v-model="acc_name"
                        placeholder="Account name" required />
                    </div>
                  </div>



                  <div class="uk-margin-small uk-width-1-1 uk-inline">
                    <label class="uk-form-label" for="form-stacked-text">Amount</label>
                    <div class="uk-form-controls">
                      <input type="number" class="uk-input" id="Wamountii" name="Wamountii" v-model="amountii"
                        placeholder="Amount in USD" required />
                    </div>
                  </div>

                  <div class="uk-margin-small uk-width-1-1">
                    <button class="
                  uk-button uk-width-1-1 uk-button-primary uk-border-rounded
                  submitBtn
                  uk-float-left
                " type="submit">
                      <span v-if="loading"><i class="fa fa-spinner fa-spin"></i></span>
                      Done
                    </button>
                  </div>
                </form>

              </li>
            </ul>





            <br />
          </div>

        </div>
      </div>
    </div>
  </user-layout>
</template>

<script>
import UserLayout from "@/layouts/UserLayout.vue";
import initialize from "@/services";
const toastr = new window.Toastr();

export default {
  components: {
    UserLayout,
  },
  data() {
    return {
      user: [],
      amount: "",
      amountii: "",
      paymethod: "",
      loading: false,
      loadstat: true,
      acc_name: '',
      acc_num: '',
      ty_pe: '',
    };
  },
  async mounted() {
    initialize.setupajax(this.$store.state.token);
    document.title = "Withdrawal";
    await window.$.get("https://earnalipay.org/withdrawal", (data) => {
      //console.log(data) 
      this.user = data;
    });
    this.loadstat = false;
  },
  methods: {
    createcreateWithdrawalii() {
      this.loading = true;

      window.$(".submitBtn").attr("disabled", "disabled");
      window.$.post("https://earnalipay.org/withdrawal/",
        { paymethod: 'Bank transfer', amount: this.amountii, acc_name: this.acc_name, acc_num: this.acc_num, ty_pe: this.ty_pe },
        (data) => {

          if (data.msgi) {
            toastr.warning(`${data.msgi}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          } else {
            this.amountii = "";
            this.paymethod = "";
            this.acc_name = '',
              this.acc_num = '',
              this.ty_pe = '',
              toastr.success(`${data.msg}`);
            this.user = data.user;

            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          }

        })
    },
    createWithdrawal() {
      this.loading = true;

      window.$(".submitBtn").attr("disabled", "disabled");
      // console.log({ paymethod: this.paymethod, amount: this.amount })
      window.$.post(
        "https://earnalipay.org/withdrawal/",
        { paymethod: this.paymethod, amount: this.amount },
        (data) => {
          if (data.msgi) {
            toastr.warning(`${data.msgi}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          } else if (data.msgp) {
            toastr.warning(`${data.msgp}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          } else {
            this.amount = "";
            this.paymethod = "";
            toastr.success(`${data.msg}`);
            this.user = data.user;

            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.depo-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.depo-box>div {
  width: 300px;
  margin: 50px 0px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  color: #ffffff;
  display: inline-block;
  background-color: #1d1d1d;
  padding: 20px 10px;
  font-size: 25px;
  border: 2px solid #444;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}

.radio-toolbar label:hover {
  background-color: #000;
}

.radio-toolbar input[type="radio"]:checked+label {
  background-color: #fd961a;
  border-color: #fd961a;
}

.paymethod {
  display: flex;
}
</style>