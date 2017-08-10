<template>
  <div>
    <!--基本配置部门的下拉列表-->
    <div class="silder1-body">
      <!--左边的下拉列表-->
      <div>
        <el-col :span="8">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-menu-item
              index="1"
              @click="selected(name)"
              :class="{active: activeName == name}">
              <a  class="silder-a" href="javascript:;" data-index="1" @click="getModule">
                资源目录管理
              </a>
            </el-menu-item>
            <el-menu-item index="2" :data-index="2">
              <a  class="silder-a" href="javascript:;" data-index="2" @click="getModule">
                定时任务管理
              </a>
            </el-menu-item>
            <el-menu-item index="3" :data-index="3">
              <a  class="silder-a" href="javascript:;" data-index="3" @click="getModule">
                附件模块管理
              </a>
            </el-menu-item>
            <el-menu-item index="4" :data-index="4">
              <a  class="silder-a" href="javascript:;" data-index="4" @click="getModule">
                消息模块管理
              </a>
            </el-menu-item>
            <el-menu-item index="5" :data-index="5">
              <a  class="silder-a" href="javascript:;" data-index="5" @click="getModule">
                日志记录配置
              </a>
            </el-menu-item>
            <el-menu-item index="6" :data-index="6">
              <a  class="silder-a" href="javascript:;" data-index="6" @click="getModule">
                分类标签管理
              </a>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!--右边每个对应的功能模块页面-->
      <div class="silder1-right">
        <div class="manage1"  v-if="show == 1">
          <div style="margin-left:10px;margin-top: 5px;margin-bottom: 5px">
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
            <el-dialog title="新增资源" :visible.sync="dialogFormVisible">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="资源名称" :label-width="formLabelWidth" prop="name">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源描述" :label-width="formLabelWidth">
                  <el-input v-model="form.scr" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源类型" :label-width="formLabelWidth" prop="region">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="URL" value="URL"></el-option>
                    <el-option label="BUTTON" value="BUTTON"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父级资源" :label-width="formLabelWidth">
                  <el-select v-model="form.regions" placeholder="请选择">
                    <el-option label="无" value="无"></el-option>
                    <el-option label="配置资源" value="配置资源"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="访问地址" :label-width="formLabelWidth">
                  <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="ICON图标" :label-width="formLabelWidth">
                  <el-input v-model="form.img" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源排序" :label-width="formLabelWidth">
                  <el-input v-model="form.sort" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源状态" :label-width="formLabelWidth">
                  <el-radio v-model="form.radio" label="1">启用</el-radio>
                  <el-radio v-model="form.radio" label="2">禁用</el-radio>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm');dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="primary" @click="edit = true">编辑</el-button>
            <el-dialog title="编辑资源" :visible.sync="edit">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="资源名称" :label-width="formLabelWidth" prop="name">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源描述" :label-width="formLabelWidth">
                  <el-input v-model="form.scr" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源类型" :label-width="formLabelWidth" prop="region">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="URL" value="URL"></el-option>
                    <el-option label="BUTTON" value="BUTTON"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父级资源" :label-width="formLabelWidth">
                  <el-select v-model="form.regions" placeholder="请选择">
                    <el-option label="无" value="无"></el-option>
                    <el-option label="配置资源" value="配置资源"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="访问地址" :label-width="formLabelWidth">
                  <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="ICON图标" :label-width="formLabelWidth">
                  <el-input v-model="form.img" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源排序" :label-width="formLabelWidth">
                  <el-input v-model="form.sort" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源状态" :label-width="formLabelWidth">
                  <el-radio v-model="form.radio" label="1">启用</el-radio>
                  <el-radio v-model="form.radio" label="2">禁用</el-radio>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="edit = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm');edit = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="primary" @click="open2">删除</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              label="序号"
              width="100%">
              <template scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="资源名称"
              width="100%">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="资源描述"
              width="200%">
            </el-table-column>
            <el-table-column
              prop="address"
              label="访问地址"
              width="200%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="资料类型"
              width="350%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="ICON图标"
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
              :total="1">
            </el-pagination>
          </div>
          <!--<div style="margin-top: 20px">-->
          <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
          <!--</div>-->
        </div>
        <div class="manage2"  v-if="show == 2">
          <div class="buttons1">
            404的页面
          </div>
        </div>
        <div class="manage3" v-if="show == 3">
          <div style="margin-left:10px;margin-top: 5px;margin-bottom: 5px">
            <el-button type="primary" @click="open2">新增</el-button>
            <el-button type="primary" @click="open2">编辑</el-button>
            <el-button type="primary" @click="open2">删除</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              label="序号"
              width="100%">
              <template scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="编号"
              width="100%">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="模块名称"
              width="200%">
            </el-table-column>
            <el-table-column
              prop="address"
              label="模块描述"
              width="200%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="文件类型（逗号隔开）"
              width="350%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="创建时间"
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
              :total="1">
            </el-pagination>
          </div>
          <!--<div style="margin-top: 20px">-->
          <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
          <!--</div>-->
        </div>
        <div class="manage4" v-if="show == 4">
          <div class="search">
            <div class="double">
              模块名称: <input type="text"/>
              业务名称: <input type="text"/>
            </div>
            <div class="searchButton">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div style="margin-left:10px;margin-top: 5px;margin-bottom: 5px">
            <el-button type="primary" @click="open2">新增</el-button>
            <el-dialog title="新增资源" :visible.sync="edit">
              <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="资源名称" :label-width="formLabelWidth" prop="name">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源描述" :label-width="formLabelWidth">
                  <el-input v-model="form.scr" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源类型" :label-width="formLabelWidth" prop="region">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="URL" value="URL"></el-option>
                    <el-option label="BUTTON" value="BUTTON"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="父级资源" :label-width="formLabelWidth">
                  <el-select v-model="form.regions" placeholder="请选择">
                    <el-option label="无" value="无"></el-option>
                    <el-option label="配置资源" value="配置资源"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="访问地址" :label-width="formLabelWidth">
                  <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="ICON图标" :label-width="formLabelWidth">
                  <el-input v-model="form.img" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源排序" :label-width="formLabelWidth">
                  <el-input v-model="form.sort" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="资源状态" :label-width="formLabelWidth">
                  <el-radio v-model="form.radio" label="1">启用</el-radio>
                  <el-radio v-model="form.radio" label="2">禁用</el-radio>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="edit = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm');edit = false">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="primary" @click="open2">编辑</el-button>
            <el-button type="primary" @click="open2">删除</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData4"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              label="序号"
              width="100%">
              <template scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="短信编号"
              width="100%">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="系统标识"
              width="200%">
            </el-table-column>
            <el-table-column
              prop="address"
              label="模块名称"
              width="200%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="业务名称"
              width="350%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="创建时间"
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
              :total="1">
            </el-pagination>
          </div>
        </div>
        <div class="manage5" v-if="show == 5">
          <div style="margin-left:10px;margin-top: 5px;margin-bottom: 5px">
            <el-button type="primary" @click="open2">新增</el-button>
            <el-button type="primary" @click="open2">编辑</el-button>
            <el-button type="primary" @click="open2">删除</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              width="100%"
              label="序号">
              <template scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="行为名称"
              width="100%">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="行为描述"
              width="200%">
            </el-table-column>
            <el-table-column
              prop="address"
              label="执行方法"
              width="200%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="file"
              label="系统标识"
              width="350%"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="time"
              label="所属时间"
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
              :total="1">
            </el-pagination>
          </div>
        </div>
        <div class="manage6" v-if="show == 6">
          <div class="element">
            <select name="" id="">
              <option value="">--类型--</option>
              <option value="">--知识问答--</option>
              <option value="">调查</option>
              <option value="">机构管理</option>
            </select>
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="element-div1">
            <h3>问答知识</h3>
            <div class="element-div2">
              <h5>业务</h5>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                :closable="true"
                :close-transition="false"
                @close="handleCloseTag(tag)"
                >
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="mini"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
            </div>
            <div class="element-div2" style="margin-top: 20px">
              <h5>区域</h5>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                :closable="true"
                :close-transition="false"
                @close="handleCloseTag(tag)"
                >
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="mini"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
            </div>
            <div class="element-div2" style="margin-top: 20px">
              <h5>部门</h5>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                :closable="true"
                :close-transition="false"
                @close="handleCloseTag(tag)"
                >
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="mini"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
            </div>
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
      currentPage4: 1,
      activeName:'',
      name:['资源目录管理','定时任务管理','附件模块管理','消息模块管理','日志记录配置','分类标签管理'],
      edit:false,
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        radio:'2',
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
//      需要验证的属性
      rules: {
        name: [
          { required: true, message: '请输入资源名称', trigger: 'blur' },
          { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
      },
      formLabelWidth: '120px',
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      index:1,
      show:1,
      tableData3: [{
        id:"1",
        date: '20160503',
        name: '附件管理',
        address: '配置管理的制度',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"2",
        date: '20160503',
        name: '章鱼建站',
        address: '问卷调查的机构',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"3",
        date: '20160503',
        name: '活动服务器',
        address: '测试的五点',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"4",
        date: '20160503',
        name: '活动服务器图片',
        address: '文章的管理',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"5",
        date: '20160503',
        name: '问卷调查',
        address: '章鱼内容的相关资料',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"6",
        date: '20160506',
        name: '会议室',
        address: '问价',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"7",
        date: '20160503',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
        file:"使用的文档",
        time:"2013-12-1"
      }],
      tableData4: [{
        id:"1",
        date: '20160503',
        name: 'asd',
        address: '配置管理的制度',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"2",
        date: '20160503',
        name: 'asd',
        address: '问卷调查的机构',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"3",
        date: '20160503',
        name: 'askdj',
        address: '测试的五点',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"4",
        date: '20160503',
        name: 'sadk',
        address: '文章的管理',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"5",
        date: '20160503',
        name: 'asdas',
        address: '章鱼内容的相关资料',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"6",
        date: '20160506',
        name: 'asdas',
        address: '问价',
        file:"使用的文档",
        time:"2013-12-1"
      }, {
        id:"7",
        date: '20160503',
        name: 'asdsa',
        address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
        file:"使用的文档",
        time:"2013-12-1"
      }],
    }
  },components:{
    HeaderVue,
    SilderTop
  },created(){

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
    *@descript tab标签切换
    *@function addTab
     */
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue2 = newTabName;
    },
    /*
     *@descript tab标签切换能关闭
     *@function removeTab
     */
    removeTab(targetName)
    {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        })
      }
    },
    /*
     *@descript 新增提示
     *@function submitForm
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
     *@descript 新增提示
     *@function submitForm
     */
      handleCloseTag(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
    /*
     *@descript 测试下拉列表的index
     *@function handleInputConfirm
     */
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    /*
     *@descript 表格渲染相关功能
     *@function toggleSelection
     */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    /*
     *@descript 删除按钮功能
     *@function open2
     */
        open2() {
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
     *@descript 选中的效果
     *@function selected
     */
    selected(name){
        this.activeName = name
    },
    /*
     *@descript 判断下拉列表对应的页面
     *@function getModule
     */
      getModule(e){
        if(e.target.getAttribute('data-index') ==1){
          console.log(1);
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
        }
//      console.log(e.target.getAttribute('data-index'));
      }
    }
  }
