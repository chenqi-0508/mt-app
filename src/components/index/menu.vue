<template>
    <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menuList" :key="item.id + index" @mouseenter="menuEnter(item)">
          <i :class="item.id"></i>
          {{ item.title }}
          <span class="arrow"></span>
        </dd>
      </dl>
      <div class="detail" v-if="detailList" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template >
          <h4>{{ detailList.detail }}</h4>
          <span v-for="(item, index) in detailList.children" :key="index">{{ item.title }}</span>
        </template>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          menuList: [{
            title: '美食',
            id: 'food',
            detail: '美食',
            children: [{
              title: '代金券',
              id: '0'
            },{
              title: '甜点饮品',
              id: '1'
            },{
              title: '火锅',
              id: '2'
            },{
              title: '自助餐',
              id: '3'
            }]
          },{
            title: '外卖',
            id: 'takeout',
            detail: '外卖',
            children: [{
              title: '美团外卖',
              id: '0'
            }]
          },{
            title: '酒店',
            id: 'hotel',
            detail: '酒店星级',
            children: [{
              title: '经济型',
              id: '0'
            },{
              title: '舒适/三星',
              id: '1'
            },{
              title: '高档/四星',
              id: '2'
            },{
              title: '豪华/五星',
              id: '3'
            }]
          }],
          detailList: null
        }
      },
      methods: {
        menuEnter(item) {
          console.log(item.children);
          this.detailList = item;
        },
        menuLeave() {
          this.timer = setTimeout(() => this.detailList = null,200)
        },
        detailEnter() {
          clearTimeout(this.timer);
        },
        detailLeave() {
          this.detailList = null;
        }
      }
    }
</script>

<style scoped>

</style>
