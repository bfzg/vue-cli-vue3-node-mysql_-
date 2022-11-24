<template>
<div class="foot">
<!--  导航栏-->
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
    <div class="offcanvas-header box_search">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">搜索</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
<!--    模态框-->
    <hr>
    <div class="offcanvas-body">
      <search></search>
      <div class="row mbox">
<!--        这是搜索结果-->
        <div class=" i col-sm-6" v-for="(item,index) in list" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.content}}
                <br>
                <span>联系人:{{item.author}}</span>
                <br>
                <span>邮箱:{{item.emali}}</span>
              </p>
              <a href="javascript:" @click="open(item)" class="btn btn-primary">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import router from "@/router";
import search from "@/components/search";
import { ElMessageBox } from 'element-plus'
export default {
  name: "foot",
  setup(){
    // 搜索结果
    let list = [
      {title:'计算机编程大赛',content:'fhdsiafhdsiofhdsiohfosahoifhdsoiahfodisdfasfdsfdsafdsafdsafdsafdasdfsafdsafdsafsahfoidshfoidshofidsh',author:'元',department:'机电信息系',emali:'1445237848@163.com'},
      {title:'计算机编程大赛',content:'fhdsiafhdsiofhdsiohfosahoifhdsoiahfodisahfoidshfoidshofidsh',author:'元',department:'机电信息系',emali:'1445237848@163.com'},
    ]
    //弹出框
    const open = (item) => {
      ElMessageBox.alert(
          `<div style="word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 100; /* 这里是超出几行省略 */overflow: hidden;"> ${item.content}<br><br><br><span>发起人:${item.sponsor}</span><br><span>联系方式:${item.emali}</span> <br><span>部门:${item.department}</span> </div>`,
          item.emali,
          {
            dangerouslyUseHTMLString: true,
          }
      )
    }

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
      goupload,
      list,
      open
    };
  },
  components:{
    search
  }
}
</script>

<style lang="less" scoped>
.offcanvas-header{
  margin-bottom: 130px;
}
.box_search{
  height: 100px;
  overflow: hidden;
  width: 100%;
}
.offcanvas.offcanvas-top{
  height: 100%!important;
}
.card{
  //height: 100%!important;
}
.btn{
  margin-left: 10px !important;
}
.i{
  margin-bottom: 15px;
}
.mbox{
  overflow: hidden;
  z-index: -2;
}

</style>
