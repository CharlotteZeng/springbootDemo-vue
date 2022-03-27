<template>
    

  <div>
  <el-container>
    <el-header><h1>欢迎你</h1></el-header>
    <el-row class="mb-4">
    	<el-button type="primary" @click="handleClick">Primary</el-button>
    </el-row>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>
<script>

    export default {
      methods:{
         handleClick:function(){
          this.$router.push({path: '/'});
        }
      }
    }
</script>
<style>
</style>
