<template>
  <div class="m-header m-header-topbar">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <m-nav />
    </el-col>
  </div>
</template>

<script>
import Geo from './geo'
import MNav from './nav'
export default {
  components: {
    Geo,
    MNav
  }
}
</script>

<!--<style lang="scss">-->
<!--  @import "@/assets/css/public/header/topBar.scss";-->
<!--</style>-->
