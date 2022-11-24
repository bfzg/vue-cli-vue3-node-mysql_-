<template>
 <div>
     <foot></foot>
   <section>
<!--     排列顺序-->
       <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           排序方式
         </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><a class="dropdown-item" href="#">默认</a></li>
           <li><a class="dropdown-item" href="#">最受欢迎</a></li>
           <li><a class="dropdown-item" href="#">最新</a></li>
         </ul>
       </div>
     <hr>
<!--     推荐-->
     <h3>推荐</h3>
     <div class="t_box">
       <div class="overflow-hidden  row row-cols-2 ">
         <div class="card text-center t_care" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class="card text-center t_care" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class="card text-center t_care" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class="card text-center t_care" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
       </div>
     </div>
     <br>
     <h3>活动</h3>
     <!-- 选项卡-->
     <div class="x_box">
       <div class="overflow-hidden  row row-cols-2 ">
           <div class=" row gx-5 col card text-center item" style="width: 18rem;">
             <div class="card-body">
               <h5 class="card-title">这是一个标题</h5>
               <p class="card-text">这是描述文本太长了，前端真难写</p>
               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 查看详情
               </button>
             </div>
           </div>
         <div class=" row gx-5 col card text-center item" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class=" row gx-5 col card text-center item" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class=" row gx-5 col card text-center item" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
         <div class=" row gx-5 col card text-center item" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">这是一个标题</h5>
             <p class="card-text">这是描述文本太长了，前端真难写</p>
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               查看详情
             </button>
           </div>
         </div>
       </div>
     </div>

     <!--     模态框-->
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-xl">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">活动</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             <div>
               <h5>这是标题</h5>
               <div class="box_cont">
                 <span>fhdsuiahfiwfuiegfiugfiewguifgiufgewiagfuiwgfuiewgfiweugfiewgfiuwegfiewu</span>
                 <div class="text_cont">
                   <span>联系人：元</span>
                   <span>邮箱：13075035453@163.com</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
             <button type="button" class="btn btn-primary">报名</button>
           </div>
         </div>
       </div>
     </div>
   </section>
 </div>
</template>

<script>
import foot from "@/common/nav";
export default {

  name: "home",
  components:{
    foot
  },
  setup(){

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

</style>
