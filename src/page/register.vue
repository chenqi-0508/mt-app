<template>
  <div class="page-register">
    <div class="header">
      <header>
        <div class="site-logo"></div>
        <div class="login">
          <span class="bold">已有美团账号？</span>
          <a href="#">登录</a>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm content">
        <el-form-item label="用户名" prop="userName">
          <el-input type="username" v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" @input="inputPass"></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar', saveLevel]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer>
      <a href="#">©meituan.com 京ICP证070791号</a>
      <span>京公网安备11010502025545号</span>
    </footer>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (value.length < 4 || value.length > 16) {
            callback(new Error('用户名必须为4-16位的字母数字下划线组成'));
          } else {
            const regStr = /(\w)+/g;
            const regNum = /(\d)+/g;
            const reg = /_/g;
            const checkOk = value.match(reg) && value.match(regStr) && value.match(regNum);
            if (!checkOk) {
              callback(new Error('用户名必须为字母数字下划线组成'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.rePassword !== '') {
            this.$refs.ruleForm.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        saveLevel: '',
        ruleForm: {
          password: '',
          rePassword: '',
          userName: ''
        },
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          rePassword: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          userName: [
            {validator: checkUserName, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const params = {...this.ruleForm};
            api.register({params}).then(data => {
              if (data.status && data.status === 'fail') {
                alert(data);
                return false;
              } else {
                alert('注册成功！');
                this.$router.push({name: 'index'});
                const userInfo = {
                  userName: data,
                  password: this.ruleForm.password
                };
                this.$store.commit('setUserName', userInfo);
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      inputPass() {
        const password = this.ruleForm.password;
        if (password.length < 6) {
          this.saveLevel = 'week';
        } else if (password.length > 6 && password.length < 10) {
          this.saveLevel = 'normal';
        } else if (password.length >= 10) {
          this.saveLevel = 'strong';
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/register/index.scss';
</style>
