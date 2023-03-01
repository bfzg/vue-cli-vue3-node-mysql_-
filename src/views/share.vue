<template>
<div>
  <navs></navs>
  <div class="content_box">
    <div class="center_big_box">
      <userInfo></userInfo>
      <div class="center_small_box wrapper">
          <div class="bs_box">
            <inputBox></inputBox>
            <commentBox></commentBox>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import navs from "@/components/common/nav";
//滚动插件
import Bscroll from 'better-scroll'
import {onMounted, nextTick, ref, reactive, watchEffect} from "vue";
//组件
import inputBox from "@/components/share/inputBox";
import userInfo from "@/components/share/userInfo";
import commentBox from "@/components/share/commentBox";

/*局部滚动*/
let  bscroll = reactive({});
onMounted(()=>{
  //创建betterScroll对象
  bscroll = new Bscroll(document.querySelector('.wrapper'),{
    probeType:3,
    click:true,
    mouseWheel: true
  })
  //触发滚动事件
  bscroll.on('scroll',(position)=>{

  })
})
//监听任何一个变量有变化
watchEffect(()=>{
  nextTick(()=>{
    //重新计算高度
    bscroll && bscroll.refresh();
  })
})
/* end 局部滚动 */


</script>

<style lang="less" scoped>
  .content_box{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/background.png");

  }
  .center_big_box{
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding-top:10px ;
  }
  .center_small_box{
    width: 700px;
    height: 100vh;
    overflow: hidden;
    margin: 0 auto;
    .bs_box{
      width: 100%;
      overflow: hidden;
    }
  }
</style>
