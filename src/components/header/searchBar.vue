<template>
  <div class="m-header">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input class="el-input" v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur"></el-input>
          <el-button  class="el-button" type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item+index">
              <router-link to="/blank" tag="dd">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="item + index">
              <router-link to="/blank" tag="dd">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">北京欢乐谷</a>
          <a href="#">八达岭长城</a>
          <a href="#">恭王府</a>
          <a href="#">天坛公园</a>
          <a href="#">天安门广场</a>
          <a href="#">北京世界园艺博览会</a>
          <a href="#">颐和园</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        searchWord: "",
        isFocus: false,
        hotPlaceList: ['北京欢乐谷','八达岭长城','恭王府'],
        searchList: ['火锅','火锅2','北京欢乐谷','八达岭长城','恭王府'],
      }
    },
    computed: {
      isHotPlace: function () {
        return this.isFocus && !this.searchWord;
      },
      isSearchList: function () {
        return this.isFocus && this.searchWord;
      }
    },
    methods: {
      focus: function () {
        this.isFocus = true;
      },
      blur: function () {
        setTimeout( () => this.isFocus = false, 200);
      }
    },
    created () {
      axios
        .get('http://api.duyiedu.com/api/meituan/header/search.json',{'appkey': 'dongmeiqi_i_1545272862243'})
        .then((resp) => {
          console.log(resp);
        })
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/public/header/search.scss";
</style>
