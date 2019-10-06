<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="rencentList"/>
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
  import api from '@/api';

  import Province from '@/components/changeCity/province.vue';
  import Hot from '@/components/changeCity/hot.vue';
  import Categroy from '@/components/changeCity/categroy.vue';

  export default {
    data() {
      return {
        hotList: [],
        rencentList: []
      }
    },
    components: {
      Province,
      Hot,
      Categroy
    },
    created() {
      api.hot().then(data => {
        this.hotList = data;
      });
      api.recents().then(data => {
        this.rencentList = data;
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/changecity/iselect.scss";
</style>
