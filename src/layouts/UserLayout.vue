<template>
  <div class="userlayout">
    <header>
      <nav class="uk-navbar-container">
        <div class="top-bari uk-section">
          <div class="top-bar-date">
            <span id="date-bar"> </span>
          </div>
          <div class="top-bar-lang">
            <span class="fas fa-globe"></span>
            <div class="lang-select-con">
              <select class="" id="language" @change="changeLanguageByButtonClick">
                <option value="en">English</option>
                <option value="nl">Dutch</option>
                <option value="km">Cambodian</option>

                <option value="fr">French</option>

                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
        <div class="top-barii">
          <a class="uk-logo bar-logo" href="/">
            <img class="in-offset-top-" src="@/assets/images/logoii.png" alt="logo" width="130" height="36"
              data-uk-img />
          </a>
          <div class="bar-main-menu">
            <ul>
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li>
                <router-link to="/withdraw-funds">Withdraw</router-link>
              </li>
              <!-- <li>
                <router-link to="/fund-account">Deposit</router-link>
              </li> -->
              <li>
                <router-link to="/transaction-history">Transactions</router-link>
              </li>
              <li>
                <a href="javaScript:void(0);" @click="openModal">Referrals</a>
              </li>
              <li>
                <router-link to="/account-settings">Settings</router-link>
              </li>
            </ul>
          </div>
          <div class="account-menu">
            <ul>
              <li>
                <a href="javaScript:void(0);" @click="logout()">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <preload-spin v-if="isLoading"></preload-spin>
    <div v-else>
      <slot />
    </div>

    <div id="mobile-nav">
      <ul>
        <li>
          <router-link to="/withdraw-funds">
            <i class="fas fa-donate"></i>
            <p>Withdraw</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <a to="" class="togglemn">
            <i class="fas fa-align-justify"></i>
            <p>More</p>
          </a>
        </li>
      </ul>
    </div>

    <div id="mobile-nav-menu" class="mobile-nav-menu">
      <ul>
        <li>
          <router-link to="/withdraw-funds">Withdraw</router-link>
        </li>
        <li>
          <router-link to="/transaction-history">Transactions</router-link>
        </li>
        <li><a href="javaScript:void(0);" @click="openModal">Referrals</a></li>
        <li>
          <router-link to="/account-settings">Settings</router-link>
        </li>
        <li><a href="javaScript:void(0);" @click="logout()">Logout</a></li>
      </ul>
    </div>

    <!--[referal panel]-->
    <ref-modal :active="active" @close-modal="closeModal" />
    <!--[referral panel]-->

 <!--footer-->
 <home-footer></home-footer>
    <!--footer-->
  </div>
</template>


<script>
import PreloadSpin from "@/components/PreloaSpin.vue";
import RefModal from "@/components/RefModal.vue";
import HomeFooter from "@/components/HomeFooter.vue";
export default {
  name: "UserLayout",
  components: {
    HomeFooter,
    PreloadSpin,
    RefModal, //: ()=> import("@/components/RefModal.vue")
  },
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      active: false,
      interval: null
    };
  },
  mounted() {
    this.closeMnav();
    this.setTimer();
    this.togleMobNav();
    let tidioscript = document.createElement('script')
    tidioscript.setAttribute('src', '//code.tidio.co/4xoyo9fhuf9katplsgp00346p9zcmha7.js')
    tidioscript.setAttribute('async', '')
    document.head.appendChild(tidioscript)
  },
  unmounted() {
    clearInterval(this.interval)


  },

  methods: {
    changeLanguageByButtonClick() {
      var language = document.getElementById("language").value;
      var selectField = document.querySelector(
        "#google_translate_element select"
      );
      for (var i = 0; i < selectField.children.length; i++) {
        var option = selectField.children[i];
        // find desired langauge and change the former language of the hidden selection-field
        if (option.value == language) {
          selectField.selectedIndex = i;
          // trigger change event afterwards to make google-lib translate this side
          selectField.dispatchEvent(new Event("change"));
          break;
        }
      }
    },

    closeMnav() {
      var mobilemenu = window.$(".mobile-nav-menu");
      var mnavlink = window.$(".mobile-nav-menu ul li a");
      mnavlink.each(function () {
        window.$(this).on("click", () => {
          mobilemenu.removeClass("active");
        });
      });
    },
    openModal() {
      this.active = true;
    },
    closeModal() {
      this.active = !this.active;
    },
    logout() {
      this.$store.commit("RemoveToken");

      // this.$router.push('/login')
      window.location.href = "/login";
    },
    setTimer() {
      this.interval = setInterval(function () {
        var dt = new Date();
        var x1 = dt.toUTCString();
        window.$("#date-bar").text(`${x1}`);
      }, 1000);
    },

    togleMobNav() {
      var clicKer = window.$(".togglemn");
      var meNu = window.$(".mobile-nav-menu");
      clicKer.on("click", function (e) {
        e.preventDefault();
        meNu.toggleClass("active");
      });
    },
  },
};
</script>


<style scoped>
@import url("@/assets/dashboard.css");

#mobile-nav ul li a.router-link-active.router-link-exact-active i {
  /* color: rgb(54, 162, 235) !important; */
  color: #fd6a4f !important;
}

.bar-main-menu ul li a.router-link-active.router-link-exact-active {
  color: #a09e9e !important;
}
</style>
