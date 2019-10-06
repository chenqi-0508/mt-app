<template>
    <div class="el-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position}}火锅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
