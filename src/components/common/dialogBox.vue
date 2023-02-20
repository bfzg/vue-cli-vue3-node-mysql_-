<template>
<div>
  <el-dialog
      v-model="dialogShow"
      :title="props.value.eventsname"
      width="50%"
      align-center
      draggable
      :show-close=false
      :close-on-click-modal="false"
  >
    <div>
      <div class="content">
          <p>{{props.value.detailed}}</p>
      </div>
      <div class="user_info">
        <li>联系方式: {{props.value.email}}</li>
        <li>发起人: {{props.value.uname}}</li>
        <li>地点: {{props.value.address}}</li>
        <li>活动时间: {{props.value.starttime}} ----- {{props.value.shuttime}}</li>
        <li>系部: {{props.value.department}}</li>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success">下载文件</el-button>
        <el-button @click="dialogBoxHide">确定</el-button>
      </span>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import { defineProps,computed} from "vue";
//vuex
import {useStore} from "vuex";

//控制对话框的显示与隐藏
let props = defineProps(['value'])

//创建vux实例
let {commit,state} = useStore();
let dialogShow = computed(()=> state.dialogBox.dialogShow);

//确定按钮
const dialogBoxHide = ()=>{
  commit('ctrlDialogShow',false);
}
</script>

<style scoped>

</style>
