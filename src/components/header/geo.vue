<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location-information"/>
      {{$store.state.position.name}}
      <router-link class="changeCity" to="/changeCity">切换城市</router-link>
      [<a href="#" class="city-guess" v-for="item in nearCity" :key="item.id">{{ item.name }}</a>]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" to="/login">立即登录</router-link>
      <router-link class="register" to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        nearCity: []
      }
    },
    created() {
      api.getPosition().then(data => {
        this.$store.dispatch('setPosition', data);
        this.nearCity = data.nearCity;
      })
    }
  }
</script>

<style scoped>

</style>
