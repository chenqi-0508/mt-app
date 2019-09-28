<template>
    <div class="m-geo">
      <div class="position">
        <i class="el-icon-location-information" />
        北京
        <router-link class="changeCity" to="/">切换城市</router-link>
          [
          <a href="#">大厂回族自治县</a>
          <a href="#">廊坊</a>
          <a href="#">固安县</a>
          ]
      </div>
      <div class="m-user">
        <router-link class="login" to="/">立即登录</router-link>
        <router-link class="register" to="/">注册</router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'geo'
  }
</script>

<style scoped>

</style>
