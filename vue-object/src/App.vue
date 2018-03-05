<template>
  <div id="app">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             text-color="#fff" >
      <div class="elmenu">
        <el-menu-item index="6" ><router-link to="/login" class="a">登录</router-link></el-menu-item>
        <el-menu-item index="7" ><router-link to="/register" class="a">注册</router-link></el-menu-item>
      </div>
    </el-menu>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-item.is-active{color: #fff;}
  .elmenu{float: right;}
  .el-menu--horizontal .el-menu-item{height: 0.56rem;line-height:  0.56rem; }
  .el-menu-demo{height: 0.56rem;width:100%;position: absolute;top: 0;left: 0;z-index: 111;background: none;}
  a{text-decoration: none;font-size: 0.1rem;}
  .el-menu--horizontal .el-menu-item:focus, .el-menu--horizontal .el-menu-item:hover {background-color: #004e96;}

</style>