</script>
<style scoped>
  .silder1-body{
    width: 100%;
    box-sizing: content-box;
  }
  .el-menu--dark .el-submenu .el-menu{
    background:#1876aa;
  }
  .el-col-8{
    width: 202px;
    height:100%;
    border-right: 1px solid #cccccc;
  }
  /*当小于1350，左边的下拉列表隐藏*/
  @media screen and (max-width:1350px) {
    .el-col-8{
      display: none;
    }
  }
  .el-menu--dark{
    background-color:white;
    color:#1876aa;
  }
  .el-menu li{
    border-bottom: 1px solid #f1f1f1;
  }
  .silder-a{
    width: 180px;
    display: block;
    text-decoration: none;
    color:#1876aa;
  }
  /*基本配置的下拉列表*/
  .silder1{
    width: 180px;
    height:560px;
    /*background: red;*/
  }
  .silder1 ul{
    margin-top: 0px;
    margin-left: -40px;
  }
  .silder1 li{
    list-style: none;

  }
  .silder1 li a:hover{
    background: #1876aa;
    color: white;
  }
  .silder1 li a{
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
  /*下拉列表对应的模块功能*/
  .silder1-right{
    float: left;
  }
  .silder1-right .manage1{
    width: 100%;
    height: 100%;
  }
  .silder1-right .manage1 .block{
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .silder1-right .manage2{
    background: blue;
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage3{
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage3 .block{
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .silder1-right .manage4{
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage4 .block{
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .silder1-right .manage4 .search{
    height: 30px;
    /*background: #7f7f7f;*/
  }
  .silder1-right .manage4 .search .double{
    margin-left: 10px;
    margin-top: 6px;
    float: left;
  }
  .silder1-right .manage4 .search .double input {
    border-radius: 5px;
  }
  .silder1-right .manage4 .search .searchButton{
    /*float: left;*/
  }
  .manage4 .search .searchButton button{
    margin-left: 30px;
    margin-top: 6px;
  }
  .silder1-right .manage5{
    /*background: #008000;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage5 .block{
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .silder1-right .manage6{
    /*background: skyblue;*/
    width: 100%;
    height: 560px;
  }
  .silder1-right .manage6 .element{
    /*background: red;*/
    height: 55px;
    width: 1090px;
    padding-top: 10px;
    margin-left: 20px;
    border-bottom: 1px solid #7f7f7f;
  }
  .silder1-right .manage6 .element select{
    height: 35px;
    width: 150px;
    border-radius: 5px;
  }
  .silder1-right .manage6 .element-div1 h3{
    margin-left: 20px;
    width: 1090px;
    height: 40px;
    border-bottom: 1px solid #1876aa;
  }
  .silder1-right .manage6 .element-div2{
    width: 1020px;
    background: skyblue;
    margin-left: 45px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 5px;
  }
</style>
