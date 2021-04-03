<template>
  <div id="app">
    <Navigator/>
    <div class="a">
      <Register/>
    </div>
   
  </div>
</template>

<script>
import Navigator from './components/Navigator'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Navigator,
    Register
  },
  data() {
    return {
      input: '',
    }
  },
  created() {
   
  },
  computed: {
  
  },
  methods: {
  }
}
</script>

<style lang="less">
body{
  margin: 0;
}
.a{
  margin: 0 auto;
  width: 500px;
  // height: 600px;
  // background-color: #eee;
  // border: 1px #ccc solid;
}
</style>
