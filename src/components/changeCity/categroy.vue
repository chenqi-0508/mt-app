<template>
  <div class="categroy">
    <div class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in lettersList" :key="index"><a :href="'#city-' + item">{{item}}</a></dd>
    </div>
    <div class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index">
      <dt :id="'city-' + index">{{ index }}</dt>
      <dd>
        <span v-for="(contentItem,contentIndex) in item"
              :key="contentItem.id"
              @click="clickFirstChar(contentItem)"
              :class="contentItem.rank === 'S' ? 'levelS' : ''"
        >{{ contentItem.name }}</span>
      </dd>
    </div>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        cityGroup: {},
        lettersList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      }
    },
    methods: {
      clickFirstChar(contentItem) {
        this.$store.dispatch('setPosition', contentItem);
        this.$router.push({name: 'index'});
      }
    },
    created() {
      api.cityList().then(data => {
        let obj = {};
        let newObj = {};
        data.forEach(item => {
          const firstChar = item.firstChar.toUpperCase();
          if (!obj[firstChar]) {
            obj[firstChar] = [];
          }
          obj[firstChar].push(item);
        });
        for (let i = 0; i < this.lettersList.length; i ++){
          if(obj[this.lettersList[i]]){
            newObj[this.lettersList[i]] = obj[this.lettersList[i]];
          }
        }
        this.cityGroup = newObj;
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/css/changecity/categroy.scss';
</style>
