<template>
  <div>
    <div class="search-box">
      <input ref="input_txt" v-model="gettxt" class="search-txt" type="text" placeholder="Type to search" />
      <a class="search-btn" href="#">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, reactive} from "vue";
import {getSearch} from "@/request/api/search";

export default {
  name: "search",
  setup(){
    let gettxt = ref('').value;
    // getSearch(gettxt);

    onMounted(()=>{
      let input_txt = ref([]);
      console.log(input_txt);
      let ipt_w = (text)=>{
        if(text != ''){
        }
      }
    })
  }
}
</script>

<style scoped>
.btn-close{
  margin: 30px 0px 0px 30px;
}
*{
  box-sizing: content-box!important;
}

.search-box {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -15%);
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}
.search-btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  text-decoration: none;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
}
.search-box:hover > .search-txt {
  width: 240px;
  padding: 0 6px;
}
.search-box:hover > .search-btn {
  background: white;
}
</style>
