<template>
<div class="foot">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="javascript:">Campus activities</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="javascript:" @click="gohome">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="goschool">学校活动</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:" @click="goperson">个人活动</a>
          </li>
        </ul>
        <div class="d-flex">
          <div class="login">
            <button type="button" class="btn btn-primary" @click="login">登录</button>
            <button type="button" class="btn btn-danger" @click="goupload">上传</button>
          </div>
            <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" type="submit">搜索</button>
        </div>
      </div>
    </div>
  </nav>
<!--  搜索框-->
  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">搜索</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <search></search>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import router from "@/router";
import search from "@/components/search";
export default {
  name: "foot",
  setup(){
    //路由区域
    let gohome = function (){
      router.push('/');
    };
    let goschool = function (){
      router.push('/school');
    }
    let goperson = function (){
      router.push('/person')
    }
    let login = function (){
      router.push('/login')
    }
    let goupload = function (){
      router.push('/upload')
    }
    return {
      gohome,
      goschool,
      goperson,
      login,
      goupload
    };
  },
  components:{
    search
  }
}
</script>

<style lang="less" scoped>

.btn{
  margin-left: 10px !important;
}
</style>
