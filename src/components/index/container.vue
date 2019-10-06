<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd v-for="(item,index) in tabs" :key="item + '_' + index"
          :class="{ active :  kind == item.tab}" :data-type="item.tab">
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in currentList" :key="index">
        <div class="el-card">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image"
                 class="image">
            <div class="el-card__body">
              <div class="cbody">
                <div class="title" :title="item.title">{{ item.title }}</div>
                <div class="sub-title" :title="item.subTitle">{{ item.subTitle }}</div>
                <div class="price-info"><span class="current-price-wrapper"><span
                  class="price-symbol numfont">¥</span><span
                  class="current-price numfont">{{ item.price }}</span></span><span class="old-price">门市价¥{{ item.price }}</span><span
                  class="sold bottom-right-info">{{ item.address }}</span></div>
              </div>
            </div>
          </el-card>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        kind: 'all',
        allList: [],
        currentList: []
      }
    },
    props: ['tabs'],
    methods: {
      over(e) {
        let TagName = e.target.tagName.toLowerCase();
        if (TagName !== 'dd') {
          return false;
        }
        this.kind = e.target.getAttribute("data-type");
        this.currentList = this.allList[this.kind];
      }
    },
    created() {
      //动态获取信息
      api.resultsByKeywords().then(data => {
        this.allList = data;
        this.currentList = data.all;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/index/artistic.scss';
</style>
