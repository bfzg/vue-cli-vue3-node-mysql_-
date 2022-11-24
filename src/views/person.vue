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
         <swiper-slide>
           <div class="tbox">
             <h5>标题</h5>
           </div>
           <br>
             <div class="ibox">

               <img src="./1.jpg" alt="">

               <div class="itext">
               <h5>yuan</h5>
               <span>邮箱:1445237848</span>
               </div>
             </div>
           <div class="content">
             <div>
               <span>&nbsp;&nbsp; fdsnifdhsaioufhdshfdoishfodshfiodshaiofhdoshfodshaoifhdosiahfodshfoidshafiodhsoiafhdsoiafhwoihfoiewhfiowehfoiehfoiweh</span>
             </div>
           </div>
         </swiper-slide>
         <swiper-slide>Slide 2</swiper-slide>
         <swiper-slide>Slide 3</swiper-slide>
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
    return {
      modules: [EffectCards],
    };
  },
}
</script>

<style src="../components/style.css" scoped>

</style>
