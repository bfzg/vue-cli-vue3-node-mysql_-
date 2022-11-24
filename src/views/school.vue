<template>
<div>
  <foot></foot>
  <section>
    <div class="font">
      我的院校： <span>安徽新闻出版职业技术学院</span>
    </div>
    <div class="body">
      <div class="container" >
        <div  @click="open" v-for="(item,index) in list" :key="index" ref="box" class="box">
          <h5>{{item.title}}</h5>
         <div>
           <div class="content">
             <span>{{item.content}}</span>
           </div>
           <div class="lsd">
             <span>限定人数: {{item.limit}}</span>
             <span> 发布人：{{item.sponsor}}</span>
             <span>{{item.department}}</span>
           </div>
         </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import foot from "@/common/nav";
import {onMounted, ref, reactive, toRefs} from "vue";
import { ElMessageBox } from 'element-plus'
export default {
  name: "school",
  setup(){
    const list = [
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',limit:'50'},
    ];
    const state = reactive({
        box:null,
    });
    let check = function (){
      state.box.forEach((box)=>{
        const windowHeight = window.innerHeight;
        const rect = box.getBoundingClientRect();
        const y = rect.y;
        if (y > windowHeight - 100) {
          box.classList.remove("show");
        } else {
          box.classList.add("show");
        }
      })
    }
    onMounted(() => {
      check();
      window.addEventListener('scroll',check)
    })
    //点击模态框
    const open = () => {
      ElMessageBox.alert(
          '<strong><h3>摄影大赛</h3><i>这是比赛详情</i><br><span>加qq：1445237848</span></strong>',
          '详情',
          {
            dangerouslyUseHTMLString: true,
          }
      )
    }
    return{
      ...toRefs(state),
      list,
      open
    }
  },
  components:{
    foot
  }
}
</script>

<style lang="less" scoped>
.modal-dialog{
  height: 100%;
}
.font{
  margin-bottom: 10px;
}
section{
  padding: 50px;
}
* {
  margin: 0;
  padding: 0;
}

.body{
  width: 100%;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 2em;
  margin: 40px;
}

.container {
  --duration: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
}

.container .box {
  height: 150px;
  width: 90%;
  margin: 12px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px;
  transform: translateX(-100vw);
  transition: transform var(--duration);
  color: #333;
  cursor:pointer;
  //transition: color 0.5s;
  //transition: background-color 0.5s;
  h5{
    margin-bottom: 10px;
    margin-left: 10px;
    color:#8b614d;
  }
  .content{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
    span{
      margin-left: 40px;
    }
  }
  .lsd{
    margin-top: 5px;
    float: right;
    span{
      margin-right:15px;
    }
    span:nth-child(1){
      color:#999;
    }
    span:nth-child(2){
      color:#dad4cb;
    }
    span:nth-child(3){
      color:#dad4cb;
    }
  }
}

.container .box:hover{
  color:#222;
  background-color: #66a9c9;
}
.container .box:active{
  background-color: #93b5cf;
  color: #333;
}

.container .box:nth-of-type(2n) {
  transform: translateX(100vw);
}

.container .box.show {
  transform: translateX(0vw);
}
</style>
