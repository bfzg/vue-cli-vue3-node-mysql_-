<template>
<div>
  <titleList titles="我发布的"></titleList>
  <Lines></Lines>
  <div class="content_box">
    <!--    表格区域-->
    <el-table :data="tableData"  stripe height="400px">
      <el-table-column type="index" />
      <el-table-column prop="eventsname" label="活动名称" width="200" />
      <el-table-column prop="email" label="联系方式" width="300" />
      <el-table-column prop="eventsname" label="操作" width="150" >
        <template  #default="scope">
          <el-button type="primary" :icon="Edit" circle />
          <el-button @click="removeEvents(scope.row)" type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
    <!--    表格区域 end-->
  </div>
</div>
</template>

<script setup>
import titleList from "@/components/my/title"
import Lines from "@/components/common/lines";
import {Delete,Edit} from '@element-plus/icons-vue'
import {useStore} from "vuex";
import {ref, onMounted, toRaw, computed} from "vue";
import {ElMessage} from 'element-plus'
import {getUserPublicInfo,postRemoveEvents} from "@/request/my/mys";

let tableData =ref(null);

//获取数据
let {state,commit} = useStore();
let user = toRaw(computed(() => state.user.userInfo).value);
onMounted(async ()=>{
  let {data:res} = await getUserPublicInfo(user[0].uid);
    tableData.value=res.data;
    let i = res.data.length;
    commit("getUserPublishNumber",i);
})
//删除功能
const removeEvents = async function (data){
  let datas = {
    uid:data.uid,
    tid:data.id
  };
  let {data:res} = await postRemoveEvents(datas);
  if(res.status !== 200){
    ElMessage.error("删除失败");
  }
  ElMessage.success(res.message);
  location.reload();  //刷新浏览器
}
</script>

<style lang="less" scoped>

</style>
