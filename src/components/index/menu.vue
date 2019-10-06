<template>
    <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menuList" :key="item.type + '_' + index" @mouseenter="menuEnter(item.items)">
          <i :class="item.type"></i>
          {{ item.name }}
          <span class="arrow"></span>
        </dd>
      </dl>
      <div class="detail" v-if="detailList" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template >
          <h4>{{ detailList[0].title }}</h4>
          <span v-for="(item, index) in detailList[0].items" :key="index">{{ item }}</span>
        </template>
      </div>
    </div>
</template>

<script>
    import api from '@/api';
    export default {
      data() {
        return {
          menuList: [],
          detailList: null
        }
      },
      methods: {
        menuEnter(item) {
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
      },
      created() {
        api.nav().then( data => {
          this.menuList = data;
        })
      }
    }
</script>

<style scoped>

</style>
