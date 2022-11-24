<template>
<div>
  <div class="shut_down">
    <button @click="gohome" type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <section>
    <form class="row g-3">
        <div class="col-md-12">
          <input type="text" class="form-control" placeholder="姓名" aria-label="First name">
        </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">邮箱</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-12 col-md-6">
        <label for="inputAddress" class="form-label">比赛地点</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="格式：学校/个人-市-校园-详细地点">
      </div>
      <div class=" form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">活动详情</label>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">类型</label>
        <select id="inputState" class="form-select">
          <option selected>学校</option>
          <option>个人</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">上传</button>
      </div>

    </form>
  </section>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from "@/router";

    const gohome = () => {
      router.push('/');
    }

</script>

<style lang="less" scoped>
.shut_down{
  height: 50px;
  width: 100%;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  padding-left: 25px;
}
section{
  padding: 50px;
}
</style>
