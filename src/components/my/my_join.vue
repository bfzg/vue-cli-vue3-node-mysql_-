<template>
<div class="my_join">
  <titleList titles="我参加的"></titleList>
  <Lines></Lines>
  <div class="content_box">
<!--    表格区域-->
    <el-table :data="tableData" stripe height="400px">
      <el-table-column fixed prop="time" label="结束日期" width="100" />
      <el-table-column prop="eventsname" label="活动名称" width="100" />
      <el-table-column prop="uemail" label="联系方式" width="180" />
      <el-table-column prop="tname" label="发布人" width="100" />
      <el-table-column prop="address" label="地址" width="120" />
      <el-table-column prop="file" label="文件" width="200" />
    </el-table>
    <!--    表格区域 end-->

  </div>
</div>
</template>

<script setup>
import titleList from "@/components/my/title"
import Lines from "@/components/common/lines";
//axios
import {getUserJoinInfo} from "@/request/my/mys";
//vuex
import {useStore} from "vuex";
import {ref, onMounted, toRaw, computed} from "vue";
import {ElMessage} from 'element-plus'

let tableData = ref(null);
/*请求数据*/
let {state,commit} = useStore();
let user = toRaw(computed(() => state.user.userInfo).value);
onMounted( async ()=>{
  let data ={
    uid:user[0].uid,
    uname:user[0].uname
  };
 let {data:res} = await getUserJoinInfo(data);
   tableData.value=res.data
   let i = res.data.length;
   commit("getUserJoinNumber",i);
})
/*请求数据 end*/
</script>

<style lang="less" scoped>

</style>
