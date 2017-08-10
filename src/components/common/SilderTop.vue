<template>
  <div class="silder-body">
    <!--<div class="silder-top" @click="change" ref="myTop">-->

    <!--</div>-->
    <!--<div class="silder-change" ref="change">-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link class="module" to="/base/silder1"><el-menu-item index="1">基本配置</el-menu-item></router-link>
      <router-link class="module module2" to="/webmanage/silder2"><el-menu-item index="2">网站管理</el-menu-item></router-link>
      <router-link class="module module3" to="/messagemanage/silder3"><el-menu-item index="3">内容管理</el-menu-item></router-link>
      <router-link class="module module4" to="/peoplestyle/silder4"><el-menu-item index="4">政民互动</el-menu-item></router-link>
    </el-menu>
      <!--</div>-->

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
    return {
      activeIndex: '1',
      activeName: ''
    }
  },methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    selected: function(gameName) {
      this.activeName = gameName
    },
    change(){
      this.$refs.my.click(function() {
        this.$refs.change.slideToggle();
      });
    }
  }
  }
</script>
<style>
  /* 导航的hover样式 */
  .el-menu--horizontal.el-menu--dark .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu__title:hover{
    background-color: #324057;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item:hover{
    border-bottom: 6px solid #20a0ff;
  }
  /* 导航栏选择样式 */
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    border-bottom: 6px solid #20a0ff;
  }

  .silder-body{
    background: #f1f1f1;
    overflow: hidden;
  }
  .silder-top{
    width: 200px;
    height: 150px;
    float: left;
    border: 1px solid #cccccc;
    background: #f1f1f1;
  }
  .silder-change > .module{
    width: 200px;
    height: 35px;
    line-height: 35px;
    float: left;
    text-align: center;
    border: 1px solid #cccccc;
    background: #f1f1f1;
    color:#1876aa;
    text-decoration: none;
  }
  .silder-change > .module:hover{
    background: #1876aa;
    color: white;
  }
  .silder-change .module2{
    border-left: none;
  }
  .silder-change .module3{
    border-left: none;
  }
  .silder-change .module4{
    border-left: none;
  }
</style>
