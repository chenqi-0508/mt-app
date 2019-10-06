<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <container :tabs="tabs"/>
    </el-row>
  </div>
</template>

<script>
  import MMenu from '@/components/index/menu.vue';
  import MLife from '@/components/index/life.vue';
  import Container from '@/components/index/container.vue'

  export default {
    data() {
      return {
        tabs: [
          {tab: "all", text: "全部", tabEn: "ALL"},
          {tab: "food", text: "约会聚餐", tabEn: "FOOD"},
          {tab: "spa", text: "丽人spa", tabEn: "SPA"},
          {tab: "movie", text: "电影演出", tabEn: "MOVIE"},
          {tab: "travle", text: "品质出游", tabEn: "TRAVEL"}
          ]
      }
    },
    components: {
      MMenu,
      MLife,
      Container
    }

  }
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
