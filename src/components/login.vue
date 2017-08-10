<template>
  <div>
    <!--登录的头部-->
    <div class="header-body">
      <div class="header-left">
        <img :src="img" alt="魔方多终端内容管平台"/>
      </div>
    </div>
    <!--登录的头部END-->
    <div class="body-login">
      <el-row :gutter="20">
        <!--魔方图片-->
        <el-col :span="10">
          <div class="body-left">
            <img :src="img1" alt="登录图片">
          </div>
        </el-col>
        <!--魔方图片END-->
        <!--登录部分-->
        <el-col :span="10">
          <div class="body-right">
            <div class="right-top">
                账户登录
            </div>
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
            <el-form-item label="账号：" prop="age" style="padding-left: 10px;padding-right: 10px">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="pass" style="margin-top: 20px;padding-left: 10px;padding-right: 10px">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item style="margin-left:40px;margin-top: 20px;">
              <el-button type="primary" @click="login" style="width: 150px;height:50px">提交</el-button>
              <el-button @click="resetForm('ruleForm2')" style="width: 150px;height:50px">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        </el-col>
      </el-row>
      <!--登录部分END-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:'silder1',
    data(){
//    登录的账号密码验证
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      };
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
//        登录账号密码验证的需要属性
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      username:'',
      password:'',
      img:'./static/imgs/logo.png',
      img1:'./static/imgs/start.png',
      edit:false,
      formLabelWidth: '120px',
      dialogFormVisible: false,
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
      show:1
    }
  },created(){

  },methods:{
    /*
     *@descript 发起请求登录
     *@function login
     */
    submitForm(formName) {
      this.$refs[formName].validate(() => {

      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login(){
      if (this.ruleForm2.age == "") {
        this.$message({
          showClose: true,
          message: '账号不能为空',
          type: 'error'
        });
        return false;
      }
      if (this.ruleForm2.pass == "") {
        this.$message({
          showClose: true,
          message: '请输入密码',
          type: 'error'
        });
        return false;
      }
      this.$router.push("/base/silder1");
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
  @media screen and (max-width:1300px) {
    .body-left img{
      display: none;
    }
  }
  /*登录页面的图片*/
  .header-left{
    /*height: 40px;*/
    float: left;
    margin-top: 5px;
    /*margin-left: 30px;*/
    overflow: hidden;
  }
  .body-login{
    min-height: 570px;
    background: #ebf4f8;
  }
  .body-login .body-left{
    float: left;
    margin-left: 100px;
    margin-top: 40px;
  }
  /*登录部分*/
  .body-login .body-right{
    float: left;
    width: 400px;
    height: 300px;
    margin-left: 70px;
    margin-top: 100px;
    border:1px solid #7e7f79;
  }
  .body-login .body-right .right-top{
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    font-family:'microsoft yahei';
    color: #fff;
    text-align: center;
    background: #1876aa;
  }
  .body-login .body-right .body-bottom{
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
  .body-login .body-right .body-bottom .username input{
    margin-top: 10px;
    height: 35px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #c9c9c9;
  }
  .body-login .body-right .body-bottom .password{
    margin-top: 20px;
  }
  .body-login .body-right .body-bottom .password input{
    margin-top: 10px;
    height: 35px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #c9c9c9;
  }
</style>

