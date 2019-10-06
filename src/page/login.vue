<template>
  <div class="page-login">
    <header class="login-header">
      <a class="logo" href="/index"></a>
    </header>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370"
             alt="美团网">
      </div>
      <div class="form">
        <div class="tips">
          <i></i>
          请输入账号
        </div>
        <p>
          <span>账号登录</span>
        </p>
        <el-input
          placeholder="手机号"
          v-model="userName">
          <i slot="prefix" class="el-input__icon profile"></i>
        </el-input>
        <el-input
          placeholder="密码"
          show-password
          v-model="password">
          <i slot="prefix" class="el-input__icon password"></i>
        </el-input>
        <p class="foot">
          <a href="#">忘记密码？</a>
        </p>
        <el-button type="success" class="btn-login" @click="loginBtn">登录</el-button>
        <p class="reg">
          <span>还没有账号?</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <a class="oauth__link oauth__link--qq" href="/account/connect/tencent"
               data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
            <a class="oauth__link oauth__link__weibo" href="/account/connect/sina"
               data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
  import api from '@/api';
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      loginBtn() {
        if (this.userName && this.password){
          api.login({
            params: {
              userName: this.userName,
              password: this.password
            }
          }).then(data => {
            if (data.status && data.status === 'fail') {
              alert(data);
              return false;
            } else {
              alert('登录成功！');
              const userInfo = {
                userName: this.userName,
                password: this.password
              };
              this.$store.commit('setUserName', userInfo);
              this.$router.push({name: 'index'});
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/login/index.scss';
</style>
