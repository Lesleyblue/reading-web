<template>
  <div class="header">
      <a>
          <img>
          <span></span>
      </a>
      <ul class="nav">
          <li class="nav-container" v-for="item in bookType" :key="item.id">{{item.name}}</li>
      </ul>
      <div class="search-box">
           <el-input
                placeholder="请选择日期"
                suffix-icon="el-icon-search"
                v-model="input1">
            </el-input>
      </div>
      <!-- <div class="login">登录</div> -->
      <div class="drop-menu">
        <el-dropdown>
                <span class="el-dropdown-link">
                    一路向北<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的资料</el-dropdown-item>
                    <el-dropdown-item   ropdown-item divided>退出</el-dropdown-item>
                </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
    name:'Navigator',
    data(){
        return {
            bookType:[{
                id:1,
                name:'首页'
            },{
                id:2,
                name:'新闻资讯'
            },{
                id:3,
                name:'在线读书'
            },{
                id:4,
                name:'每日一读'
            },{
                id:5,
                name:'国学/古籍'
            }],
            input1:' '
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
    .search-box{
        margin-left: 100px;

        /deep/ .el-input__inner{
            background-color: rgba(0, 0, 0, 0);
            border: 1px rgb(214, 201, 201) solid;
            color: #fff;
            border-radius: 20px;
        }
    }
    .login{
        color: #fff;
        cursor: pointer;
        position: absolute;
        right: 50px;
    }
    .drop-menu{
        position: absolute;
        right: 50px;
        .el-dropdown{
            color: #fff;
            cursor: pointer;;
        }
        
    }
    
   
 }
 
</style>