<template>
  <user-layout>
    <!-- breadcrumb content begin -->
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="uk-grid">
          <div class="uk-width-1-1 in-breadcrumb">
            <ul class="uk-breadcrumb uk-float-right">
              <li><a href="/">Home</a></li>
              <li><span>Settings</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumb content end -->

    <div class="uk-section">
      <div class="uk-container uk-container-center">
        <ul class="uk-flex-center uk-tab" data-uk-tab="{connect:'#my-id'}">
          <li><a href="">Details</a></li>
          <li><a href="">Login History</a></li>
        </ul>
        <ul id="my-id" class="uk-switcher uk-margin">
          <li>
            <a href="#" id="autoplayer" data-uk-switcher-item="next"></a>

            <form
               @submit.prevent="updateDetails"
              class="uk-form"
              style="margin-bottom: 86px"
            >
              
              <!--fourth step-->
                    <div class="form-step">
                      <h4 id="paytxt">Payment methods</h4>

                      <div class="uk-margin-small uk-width-1-1 uk-inline">
                        <label class="uk-form-label" for="form-stacked-text"
                          >Perfect Money</label
                        >
                        <div class="uk-form-controls">
                          <input
                            type="text"
                            v-model="perfect_money_id"
                            placeholder="Perfect Money"
                            class="uk-input uk-border-rounded"
                            maxlength="30"
                           
                            id="id_perfect_money_id"
                          />
                          <span
                            class="uk-form-msg uk-text-danger"
                            id="id_perfect_money_id_msg"
                          ></span>
                        </div>
                      </div>

                      <div class="uk-margin-small uk-width-1-1 uk-inline">
                        <label class="uk-form-label" for="form-stacked-text"
                          >Bitcoin address</label
                        >
                        <div class="uk-form-controls">
                          <input
                            type="text"
                            v-model="btc_id"
                            class="uk-input uk-border-rounded"
                            placeholder="Bitcoin Address"
                            maxlength="80"
                            id="id_btc"
                          />
                          <span
                            class="uk-form-msg uk-text-danger"
                            id="id_btc_msg"
                          ></span>
                        </div>
                      </div>

                      <div class="uk-margin-small uk-width-1-1 uk-inline">
                        <label class="uk-form-label" for="form-stacked-text"
                          >USDT address</label
                        >
                        <div class="uk-form-controls">
                          <input
                            type="text"
                            v-model="usdt_id"
                            placeholder="Usdt address"
                            class="uk-input uk-border-rounded"
                            maxlength="30"
                            id="id_usdt_id"
                          />
                          <span
                            class="uk-form-msg uk-text-danger"
                            id="id_usdt_msg"
                          ></span>
                        </div>
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
                  Update
                </button>
              </div>
            </form>
          </li>
          <li>


            
<div class="uk-overflow-auto">
            <table id="profittable" class="uk-table uk-table-hover uk-table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>IP address</th>
                        <th>Browser</th>

                </tr></thead>
                <tbody>
                    
                    <tr v-for="log in loginhistory" :key="log.id">
                        <td>{{log.date}}</td>
                        <td>{{log.ip_add}}</td>
                        <td>{{log.browser}}</td>

                    </tr>
                    
                    
                    
                  
              


                </tbody>

            </table>
        </div>


          </li>
        </ul>
      </div>
    </div>





    <div style="padding:20px 0px;"></div>
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
      loginhistory:[],
      user:[],
      btc_id: "",
      usdt_id: "",
      perfect_money_id: "",
      loading:false,
    };
  },
  mounted() {
    document.title = "Settings";
     initialize.setupajax(this.$store.state.token);
      window.$.get("https://earnalipay.org/settings/", (data) => {
     
      this.loginhistory = data.loginhistory;
      this.user = data.user
      this.perfect_money_id = data.user.perfect_money_id
      this.usdt_id = data.user.usdt_id
      this.btc_id = data.user.btc_id
    });

  },
  methods:{
    updateDetails(){
      this.loading = true;

      window.$(".submitBtn").attr("disabled", "disabled");
      window.$.post('https://earnalipay.org/settings/',{btc_id:this.btc_id,usdt_id:this.usdt_id,perfect_money_id:this.perfect_money_id},
      (data)=>{
           toastr.success(`${data.msg}`);
            this.loading = false;
            window.$(".submitBtn").removeAttr("disabled");
      })
    }
  }
};
</script>

<style scoped>
</style>