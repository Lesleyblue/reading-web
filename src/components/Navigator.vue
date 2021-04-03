<template>
  <div class="header">
      <a>
          <img>
          <span></span>
      </a>
      <ul class="nav">
          <li class="nav-container" v-for="item in bookType" :key="item.id">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Navigator',
    data(){
        return {
            bookType:[{
                id:1,
                name:'言情'
            },{
                id:2,
                name:'玄幻'
            },{
                id:3,
                name:'武侠'
            },{
                id:4,
                name:'科幻'
            },{
                id:5,
                name:'网游'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
 .header{
    height: 50px;
    background-color:rgb(6 103 87);
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav{
        display: flex;
        margin: 0 auto;
        list-style-type: none; 
        .nav-container{
            text-align: center;
            box-sizing: border-box;
            color: #fff;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 100px;
            cursor: pointer;
            transition: all .3s linear;
            &:hover{
                font-size: 20px;
                transition: all .3s linear;
            }
        }
    }
   
 }
 
</style>