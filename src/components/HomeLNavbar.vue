<template>
  <div>
    <header>
      <!-- header content begin -->
      <div class="top-bari uk-section">
        <div class="top-bar-date">
          <span id="date-bar"></span>
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

      <nav class="uk-container">
        <div class="logo-box">
          <a href="#">
            <img class="earnlogo" src="@/assets/images/logoii.png" alt="" />
          </a>
        </div>
        <div class="main-menu">
          <ul class="lmenu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <!-- <li><router-link to="/roadmap">Roadmap</router-link></li> -->

            <li>
              <router-link to="/customer">Customer</router-link>
            </li>

            <li>
              <router-link to="/faq">Faq</router-link>
            </li>

            <li>
              <router-link to="/contact">Support</router-link>
            </li>
          </ul>
          <div>
           
            <router-link to="/sign-up" class="uk-button uk-button-text">Register</router-link>
            <router-link to="/login" class="uk-button uk-button-text">Login</router-link>
          </div>
        </div>
        <div class="uk-navbar-item in-mobile-nav uk-hidden@m">
          <a class="uk-button" href="#"><i class="fas fa-bars"></i></a>
        </div>
      </nav>

      <!-- header content end -->
    </header>

    <div id="sidebar" class="uk-flex flex-column uk-flex-center">
      <nav id="navbar" class="navbar nav-menu">
        <ul>
          <li>
            <router-link to="/" class="nav-link scrollto"><i class="fas fa-home"></i> <span>Home</span></router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link scrollto"><i class="fa fa-user"></i> <span>About</span>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/roadmap" class="nav-link scrollto"
              ><i class="fa fa-file"></i> <span>RoadMap</span></router-link
            >
          </li> -->
          <li>
            <router-link to="/customer" class="nav-link scrollto"><i class="fa fa-book"></i> <span>Customer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/faq" class="nav-link scrollto"><i class="fa fa-server"></i> <span>Faq</span></router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link scrollto"><i class="fa fa-envelope"></i> <span>Support</span>
            </router-link>
          </li>

          <li>
            <router-link to="/sign-up" class="nav-link scrollto"><i class="fa fa-sign-in-alt"></i>
              <span>Register</span>
            </router-link>
          </li>
          <li>
            <router-link to="/login" class="nav-link scrollto"><i class="fa fa-user-plus"></i> <span>Login</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeNavbar",
  data() {
    return {
       interval:null
    };
  },
  mounted() {
    this.toggle_mobileNav();
    this.setTimer();
    this.removetogle();
  },
    unmounted(){ 
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
    setTimer() {
       this.interval = setInterval(function () {
        var dt = new Date();
        var x1 = dt.toUTCString();
        //var month = ['Jan','Feb','Mar','Apr','May','Jun',"jul",'Aug',"Sep",'Oct','Nov','Dec']
        //window.$("#date-bar").text(`${month[dt.getMonth()]} ${dt.getDate()} ${dt.getFullYear()}`);
        window.$("#date-bar").text(`${x1}`);
      }, 1000);
    },
    removetogle() {
      var toggler = window.$("#sidebar > #navbar > ul > li > a");
      var togleIcon = window.$(".in-mobile-nav > a > i");
      toggler.on("click", () => {
        togleIcon.removeClass("fa-times");
        togleIcon.addClass("fa-bars");
      });
    },
    toggle_mobileNav() {
      var toggler = window.$(".in-mobile-nav > a");
      var sidebar = window.$("#sidebar");
      var togleIcon = window.$(".in-mobile-nav > a > i");

      toggler.on("click", function () {
        sidebar.toggleClass("active");
        if (togleIcon.hasClass("fa-bars")) {
          togleIcon.removeClass("fa-bars");
          togleIcon.addClass("fa-times");
        } else {
          togleIcon.removeClass("fa-times");
          togleIcon.addClass("fa-bars");
        }
      });
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Montserrat:wght@500&display=swap");

.top-bari {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #fff;
  box-shadow: 0px 10px 25px -5px rgb(0 0 0 / 6%);
}

.top-bar-lang {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.top-bar-lang span {
  color: #818181;
}

.top-bar-lang .lang-select-con {
  margin-left: 2px;
}

.top-bar-lang .lang-select-con select {
  border: none;
  outline: none;
  color: #818181;
  font-size: 15px;
  background: transparent;
}

.earnlogo {
  /* width: 140px; */
  height: 46px;
}

#sidebar {
  position: fixed;
  top: 0;
  left: -400px;
  bottom: 0;
  z-index: 9997;
  transition: all 0.5s;
  padding: 15px;

  width: 300px;
  background: #fff;
  border-right: 1px solid #e6e9ec;
  flex-direction: column;
}

#sidebar.active {
  left: 0;
}

#sidebar .nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

#sidebar .nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}

#sidebar .nav-menu a.router-link-active.router-link-exact-active,
#sidebar .nav-menu a:hover,
#sidebar .nav-menu li:hover>a {
  color: #fff !important;
  background: #e04d3d;
}

#sidebar .nav-menu a,
#sidebar .nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #45505b;
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: #f2f3f5;
  height: 56px;
  width: 100%;
  overflow: hidden;
  transition: 0.3s;
}

#sidebar .nav-menu a i,
#sidebar .nav-menu a:focus i {
  font-size: 20px;
}

#sidebar .nav-menu a:hover span,
#sidebar .nav-menu .active span,
#sidebar .nav-menu .active:focus span,
#sidebar .nav-menu li:hover>a span {
  color: #fff;
}

#sidebar .nav-menu a span,
#sidebar .nav-menu a:focus span {
  padding: 0 5px 0 7px;
  color: #45505b;
}

header {
  border-bottom: 1px solid #e3e3e3;
}

header nav {
  display: flex;
  position: relative;
  height: 100px;
}

header nav .logo-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;
}

.main-menu {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.main-menu ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-menu ul li>a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100px;
  padding: 0 18px;
  font-size: 16.2px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: #818181;
}

.main-menu ul li>a:hover {
  color: #adaaaa;
}

.main-menu ul li>a:after {
  position: absolute;
  left: 11px;
  top: 60px;
  width: 77%;
  height: 2px;
  background: #da5444;
  content: "";
  opacity: 0;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.main-menu ul li>a.router-link-active.router-link-exact-active:after {
  opacity: 1;
}

.main-menu div {
  border: 1px solid #e04d3d;
  border-radius: 6px;
  margin: 31px 0px;
  margin-left: 20px;
  padding: 5px 4px 8px;
  height: 39px;
}

.main-menu div .uk-button {
  color: #e04d3d;
  font-size: 0.765rem;
  font-weight: bold;
  line-height: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-left: 10px;
  padding-right: 10px;
}

@media (min-width: 959px) {
  #sidebar {
    display: none;
  }
}

@media (max-width: 959px) {
  .main-menu {
    display: none;
  }

  header nav {
    justify-content: space-between;
    height: 74px;
  }
}

/* Small Devices Potrait */

@media (max-width: 767px) {
  .main-menu {
    display: none;
  }

  header nav {
    justify-content: space-between;
    height: 74px;
  }
}

.uk-button-text::before {
  border: none;
}
</style>