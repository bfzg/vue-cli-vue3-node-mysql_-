<template>
  <div>
    <foot></foot>
    <el-card class="box-card">
      <div class="row">
        <div class="col">
          <!--          图片区-->
          <div class="text-center mx-auto" v-for="item in user">
            <el-avatar :size="50" :src="item.uimg" />
            <p @click="replaceImg">更换头像</p>
            <h6>{{ item.uname }}</h6>
            <span class="user_txt">{{item.uintroduction}}</span>
          </div>
          <!--          列表区-->
          <div>
            <ul class="nav flex-column nav-pills nav-fill">
              <li class="nav-item" v-for="item in listName" :key="item.id">
                <a @click="selectList(item.id)" id="i" :class="['nav-link',index === item.id ? 'active':'']"
                   aria-current="page" href="javascript:;">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <!--          按钮区-->
          <div class="btnBox">
            <button type="button" class="btn btn-danger" @click="quit">退出登录</button>
          </div>
        </div>
        <!--        右侧内容区-->
        <div class="col-8">
          <myPublishEvents v-if="index === 0 ? true : false"></myPublishEvents>
          <myAttendEvents v-if="index === 1 ? true : false"></myAttendEvents>
          <myDate v-if="index === 2 ? true : false"></myDate>
        </div>
      </div>

    </el-card>
    <!--    更换头像对话框-->
    <el-dialog
        v-model="centerDialogVisible"
        title="更换头像"
        width="30%"
        center="center"
    >

        <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:3000/alterPicture"
            :data="uploadData"
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess"
        >
            <el-icon class="avatar-uploader-icon">
              <Plus/>
            </el-icon>
        </el-upload>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
//标题栏
import foot from '../components/common/nav';
//路由
import router from "@/router";
//vuex
import {useStore} from "vuex";
import {computed, toRaw, reactive, ref} from "vue";

//我发布的组件
import myPublishEvents from "@/components/my/myPublishEvents";
//我参加的组件
import myAttendEvents from "@/components/my/myAttendEvents";
//我的信息组件
import myDate from "@/components/my/myDate";

// element 组件
import {ElMessage} from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
export default {
  name: "my",
  components: {
    foot,
    myPublishEvents,
    myAttendEvents,
    myDate,
    Plus
  },
  setup() {
    //实例化vuex
    let {state} = useStore();
    //渲染用户信息
    let user = toRaw(computed(() => state.user.userInfo).value);
    //退出登录功能
    const quit = function () {
      localStorage.removeItem('teaUserInfo');
      localStorage.removeItem('token')
      router.push('/');
    }

    //点击列表功能
    //点击列表跳转不同页面
    let listName = ref([
      {id: 0, name: '我发布的活动', class: 'active'},
      {id: 1, name: '我参加的活动'},
      {id: 2, name: '我的信息'}
    ]);

    let index = ref(0);

    // 点击按钮添加class
    function selectList(id) {
      index.value = id;
    }

    //更换头像功能
    //控制对话框的显示与隐藏
    let centerDialogVisible = ref(false);
    const replaceImg = function () {
      centerDialogVisible.value = true;
    }
    //上传之前判断是否为图片
    const beforeAvatarUpload = function (rawFile) {
      if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('上传只能为image/jpeg');
        return false
      } else if (rawFile.size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 > 10) {
        ElMessage.error('上传的图片大小在10MB内');
        return false
      }
      user.forEach(i=>{
       uploadData.uid = i.uid
      })
      return true
    }
    // 用户id
    let uploadData = reactive({
      uid:''
    })
    //上传成功后的回调函数
    const handleAvatarSuccess = function (res){
      console.log(res);
    }
    return {
      quit,
      user,
      // 点击列表
      listName, selectList, index,
      //更换头像
      replaceImg, centerDialogVisible,beforeAvatarUpload,uploadData,handleAvatarSuccess
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-dialog {
  z-index: 999;
}

.row {
  background-image: url("../../public/image/i.jpg");
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;

  .col {
    box-sizing: border-box;
    border-radius: 10px 0 0 10px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    backdrop-filter: blur(10px);
  }

  .col-8 {
    border-radius: 0 10px 10px 0;
    background: rgba(72, 70, 70, 0.9);
  }

  .text-center {
    width: 150px;
    height: 150px;
    margin: 10px 0;
    cursor: pointer;

    p {
      font-size: 8px;
    }
    img{
      width: 100px;
      header:100px;
      border-radius: 50%;
    }

    h6 {
      margin-top: 15px;
      color: #ffffff;
      background-color: rgba(5, 5, 5, 0.5);
      border-radius: 5px;
      padding: 5px 0;
      clear: both;
    }
    .user_txt{
      background-color: rgba(5, 5, 5, 0.5);
      border-radius: 5px;
      color: #ffffff;
      font-size: 10px;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* 这里是超出几行省略 */
      overflow: hidden;
    }
  }

  .btnBox {
    text-align: center;
    margin: 10px 0;
  }
}

.box-card {
  margin: 20px;
}

.el-card {
  border-radius: 10px;

}
</style>
