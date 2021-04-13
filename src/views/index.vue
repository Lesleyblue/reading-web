<template>
  <div>
      <Navigator/>
      <div class="main">      
            <Swiper/>   
            <h3 class="title">读书资讯</h3>
            <div class="read-list">
                <div class="read-list-inner" v-for="item in 4" :key=item>
                    <a>
                        <img class="read-img">
                        <div class="media-body">
                            <h3><a>李济与西阴村遗址的发掘：精细…</a></h3>
                            <p class="desc">1926年李济先生对山西夏县西阴村遗址进行的考古发掘，在中国考古学史上占有重要地位…</p>
                            <p>
                                <span class="el-icon-view" style="margin-right:2px"></span>
                                <span style="margin-right:10px">0</span>
                                <span class="el-icon-ice-cream-square"></span>
                                <span>100</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>    
            <h3 class="title">在线读书</h3>
            <div class="online-read">
                <div class="online-read-list"></div>
                <div class="online-read-rank">
                  <ul>
                    <li>1<a href="#">马克思主义</a></li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                </div>
            </div>
            <h3 class="title">国学/古籍</h3>
      </div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Swiper from '../components/Swiper'
export default {
    components: {
        Navigator,
        Swiper
    },
    // data(){
    //     return{

    //     }
    // }
}
</script>

<style lang="less" scoped>
.main{
    display: block;
    width: 1140px;
    margin: 0 auto;
    .title{
        margin-top: 20px;
        font-size: 18px;
    }
    .read-list{
        width: 100%;
        height: 310px;
        border:1px #ddd solid;
        display: flex;
        .read-list-inner{
            width: 25%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            .read-img{
                width: 100%;
                height: 60%;
            }
            .media-body h3{
                color: #4c4c4c;
                font-size: 16px;
                font-weight: bold;
                height: 22px;
                cursor: pointer;
                margin: 0;
            }
            .media-body p.desc {
                    height: 54px;
            }
            .media-body p {
                color: #888;
                line-height: 18px;
                font-size: 12px;
                text-align: left;
                margin-top: 6px;
            }
        }
    }
    .online-read{
        display: flex;
        justify-content: space-between;
        .online-read-list{
            height: 480px;
            width: 68%;
            border:1px #ddd solid;
            box-sizing: border-box;
        }
        .online-read-rank{
            height: 480px;
            width: 30%;
            border:1px #ddd solid;
            box-sizing: border-box;
            ul{
                margin: 0;
                padding: 0;
                color:#5c5050;
                li{
                    list-style: none;
                    height: 35px;
                    line-height: 35px;
                    border-bottom: 1px #f5f2f0 solid;
                    font-size: 14px;
                    padding: 0 20px;
                }
                a{
                    cursor: pointer;
                    text-decoration: none;
                    margin-left: 10px;
                    &:visited{
                      color: #5c5050;
                    }
                }
            }
        }
    }   
}   
</style>