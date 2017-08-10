<template>
  <div>
    <div class="silder4-body">
      <!--左边的下拉列表-->
      <div>
        <el-col :span="8">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
              <template slot="title">知识库</template>
              <el-menu-item index="1-1">
                <a class="silder-a" href="javascript:;" data-index="1" @click="getModule">
                  热词标签管理
                </a>
              </el-menu-item>
              <el-menu-item index="1-2">
                <a  class="silder-a" href="javascript:;" data-index="2" @click="getModule">
                  知识管理
                </a>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <a  class="silder-a" href="javascript:;" data-index="3" @click="getModule">
                常见问答管理
              </a>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!--右边对应的页面-->
      <div class="silder1-right">
        <div class="manage1"  v-if="show == 1">
          <div class="search">
            <div class="double">
              热词标签: <input type="text"/>
            </div>
            <div class="searchButton">
              <el-button type="primary" style="margin-top: 12px">搜索</el-button>
            </div>
          </div>
          <div style="margin-left:15px;margin-top: 15px;margin-bottom: 15px">
            <el-button style="margin-left:20px;margin-top: 5px;margin-bottom: 5px" type="primary" @click="dialogFormVisible=true">新增</el-button>
            <el-dialog title="添加热词标签" :visible.sync="dialogFormVisible">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label='请输入一个或多个词（多个请用英文状态下的","隔开）' :label-width="formLabelWidth" prop="name">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm');dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 5px" type="primary" @click="edit =true">编辑</el-button>
            <el-dialog title="编辑热词标签" :visible.sync="edit">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label='请输入一个或多个词（多个请用英文状态下的","隔开）' :label-width="formLabelWidth" prop="name">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="edit = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm');edit = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 5px" type="primary" @click="del">删除</el-button>
          </div>
          <div>
            <el-table
              :data="tableData3"
              border
              style="width: 84%">
              <el-table-column
                prop="date"
                label="序号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="热词标签"
                width="500">
              </el-table-column>
              <el-table-column
                prop="address"
                label="使用统计"
                >
              </el-table-column>
            </el-table>
          </div>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[1]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="1">
            </el-pagination>
          </div>
        </div>
        <div class="manage2"  v-if="show == 2">
          <div class="search">
            <div class="double">
              发布状态: <select name="" id="">
              <option value="">全部</option>
              <option value="">未发布</option>
              <option value="">已发布</option>
            </select>
              所属部门: <select name="" id="">
              <option value="">全部</option>
              <option value="">财务部门</option>
              <option value="">测试部门</option>
              <option value="">研发部门</option>
            </select>
              业务类型: <select name="" id="">
              <option value="">全部</option>
              <option value="">业务1</option>
              <option value="">业务2</option>
              <option value="">业务3</option>
              <option value="">业务4</option>
            </select>
              标题：<input type="text" placeholder="请输入关键字" style="padding-left: 10px;"/>
            </div>
            <div class="searchButton">
              <el-button type="primary" style="margin-left: 15px;margin-top: 15px;height: 34px;">搜索</el-button>
            </div>
          </div>
          <div >
            <el-button type="primary" style="margin-left:20px;margin-top: 5px;margin-bottom: 5px">新增</el-button>
            <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">编辑</el-button>
            <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">删除</el-button>
            <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">添加常见问题</el-button>
          </div>
          <el-table
            ref="multipleTable"
            border
            tooltip-effect="dark"
            style="width: 84%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              prop="name"
              label="状态">
            </el-table-column>
            <el-table-column
              label="标题">
            </el-table-column>
            <el-table-column
              prop="name"
              label="所属部门">
            </el-table-column>
            <el-table-column
              prop="address"
              label="业务类型"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="创建时间"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="创建人"
              show-overflow-tooltip>
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
        <div class="manage3" v-if="show == 3">
          <div class="search">
            <div class="double">
              发布状态: <select name="" id="">
              <option value="">全部</option>
              <option value="">未发布</option>
              <option value="">已发布</option>
            </select>
              所属部门: <select name="" id="">
              <option value="">全部</option>
              <option value="">财务部门</option>
              <option value="">测试部门</option>
              <option value="">研发部门</option>
            </select>
              业务类型: <select name="" id="">
              <option value="">全部</option>
              <option value="">业务1</option>
              <option value="">业务2</option>
              <option value="">业务3</option>
              <option value="">业务4</option>
            </select>
              标题：<input type="text" placeholder="请输入关键字" style="padding-left: 10px;"/>
            </div>
            <div class="searchButton">
              <el-button type="primary" style="margin-left: 15px;margin-top: 15px;height: 34px;">搜索</el-button>
            </div>
          </div>
          <div >
            <el-button type="primary" style="margin-left:20px;margin-top: 5px;margin-bottom: 5px">发布</el-button>
            <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">取消发布</el-button>
            <el-button type="primary" style="margin-top: 5px;margin-bottom: 5px">删除</el-button>
          </div>
          <el-table
            ref="multipleTable"
            border
            tooltip-effect="dark"
            style="width: 84%">
            <el-table-column
              label="序号">
            </el-table-column>
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="标题">
            </el-table-column>
            <el-table-column
              prop="name"
              label="所属部门">
            </el-table-column>
            <el-table-column
              prop="address"
              label="业务类型"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="创建时间"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="创建人"
              show-overflow-tooltip>
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
//        初始值
        handleSelectionChange:'',
        currentPage4: 1,
        edit:false,
        dialogFormVisible:false,
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
        rules: {
          name: [
            { required: true, message: '请添加热词', trigger: 'blur' },
          ]
        },
        show:1,
        index:1,
        navSilder4:[
          {
            name:"知识库"
          },
          {
            name:"常见问答管理"
          }],
        tableData3: [{
          date: '1',
          name: '饮食',
          address: '324'
        }, {
          date: '2',
          name: '信息',
          address: '1517 '
        }, {
          date: '3',
          name: '娱乐',
          address: '3432'
        }, {
          date: '4',
          name: '甜点',
          address: '34'
        }]
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
    /*
     *@descript 新增功能
     *@function add
     */
      add(){
      this.$msgbox({
        title:'消息',
        message:'这是一段消息'
      })
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
    /*
     *@descript 新增功能的提示
     *@function add
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type:'success',
            message:'新增成功'
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /*
     *@descript 页面对应的页面切换
     *@function getModule
     */
      getModule(e){
        if(e.target.getAttribute('data-index') ==1){
//          layer.alert(contetn, options, yes);
          this.show=1
        }else if(e.target.getAttribute('data-index') ==2){
          this.show=2
        }else if(e.target.getAttribute('data-index') ==3){
          console.log(3);
          this.show=3
        }
      }
    }
  }
