<template>
<div>
  <foot></foot>
   <section>
<!--     <swiper></swiper>-->
     <div>
       <swiper
           :effect="'cards'"
           :grabCursor="true"
           :modules="modules"
           class="mySwiper"
       >
         <swiper-slide v-for="(item,index) in list" :key="index">
           <div class="tbox">
             <h5>{{ item.title }}</h5>
           </div>
           <br>
             <div class="ibox">
               <img src="./1.jpg" alt="">
               <div class="itext">
               <h5>发布人:{{item.sponsor}}</h5>
               <span>邮箱:{{item.emali}}</span>
               </div>
             </div>
           <div class="content">
             <div>
               <span>&nbsp;&nbsp;{{item.content}}</span>
             </div>
           </div>
         </swiper-slide>
       </swiper>
     </div>
   </section>
</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import foot from "@/common/nav";
export default {
  name: "person",
  components:{
    foot,
    Swiper,
    SwiperSlide,
  },
  setup() {
    let list = [
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
      {title:'校园摄影大赛',content:'本次比赛所有在校生均可参赛sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss，比赛地点在校内，作品提交为线上提交，评审团：张三，李四，王二，',department:'机电信息系',sponsor:'元',emali:'1445237848@163.com'},
    ]
    return {
      modules: [EffectCards],
      list
    };
  },
}
</script>

<style src="../components/style.css" scoped>

</style>
