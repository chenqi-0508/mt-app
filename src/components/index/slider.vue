<template>
  <div class="slider">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item, index) in imgList" :key="item.url + '_' + index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          imgList: [{
            url: '#fw',
            img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
          },{
            url: '#fw1',
            img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
          },{
            url: '#fw2',
            img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
          },{
            url: '#fw3',
            img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
          }]
        }
      }
    }
</script>

<style scoped>

</style>
