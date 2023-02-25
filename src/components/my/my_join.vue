<template>
<div class="my_join">
  <titleList titles="我参加的"></titleList>
  <Lines></Lines>
  <div class="content_box">
<!--    表格区域-->
    <el-table :data="tableData" style="width: 100%" height="250">
<!--      <el-table-column fixed prop="date" label="日期" width="100" />-->
      <el-table-column prop="eventsname" label="活动名称" width="300" />
      <el-table-column prop="uemail" label="联系方式" width="300" />
<!--      <el-table-column prop="city" label="发布人" width="100" />-->
<!--      <el-table-column prop="address" label="地址" width="250" />-->
<!--      <el-table-column prop="zip" label="文件" width="80" />-->
    </el-table>
    <!--    表格区域 end-->

  </div>
</div>
</template>

<script setup>
import titleList from "@/components/my/title"
import Lines from "@/components/common/line";
//axios
import {getUserJoinInfo} from "@/request/my/mys";
//vuex
import {useStore} from "vuex";
import {ref, onMounted, toRaw, computed} from "vue";
import {ElMessage} from 'element-plus'

let tableData = ref(null);
/*请求数据*/
let {state} = useStore();
let user = toRaw(computed(() => state.user.userInfo).value);
onMounted( async ()=>{
  let data ={
    uid:user[0].uid,
    uname:user[0].uname
  };
 let {data:res} = await getUserJoinInfo(data);
 if(res.status !== 200){
   ElMessage.error('获取用户信息失败');
 }else{
   tableData.value=res.data
   console.log(tableData.value);
 }
})
/*请求数据 end*/
</script>

<style lang="less" scoped>
.my_join{
  height: 100%;
}
.content_box{
  padding: 10px 15px;
  height: 100%;
}
//<!--    表格区域-->
.el-table{
  height: 100%;
}
</style>
