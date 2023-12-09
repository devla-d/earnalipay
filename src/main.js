import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from 'axios';
import JQuery from "jquery";
import Toastr from "toastr2";
import store from "./store";
// import VueTidio from 'vue-tidio';

window.$ = JQuery;
window.stringSimilarity = require("string-similarity");
window.Toastr = Toastr;

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'https://earnalipay.org/';
// window.axios = axios
createApp(App)
  .use(store)
  .use(router)
  // .use(VueTidio, { appKey: '4xoyo9fhuf9katplsgp00346p9zcmha7' })
  .mount("#app");
