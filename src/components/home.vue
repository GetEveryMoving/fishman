<template>
  <div>
    <header-vue></header-vue>
    <silder-top></silder-top>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import HeaderVue from './common/Header.vue';
  import SilderTop from './common/SilderTop.vue';
    export default {
        data(){
            return {
              img:'./static/imgs/logo.png'
            }
        },components:{
        SilderTop,
        HeaderVue
      }
    }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header-body{
    width: 100%;
    height: 50px;
    background: #1876aa;
  }
  .header-left{
    /*height: 40px;*/
    float: left;
    margin-top: 5px;
    margin-left: 30px;
  }
</style>
