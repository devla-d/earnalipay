<template>
  <div class="App">
  <router-view/>
  </div>
 
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

import 'toastr2/dist/toastr.min.css';

export default {
   name: 'App',
   mounted(){
        this.$store.commit('initializestore')
   }
};
</script>

<style lang="css">

@import "@/assets/vendor/uikit/css/uikit.css";  
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
} */

 
</style>
