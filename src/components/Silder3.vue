<template>
  <div>
    <!--下拉列表-->
    <div>
      <el-col :span="8">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title">文章发布管理</template>
            <el-menu-item index="1-1">
              <a class="silder-a" href="javascript:;" data-index="1" @click="getModule">
                分类管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a class="silder-a" href="javascript:;" data-index="2" @click="getModule">
                文章管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-3">
              <a class="silder-a" href="javascript:;" data-index="3" @click="getModule">
                文章统计分析
              </a>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <a class="silder-a" href="javascript:;" data-index="4" @click="getModule">
              内容审批管理
            </a>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="silder1-right">
        <div class="manage1"  v-if="show == 1">
          <div class="search">
            <div class="double">
              <div class="element">
                状态: <select name="" id="">
                <option value="">全部</option>
                <option value="">启动</option>
                <option value="">禁用</option>
              </select>
                共享: <select name="" id="">
                <option value="">全部</option>
                <option value="">是</option>
                <option value="">否</option>
              </select>
                标题：<input type="text" placeholder="请输入关键字"/>
              </div>
            </div>
            <div class="searchButton">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
            <el-button style="margin-top: 5px;margin-bottom: 10px" type="primary" @click="dialogFormVisible=true">新增</el-button>
            <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary" @click="edit =true">编辑</el-button>
            <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary" @click="del">删除</el-button>
          </div>

          <div>
            <el-table
              :data="table"
              border
              style="width: 84%">
              <el-table-column
                type="selection">
              </el-table-column>
              <el-table-column
                prop="name"
                label="标题"
                width="100">
              </el-table-column>
              <el-table-column
                prop="index"
                label="共享"
                width="500">
              </el-table-column>
              <el-table-column
                prop="used"
                label="编号"
                >
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[1]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="0">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="manage2"  v-if="show == 2">
          <div class="search2">
            <div class="double2">
              状态: <select name="" id="">
              <option value="">全部</option>
              <option value="">未发布</option>
              <option value="">已发布</option>
              <option value="">待审核</option>
              <option value="">草稿</option>
              <option value="">审核通过（未发布）</option>
              <option value="">审核通过（已发布）</option>
              <option value="">审核不通过</option>
            </select>
              发布单位: <select name="" id="">
              <option value="">全部</option>
              <option value="">财务部门</option>
              <option value="">测试部门</option>
              <option value="">研发部门</option>
            </select>
              分类: <select name="" id="">
              <option value="">全部</option>
              <option value="">分类1</option>
              <option value="">分类2</option>
              <option value="">分类3</option>
              <option value="">分类4</option>
            </select>
              创建人：<input type="text"/>
              创建日期：<el-date-picker
              v-model="value4"
              type="datetimerange"
              :picker-options="pickerOptions2"
              placeholder="选择时间范围"
              align="right">
            </el-date-picker>
              <el-button type="primary" style="margin-left: 10px;margin-top: 15px;height: 34px;">搜索</el-button>
            </div>
            <div >
              <el-button type="primary" style="margin-left:10px;margin-top: 5px;margin-bottom: 5px">新增</el-button>
              <el-button type="primary" style="margin-top: 20px;margin-bottom: 5px">编辑</el-button>
              <el-button type="primary" style="margin-top: 20px;margin-bottom: 5px">发布</el-button>
              <el-button type="primary" style="margin-top: 20px;margin-bottom: 5px">取消发布</el-button>
              <el-button type="primary" style="margin-top: 20px;margin-bottom: 5px">删除</el-button>
            </div>
            <el-table
              :data="tableData1"
              tooltip-effect="dark"
              style="width: 90%">
              <el-table-column
                type="selection">
              </el-table-column>
              <el-table-column
                prop="use"
                label="快捷操作">
              </el-table-column>
              <el-table-column
                prop="name"
                label="标题/分类">
              </el-table-column>
              <el-table-column
                prop="people"
                label=" 创建人"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="date"
                label="创建时间"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="index"
                label="编号"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="status"
                label="当前状态"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="used"
                label="点击"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[5,10,15]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="4">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="manage3" v-if="show == 3">
          <div class="search">
            <div class="double">
              发布日期：<el-date-picker
              v-model="value4"
              type="datetimerange"
              :picker-options="pickerOptions2"
              placeholder="选择时间范围"
              align="right">
            </el-date-picker>
              发布部门: <select name="" id="">
              <option value="">全部</option>
              <option value="">财务部门</option>
              <option value="">测试部门</option>
              <option value="">研发部门</option>
            </select>
              发布模板: <select name="" id="">
              <option value="">全部</option>
              <option value="">模板1</option>
              <option value="">模板2</option>
              <option value="">模板3</option>
              <option value="">模板4</option>
            </select>
              <el-button type="primary" style="margin-left:20px;margin-top: 5px;margin-bottom: 5px">查询</el-button>
              <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">重置</el-button>
              <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">导出</el-button>
            </div>
          </div>
          <el-table
            border
            tooltip-effect="dark"
            style="width: 83%">
            <el-table-column
              prop="city"
              label="发布单位">
            </el-table-column>
            <el-table-column
              prop="mu"
              label="发布模板">
            </el-table-column>
            <el-table-column
              prop="date"
              label="发布时间">
            </el-table-column>
            <el-table-column
              prop="shu"
              label="发布量（条）"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="点击量"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5,10,15]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="3">
            </el-pagination>
          </div>
        </div>
        <div class="manage4" v-if="show == 4">
          <div class="search">
            <div class="double">
              <el-button type="primary"  style="margin-left:20px;margin-top: 15px;margin-bottom: 15px">审核</el-button>
              <el-button type="primary"  style="margin-top: 15px;margin-bottom: 15px">审核通过</el-button>
              <el-button type="primary"  style="margin-top: 15px;margin-bottom: 15px">审核不通过</el-button>
            </div>
          </div>
          <el-table
            style="width: 84%">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              prop="date"
              label="审核状态">
            </el-table-column>
            <el-table-column
              prop="name"
              label="标题">
            </el-table-column>
            <el-table-column
              prop="name"
              label="分类">
            </el-table-column>
            <el-table-column
              prop="name"
              label="创建人">
            </el-table-column>
            <el-table-column
              prop="name"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="创建日期">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import HeaderVue from './common/Header.vue';
  import SilderTop from './common/SilderTop.vue';
  export default {
    name:'silder1',
    data(){
      return {
//        时间初始化
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: '',
        currentPage4: 1,
        edit:false,
        dialogFormVisible:false,
        formLabelWidth:"",
        formLabelWidth:"",
        form: {
          name: '',
          region: '',
          regions:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        show:1,
        index:1,
        table1:[{
          city:'黄浦区',
          mu:'广西项目部',
          date:'2017年07月03日',
          shu:'1',
          file:'0'
        },{
          city:'黄浦区',
          mu:'广西项目部',
          date:'2017年07月03日',
          shu:'1',
          file:'0'
        },{
          city:'黄浦区',
          mu:'广西项目部',
          date:'2017年07月03日',
          shu:'1',
          file:'0'
        }],
        tableData1: [{
          use: '已使用',
          name: '文章test',
          people: 'zyu',
          date:'2017-09-01',
          index:'1',
          status:'未发布',
          used:'0'},{
          use: '已使用',
          name: '文章test',
          people: 'zyu',
          date:'2017-09-01',
          index:'1213',
          status:'未发布',
          used:'0'},{
          use: '已使用',
          name: '文章test',
          people: 'zyu',
          date:'2017-09-01',
          index:'121312',
          status:'未发布',
          used:'0'},{
          use: '已使用',
          name: '文章test',
          people: 'zyu',
          date:'2017-09-01',
          index:'1213123',
          status:'未发布',
          used:'0'}],
        table: [{
          name: '文章test',
          index:'是',
          used:'st121412'}],
          navSilder3:[
          {
            name:"文章发布管理"
          },
          {
            name:"内容审核管理"
          }
        ]
      }
    },components:{
      HeaderVue,
      SilderTop
    },methods:{
    /*
     *@descript 分页
     *@function handleSizeChange
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    /*
     *@descript 删除功能
     *@function del
     */
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getModule(e){
        if(e.target.getAttribute('data-index') ==1){
          this.show=1
        }else if(e.target.getAttribute('data-index') ==2){
          this.show=2
        }else if(e.target.getAttribute('data-index') ==3){
          this.show=3
        }else if(e.target.getAttribute('data-index') ==4){
          this.show=4
        }
      }
    }
  }
</script>
<style scoped>
  .el-col-8{
    width: 202px;
    height:560px;;
    border-right: 1px solid #cccccc;
  }
  @media screen and (max-width:1350px) {
    .el-col-8{
      display: none;
    }
  }
  .el-menu--dark{
    background-color:white;
    color:#1876aa;
  }
  .el-menu--dark .el-submenu li{
    background: #f1f1f1;
  }
  .el-menu li{
    border-bottom: 1px solid #f1f1f1;
  }
  .silder-a{
    width: 190px;
    display: block;
    text-decoration: none;
    color:#1876aa;
  }
  /*下拉列表*/
  .silder3{
    width: 180px;
    height:560px;
    /*background: red;*/
    border:1px solid #f1f1f1;
    border-bottom: none;
    float: left;
  }
  .silder1-right .manage1 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder1-right .manage2 .block{
      margin-left: 50%;
      transform: translateX(-40%);
    }
  .silder1-right .manage3 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder1-right .manage4 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder3 ul{
    margin-top: 0px;
    margin-left: -40px;
  }
  .silder3 li{
    list-style: none;

  }
  .silder3 li a:hover{
    background: #1876aa;
    color: white;
  }
  .silder3 li a{
    padding-left: 10px;
    display: block;
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    color: #676767;
    font-size: 14px;
    font-weight: bold;
  }
  /*分类管理的导航部分*/
  /*.silder1-right .manage1 .double{*/
    /*background: blue;*/
    /*height: 30px;*/
  /*}*/

  .silder1-right .manage1 .element{
    /*background: red;*/
    height: 55px;
    padding-left: 20px;
    padding-top: 10px;
    /*padding-left: 20px;*/
    float: left;
    overflow: hidden;
   /*background: red;*/
  }
  .silder1-right .manage1 .element select{
    height: 35px;
    width: 150px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .silder1-right .manage1 .element input{
    height: 30px;
    width: 270px;
    padding-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .manage1 .search .searchButton {
    overflow: hidden;
  }
  .manage1 .search .searchButton button{
    margin-left: 10px;
    margin-top: 9px;
  }

  /*文章管理的导航部分*/
  .silder1-right .manage2 .search2{
    height: 58px;
    background: #ebebeb;
    float: left;
    /*overflow: hidden;*/
  }
  .silder1-right .manage2 .search2 .double2{
    padding-left: 10px;
    /*margin-top: 6px;*/
    /*float: left;*/
  }
  .silder1-right .manage2 .search2 .double2 select {
    margin-top: 10px;
    height: 30px;
    width: 70px;
    /*border-radius: 5px;*/
  }
  .silder1-right .manage2 .search2 .double2 input{
    margin-top: 10px;
    height: 25px;
    width: 120px;
    border-radius: 5px;
  }
  .silder1-right .manage2 .search2 .searchButton{
    /*float: left;*/
  }
  .manage2 .search2 .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  /*文章统计分析*/
  .silder1-right .manage3 .search{
    margin-left: 20px;
    float: left;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .silder1-right .manage3 .search select{
    height: 35px;
    width: 100px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .silder1-right .manage3 .search input{
    height: 30px;
    width: 270px;
    padding-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
  }
</style>
