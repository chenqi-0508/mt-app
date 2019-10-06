<template>
    <div class="m-iselect">
      <span>按省份选择</span>
      <m-select class="province"
                title="省份"
                :value="province"
                :list="provinceList"
                :showWrapperActive="provinceActive"
                @change="changeProvince"
                @change_active="changeProvinceActive"
      ></m-select>
      <m-select class="city"
                title="城市"
                :value="city"
                :list="cityList"
                :showWrapperActive="cityActive"
                @change="changeCity"
                @change_active="changeCityActive"
                :disabled="cityDisabled"
      ></m-select>
      <span class="name search">直接搜索：</span>
      <el-input v-model="searchWord" placeholder="请输入内容" class="input"></el-input>
    </div>
</template>

<script>
  import api from '@/api';
  import MSelect from "./select.vue";
    export default {
      data(){
        return {
          searchWord: "",
          province: '省份',
          provinceList: [],
          provinceActive: false,
          city: '城市',
          cityList: [],
          cityActive: false,
          cityDisabled: true,

        }
      },
      methods: {
        changeProvince(item) {
          this.province = item.name;
          this.cityList = item.cityInfoList;
          this.cityDisabled = false;
        },
        changeCity(item) {
          this.city = item.name;
          this.$store.dispatch('setPosition', item);
          this.$router.push({name: 'index'});
        },
        changeProvinceActive(flag) {
          this.provinceActive = flag;
        },
        changeCityActive(flag) {
          this.cityActive = flag;
        }
      },
      components: {
        MSelect
      },
      created() {
        //9.获取省份列表
        api.province().then(data => {
          this.provinceList = data.map(item => {
            item.name = item.provinceName;
            return item;
          });
        })
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/changecity/iselect.scss";
</style>
