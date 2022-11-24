<template>
 <div>
     <foot></foot>
   <section>
     <hr>
     <br>
     <h3>活动</h3>
     <!-- 选项卡-->
     <div class="x_box">
       <div class="overflow-hidden  row row-cols-2 ">
           <div v-for="(item,index) in list" :key="index"  class=" row gx-5 col card text-center item" style="width: 18rem;">
             <div class="card-body">
               <h5 class="card-title">{{item.title}}</h5>
               <p class="card-text">{{item.content}}</p>
               <button @click="open(item)" type="button" class="btn btn-primary">
                 查看详情
               </button>
             </div>
           </div>
       </div>
     </div>

     <!--     模态框-->
   </section>
 </div>
</template>

<script>
import foot from "@/common/nav";
import { ElMessageBox } from 'element-plus'
export default {

  name: "home",
  components:{
    foot
  },
  setup(){
    let list = [
      {title:'校园摄影大赛1',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛2',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛3',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛4',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
    ];
    const open = (item) => {
      ElMessageBox.alert(
          `<div style="word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 100; /* 这里是超出几行省略 */overflow: hidden;"> ${item.content}<br><br><br><span>发起人:${item.sponsor}</span><br><span>联系方式:${item.emali}</span> <br><span>部门:${item.department}</span> </div>`,
          item.emali,
          {
            dangerouslyUseHTMLString: true,
          }
      )
    }
    return{
      list,
      open
    }
  }
}
</script>

<style lang="less" scoped>
.card{
  box-shadow: 5px 5px 10px #888888;
}

.box_cont{
  margin-left: 20px;
  span{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
  .text-cent{
   margin-top: 40px;
  }
}
section{
  padding: 0 50px;
}
.dropdown{
  margin:20px 0;
}
.t_box{
  .t_care{
    margin: 10px 10px;
    height: 200px;
    background-color: #4158D0;
    border: none;
    color:#eee;
    transition: all 0.7s;
    cursor:pointer;
  }
  .t_care:hover{
    background-color: #8EC5FC;
    color: #222;
  }
}
.x_box{
  .item{
    margin: 10px 10px;
    background-color: #eeeeee;
    color: #222;
    transition: all 0.4s;
    cursor:pointer;
  }
  .item:hover{
    background-color: #ffffff;
    color: #000;
  }
}
.card-text{
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 这里是超出几行省略 */
  overflow: hidden;
}
</style>
