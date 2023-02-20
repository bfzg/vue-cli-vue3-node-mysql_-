<template>
  <router-view/>
</template>
<script>
import {useStore} from "vuex";
export default {
  setup(){
    let {commit} = useStore();
    commit("inituser");
  }
}
</script>
<style lang="less">
</style>