</script>
<style scoped>
  .el-col-8{
    width: 202px;
    height:560px;
    border-right: 1px solid #cccccc;
  }
  /*当小于1350时，下拉列表隐藏*/
  @media screen and (max-width:1350px) {
    .el-col-8{
      display: none;
    }
  }
  .el-menu--dark .el-submenu .el-menu{
    background:#1876aa;
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
    width: 160px;
    display: block;
    text-decoration: none;
    color:#1876aa;
  }
  /*下拉列表*/
  .silder4{
    width: 180px;
    height:560px;
    /*background: red;*/
    border:1px solid #f1f1f1;
    border-bottom: none;
    float: left;
  }
  .silder4 ul{
    margin-top: 0px;
    margin-left: -40px;
  }
  .silder4 li{
    list-style: none;

  }
  .silder4 li a:hover{
    background: #1876aa;
    color: white;
  }
  .silder4 li a{
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
  .silder1-right .manage1{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage1 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage1 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage1 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage1 .search .searchButton{
    /*flot: left;*/
  }
  .manage1 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  .silder1-right .manage1 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder1-right .manage2{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage2 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder1-right .manage2 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage2 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage2 .search .double select {
    margin-top: 10px;
    height: 30px;
    width: 150px;
    /*border-radius: 5px;*/
  }
  .silder1-right .manage2 .search .double input{
    margin-top: 10px;
    height: 25px;
    width: 150px;
    border-radius: 5px;
  }
  .silder1-right .manage2 .search .searchButton{
    /*flot: left;*/
  }
  .manage1 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }

  .silder1-right .manage3{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage3 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage3 .block{
    margin-left: 50%;
    transform: translateX(-20%);
  }
  .silder1-right .manage3 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage3 .search .double select {
    margin-top: 10px;
    height: 30px;
    width: 150px;
    /*border-radius: 5px;*/
  }
  .silder1-right .manage3 .search .double input{
    margin-top: 10px;
    height: 25px;
    width: 150px;
    border-radius: 5px;
  }
  .silder1-right .manage3 .search .searchButton{
    /*flot: left;*/
  }
  .manage1 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
</style>
