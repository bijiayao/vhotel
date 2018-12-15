<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{

  }
}
</script>

<style>
html {
}
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
.popper__arrow {
    display: none !important;
}
.el-input__inner {
    border-radius: 0;
    border: .1rem solid #f9f2f2;
}
.el-select-dropdown {
  margin: 0 !important;
}
</style>
