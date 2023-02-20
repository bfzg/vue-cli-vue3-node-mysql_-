import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from "axios";
//element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入jQuery、bootstrap
import 'jquery'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"
// 1. 引入你需要的组件
import getVant from "@/plugins";
// 2. 引入组件样式
import 'vant/lib/index.css';
import { ConfigProvider } from 'vant';
//引入全局样式表
import './assets/css/style.css';
//引入动画库
import VWave from 'v-wave'


const app = createApp(App)
getVant(app)
app.use(store)
app.use(ElementPlus)
app.use(VWave)
app.use(ConfigProvider)
app.use(router).mount('#app')

