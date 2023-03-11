<template>
  <div>
    <titleList titles="我的评论"></titleList>
    <Lines></Lines>
    <div class="comment_box">
      <!--    表格区域-->
      <el-table :data="tableData"  stripe height="400px">
        <el-table-column type="index" />
        <el-table-column prop="comment" label="发表的评论" width="200" />
        <el-table-column prop="img" label="图片地址" width="200" />
        <el-table-column label="操作" width="150" >
<!--          <template  #default="scope">-->
<!--            <el-button @click="removeEvents(scope.row)" type="danger" :icon="Delete" circle />-->
<!--          </template>-->
        </el-table-column>
      </el-table>
      <!--    表格区域 end-->
    </div>
  </div>
</template>

<script setup>
import titleList from "@/components/my/title"
import Lines from "@/components/common/lines";
import {getCommentList} from "@/request/my/mys";
import {useStore} from "vuex";
import {ref, onMounted, toRaw, computed} from "vue";

let {state} = useStore();
let userInfo = toRaw(computed(() => state.user.userInfo).value);

let tableData =ref(null);
onMounted( async ()=>{
  let {data:res} = await getCommentList(userInfo[0].uid);
  tableData.value = res.data;
})

</script>

<style scoped>

</style>
