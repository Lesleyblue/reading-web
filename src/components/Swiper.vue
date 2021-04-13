<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgs" :key="item.id">
      <img :src="item.url" alt="12">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return{
            imgs:[
                { url: require('../assets/1.jpg'),id:1 },
                { url: require('../assets/2.png'),id:2 },
                { url: require('../assets/3.jpg'),id:3 },
            ]
        }
    }
}
</script>

<style>

 .el-carousel__item h3 img {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
</style>