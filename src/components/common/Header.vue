<template>
  <div class="header-body">
    <div class="header-left">
      <img :src="img" alt="魔方多终端内容管平台"/>
    </div>
    <div class="header-right">
      <span>欢迎你！</span>
      <span>【黄埔区】章鱼用户</span>
      <a href="">退出</a>
      <span>当前站点：</span>
      <select name="" id="">
        <option value="">洛维工业园区网站</option>
      </select>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
      data(){
      return {
        img:'./static/imgs/logo.png'
      }
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
  .header-right{
    float: right;
    margin-top: 15px;
    margin-right: 30px;
  }
  .header-right a{
    font-size: 14px;
    color: white;
    text-decoration: none;
  }
  .header-right a:hover{
    text-decoration: underline;
  }
  .header-right span{
    color:white;
    font-size: 14px;
  }
</style>
