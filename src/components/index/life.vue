<template>
  <div class="m-life">
    <el-row>
      <el-col :span="24">
        <div>
          <ul class="nav">
            <li v-for="(item, index) in navList" :key="item + '_' + index">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p v-if="$store.state.userName">{{ $store.state.userName }}</p>
          <p v-if="!$store.state.userName">
            <router-link to="/register">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!$store.state.userName">
            <router-link to="/login">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
          <p>美团APP手机版</p>
          <div class="last-p">
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Slider from './slider';

  export default {
    data() {
      return {
        navList: ['美团外卖', '猫眼电影', '美团酒店', '民宿／公寓', '商家入驻', '美团公益']
      }
    },
    components: {
      Slider
    },
    created() {
      this.$store.commit('getUser');
      const cookieObj = this.$store.state.cookieObj;
      if (cookieObj.login){
        this.$store.state.userName = cookieObj.userName;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/life.scss";
</style>
