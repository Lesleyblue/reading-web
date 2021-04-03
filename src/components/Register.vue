<template>
    <!-- 可补充下拉邮箱后缀的提示 -->
    <div class="register">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item
                prop="email"
                label="邮箱"
                :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]"
            >
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="inputCode" style="width:60%"></el-input>
                <span id="codeBox" @click="createNumber" ref="code">{{code}}</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>    
        </el-form>
    </div>
</template>

<script>
 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length<6){
          callback(new Error('密码长度必须超过6位'));
        }else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          email: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        code:'',
        inputCode:''
      };
    },
    created(){
        this.createNumber();
    },
    methods: {
      submitForm(formName) {
        if(this.inputCode!==this.code){
            alert('验证码输入错误！')
        }else{
          this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.ruleForm.email)
            console.log(this.ruleForm.pass)
            console.log(this.ruleForm.checkPass)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
       
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      createNumber(){
          var number = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
          var codeText = '';
          for(var i=1; i<=4; i++){
              var oor = Math.floor(Math.random()*62);
              var add = number.charAt(oor);
              codeText += add;
          }
          this.code = codeText;
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/ .el-form-item__label:before{
    display: none;  // 去掉邮箱前面一个红色的*图案
}
.register{
    border: 1px #ccc solid;
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
}
#codeBox{
    display: inline-block;
    box-sizing: border-box;
    margin-top: 4px;
    margin-left: 20px;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    letter-spacing: 5px;
}
</style>