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
          <slider />
        </el-col>
        <el-col :span="4">
          <div class="m-life-pic"></div>
        </el-col>
        <el-col :span="6">
          <div class="m-life-login">
            <div class="m-life-login-name">111</div>
            <button>注册</button>
            <button>立即登录</button>
          </div>
        </el-col>
      </el-row>
      <el-row></el-row>
    </div>
</template>

<script>
  import Slider from './slider';
  export default {
    data(){
      return{
        navList: ['美团外卖','猫眼电影','美团酒店','民宿／公寓','商家入驻','美团公益']
      }
    },
    components: {
      Slider
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/life.scss";
</style>
