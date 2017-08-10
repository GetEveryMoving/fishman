<template>
  <div>
    <div>
      <el-col :span="8">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title">网站管理</template>
            <el-menu-item index="1-1">
              <a  class="silder-a" href="javascript:;" data-index="1" @click="getModule">
              模块管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a  class="silder-a" href="javascript:;" data-index="2" @click="getModule">
                模块风格管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-3">
              <a  class="silder-a" href="javascript:;" data-index="3" @click="getModule">
                模块管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-4">
              <a  class="silder-a" href="javascript:;" data-index="4" @click="getModule">
                站点管理
              </a>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">后台用户管理</template>
            <el-menu-item index="1-1">
              <a  class="silder-a" href="javascript:;" data-index="6" @click="getModule">
              部门管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a  class="silder-a" href="javascript:;" data-index="7" @click="getModule">
              角色管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-3">
              <a  class="silder-a" href="javascript:;" data-index="8" @click="getModule">
              用户管理
              </a>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">网站用户管理</template>
            <el-menu-item index="1-1">
              <a  class="silder-a" href="javascript:;" data-index="9" @click="getModule">
              个人用户管理
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a  class="silder-a" href="javascript:;" data-index="10" @click="getModule">
              企业/单位用户管理
              </a>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">维护管理</template>
            <el-menu-item index="1-1">
              <a  class="silder-a" href="javascript:;" data-index="11" @click="getModule">
              操作日志
              </a>
            </el-menu-item>
            <el-menu-item index="1-2">
              <a  class="silder-a" href="javascript:;" data-index="12" @click="getModule">
              异常日志
              </a>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <a  class="silder-a" href="javascript:;" data-index="13" @click="getModule">
            消息推送管理
            </a>
          </el-menu-item>
          <el-menu-item index="6">
            <a  class="silder-a" href="javascript:;" data-index="14" @click="getModule">
            意见反馈管理
            </a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <!--右边每个对应的功能模块页面-->
    <div class="silder1-right">
      <div class="manage1"  v-if="show == 1">
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 10px;margin-left: 50px" type="primary">新建</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">编辑</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">复制</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px;margin-right: 200px" type="primary">删除</el-button>
          终端类型：<el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="name"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="name"
            label="页面">
          </el-table-column>
          <el-table-column
            prop="address"
            label="位置">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage2"  v-if="show == 2">
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 10px;margin-left: 50px" type="primary">编辑</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">复制</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">删除</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="模板名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="风格">
          </el-table-column>
          <el-table-column
            prop="name"
            label="默认">
          </el-table-column>
          <el-table-column
            prop="name"
            label="备注">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage3" v-if="show == 3">
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 10px;margin-left: 50px" type="primary">上传模块</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary" @click="edit =true">卸载模块</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="当前使用">
          </el-table-column>
          <el-table-column
            prop="name"
            label="缩略图">
          </el-table-column>
          <el-table-column
            prop="name"
            label="模块">
          </el-table-column>
          <el-table-column
            prop="name"
            label="提交时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="版本">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage4" v-if="show == 4">
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 10px;margin-left: 50px" type="primary">新增</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">编辑</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">删除</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="站点名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="站点域名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="别名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="上传路径">
          </el-table-column>
          <el-table-column
            prop="name"
            label="ftp地址">
          </el-table-column>
          <el-table-column
            prop="name"
            label="端口">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="密码">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage6" v-if="show == 6">
        <div class="search">
          <div class="double">
            部门名称: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
          </div>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="部门状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="部门名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="部门排序">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage7" v-if="show == 7">
        <div class="search">
          <div class="double">
            角色名称: <input type="text"/>
          </div>
          <div class="double">
            所属部门: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
          </div>
        </div>
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 20px;margin-left: 5px" type="primary">新增</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">编辑</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">删除</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">权限设置</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="角色名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="角色描述">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属部门">
          </el-table-column>
          <el-table-column
            prop="name"
            label="角色排序">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage8" v-if="show == 8">
        <div class="search">
          <div class="double">
            用户名称: <input type="text"/>
          </div>
          <div class="double">
            中文名称: <input type="text"/>
          </div>
          <div class="double">
            所属部门: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
          </div>
        </div>
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 20px;margin-left: 5px" type="primary">新增</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">编辑</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="中文名字">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属部门">
          </el-table-column>
          <el-table-column
            prop="name"
            label="分配角色">
          </el-table-column>
          <el-table-column
            prop="name"
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="name"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户排序">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage9" v-if="show == 9">
        <div class="search">
          <div class="double">
            有效状态: <input type="text"/>
          </div>
          <div class="double">
            认证状态: <input type="text"/>
          </div>
          <div class="double">
            手机: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
            <el-button type="primary" style="margin-top: 12px">高级搜索</el-button>
          </div>
        </div>
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 20px;margin-left: 5px" type="primary">现场实名注册</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">实名认证</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">账号管理</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="手机账号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="身份证">
          </el-table-column>
          <el-table-column
            prop="name"
            label="真实姓名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="注册来源">
          </el-table-column>
          <el-table-column
            prop="name"
            label="注册时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="状态标志位">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage10" v-if="show ==10">
        <div class="search">
          <div class="double">
            有效状态: <input type="text"/>
          </div>
          <div class="double">
            认证状态: <input type="text"/>
          </div>
          <div class="double">
            用户类型: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
            <el-button type="primary" style="margin-top: 12px">高级搜索</el-button>
          </div>
        </div>
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 20px;margin-left: 5px" type="primary">现场实名注册</el-button>
          <el-button style="margin-left:10px;margin-top: 5px;margin-bottom: 10px" type="primary">账号管理</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="账号（营业执照）">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="法人姓名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="注册来源">
          </el-table-column>
          <el-table-column
            prop="name"
            label="注册时间">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage11" v-if="show == 11">
        <div class="search">
          <div class="double">
            关键字（访问用户、用户姓名）: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
          </div>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="访问IP地址">
          </el-table-column>
          <el-table-column
            prop="name"
            label="访问用户">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属部门">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作内容">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="消耗时间">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage12" v-if="show == 12">
        <div class="search">
          <div class="double">
            处理状态：<el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
            关键字（访问用户、用户姓名）: <input type="text"/>
          </div>
          <div class="searchButton">
            <el-button type="primary" style="margin-top: 12px">搜索</el-button>
          </div>
        </div>
        <div style="overflow: hidden;margin-top: 20px;padding-left: 20px">
          <el-button style="margin-top: 5px;margin-bottom: 20px;margin-left: 5px" type="primary">异常处理</el-button>
        </div>
        <el-table
          style="width: 84%">
          <el-table-column
            prop="date"
            label="访问IP地址">
          </el-table-column>
          <el-table-column
            prop="name"
            label="访问用户">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户姓名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属部门">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作内容">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="消耗时间">
          </el-table-column>
          <el-table-column
            prop="name"
            label="处理状态">
          </el-table-column>
        </el-table>
      </div>
      <div class="manage13" v-if="show == 13">
        <div class="search2">
          <div class="double2">
            状态: <select name="" id="">
            <option value="">全部</option>
            <option value="">全体用户</option>
            <option value="">企业用户</option>
            <option value="">个人用户</option>
          </select>
            推送渠道: <select name="" id="">
            <option value=""><input type="radio"/>包含短信</option>
            <option value=""><input type="radio"/>包含短信</option>
            <option value=""><input type="radio"/>企业用户</option>
            <option value=""><input type="radio"/>个人用户</option>
          </select>
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
            <el-button type="primary" style="margin-left:20px;margin-top: 20px;margin-bottom: 20px">推送新消息</el-button>
          </div>
          <el-table
            ref="multipleTable"
            border
            tooltip-effect="dark"
            style="width: 100%">
            </el-table-column>
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="推送对象"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="推送渠道"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="主题"
              width="150">
            </el-table-column>
            <el-table-column
              prop="address"
              label="内容"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="manage14" v-if="show == 14">
        <div class="search2">
          <div class="double2">
            状态: <select name="" id="">
            <option value="">全部</option>
            <option value="">未处理</option>
            <option value="">处理中</option>
            <option value="">已处理</option>
          </select>
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
            <el-button type="primary" style="margin-left:20px;margin-top: 20px;margin-bottom: 20px">处理详情</el-button>
          </div>
          <el-table
            ref="multipleTable"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              label="序号"
              width="55">
            </el-table-column>
            <el-table-column
              type="selection"
              width="120">
            </el-table-column>
            <el-table-column
              label="用户IP"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="反馈问题"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="反馈时间"
              width="150">
            </el-table-column>
            <el-table-column
              prop="address"
              label="处理状态"
              show-overflow-tooltip>
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
      options: [{
        value: '选项1',
        label: 'PHONE'
      }, {
        value: '选项2',
        label: 'PC'
      }],
      options1: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '未处理'
      },{
        value: '选项3',
        label: '处理中'
      },{
        value: '选项4',
        label: '已处理'
      }],
      value: '',
      index:1,
      show:1,
      currentPage4: 1,
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
        desc: '',
        tableData3:[{}]
      },
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
      navSilder2:[
        {
          name:"网站建设"
        },
        {
          name:"后台用户管理"
        },
        {
          name:"网站用户管理"
        },
        {
          name:"维护管理"
        },
        {
          name:"消息推送管理"
        },
        {
          name:"意见反馈管理"
        },
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
//      连接对应的不同功能模块
    getModule(e){
      if(e.target.getAttribute('data-index') ==1){
        this.show=1
      }else if(e.target.getAttribute('data-index') ==2){
        this.show=2
      }else if(e.target.getAttribute('data-index') ==3){
        this.show=3
      }else if(e.target.getAttribute('data-index') ==4){
        this.show=4
      }else if(e.target.getAttribute('data-index') ==5){
        this.show=5
      }else if(e.target.getAttribute('data-index') ==6){
        this.show=6
      }else if(e.target.getAttribute('data-index') ==7){
        this.show=7
      }else if(e.target.getAttribute('data-index') ==8){
        this.show=8
      }else if(e.target.getAttribute('data-index') ==9){
        this.show=9
      }else if(e.target.getAttribute('data-index') ==10){
        this.show=10
      }else if(e.target.getAttribute('data-index') ==11){
        this.show=11
      }else if(e.target.getAttribute('data-index') ==12){
        this.show=12
      }else if(e.target.getAttribute('data-index') ==13){
        this.show=13
      }else if(e.target.getAttribute('data-index') ==14){
        this.show=14
      }
    }
  }
}
</script>
<style scoped>
  /*下拉列表*/
  .silder2{
    width: 180px;
    height:560px;
    /*background: red;*/
    border:1px solid #f1f1f1;
    border-bottom: none;
    box-sizing: content-box;
  }
  .el-col-8{
    width: 202px;
    height:100%;
    border-right: 1px solid #cccccc;
  }
  /*当小于1350,下拉列表隐藏*/
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
  .silder2 ul{
    margin-top: 0px;
    margin-left: -40px;
  }
  .silder2 li{
    list-style: none;
  }
  .silder2 li a:hover{
    background: #1876aa;
    color: white;
  }
  .silder2 li a{
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
  .silder-a{
    width: 180px;
    display: block;
    text-decoration: none;
    color:#1876aa;
  }
  /*部门管理*/
  .silder1-right .manage6{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage6 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage6 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage6 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage6 .search .searchButton{
    /*flot: left;*/
  }
  .manage6 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  /*角色管理*/
  .silder1-right .manage7{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage7 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage7 .search .double{
    margin-left: 15px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage7 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage7 .search .searchButton{
    /*flot: left;*/
  }
  .manage7 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  /*用户管理*/
  .silder1-right .manage8{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage8 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage8 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage8 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage8 .search .searchButton{
    /*flot: left;*/
  }
  .manage8 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  /*企业/单位用户管理*/
  .silder1-right .manage9{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage9 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage9 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage9 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .manage9 .search .searchButton button{
    margin-left: 15px;
    margin-top: 6px;
  }
  /*个人用户管理*/
  .silder1-right .manage10{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage10 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage10 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage10 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .manage10 .search .searchButton button{
    margin-left: 15px;
    margin-top: 6px;
  }
  /*操作日志*/
  .silder1-right .manage11{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage11 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage11 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage11 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage11 .search .searchButton{
    /*flot: left;*/
  }
  .manage11 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  /*异常日志*/
  .silder1-right .manage12{
    /*background: hotpink;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage12 .search{
    height: 58px;
    background: #ebebeb;
  }
  .silder1-right .manage12 .search .double{
    margin-left: 25px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage12 .search .double input {
    margin-top: 7px;
    height: 30px;
    border-radius: 5px;
  }
  .silder1-right .manage12 .search .searchButton{
    /*flot: left;*/
  }
  .manage12 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
/*消息推送管理*/
  .silder1-right .manage13 .search2{
    /*height: 58px;*/
    /*width: 1130px;*/
    /*background: #ebebeb;*/
    float: left;
    /*overflow: hidden;*/
  }
  .silder1-right .manage13 .search2 .double2{
    padding-left: 10px;
    /*margin-top: 6px;*/
    /*float: left;*/
  }
  .silder1-right .manage13 .search2 .double2 select {
    margin-top: 10px;
    height: 30px;
    width: 100px;
    /*border-radius: 5px;*/
  }
  .silder1-right .manage13 .search2 .double2 input{
    margin-top: 10px;
    height: 25px;
    width: 120px;
    border-radius: 5px;
  }
  .silder1-right .manage13 .search2 .searchButton{
    /*float: left;*/
  }
  .manage13 .search2 .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }

/*意见反馈管理*/
  .silder1-right .manage14 .search2{
    /*height: 58px;*/
    /*width: 1130px;*/
    /*background: #ebebeb;*/
    float: left;
    /*overflow: hidden;*/
  }
  .silder1-right .manage14 .search2 .double2{
    padding-left: 10px;
    /*margin-top: 6px;*/
    /*float: left;*/
  }
  .silder1-right .manage14 .search2 .double2 select {
    margin-top: 10px;
    height: 30px;
    width: 70px;
    /*border-radius: 5px;*/
  }
  .silder1-right .manage14 .search2 .double2 input{
    margin-top: 10px;
    height: 25px;
    width: 120px;
    border-radius: 5px;
  }
  .silder1-right .manage14 .search2 .searchButton{
    /*float: left;*/
  }
  .manage14 .search2 .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
</style>

