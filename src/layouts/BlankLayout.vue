<template>
  <div class="bllayout">
       

         <slot/>

         

  </div>

</template>


<script>


export default {
  name: "BlankLayout",
  data() {
    return {
       isLoading : true
    };
  },
   mounted() {
     


  },
  components: {

  }
};
</script>


<style >

</style>