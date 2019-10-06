<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input class="el-input" v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button class="el-button" type="primary" icon="el-icon-search"></el-button>
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
          <a href="#" v-for="(item, index) in hotPlaceList" :key="index">{{ item }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        searchWord: "",
        isFocus: false,
        hotPlaceList: [],
        searchList: []
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
        setTimeout(() => this.isFocus = false, 200);
      },
      input: function () {
        //3.搜索框列表数据获取
        api.search().then((data) => {
          this.searchList = data.list.filter( item => {
            return item.indexOf(this.searchWord) > -1;
          })
        });
      }
    },
    created() {
      //4.查询最近热门搜索
      api.searchHotWords().then(data => {
        this.hotPlaceList = data;
      })
    }
  }
</script>
