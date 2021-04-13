<template>
    <div class="box">
        <div class=box-r>
            <Register/> 
        </div>
         
    </div>
</template>

<script>
import Register from '../components/Register'
export default {
    components:{
        Register
    }
}
</script>

<style>
.box{
    background:url('../assets/login.jpg') no-repeat;
    background-size:100% auto;
    height: 100%;
}
.box-r{
    width: 500px;
    background-color: rgba(255,255,255, .6);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>