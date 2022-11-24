import {Button, Search,Tabbar, TabbarItem ,ConfigProvider} from "vant";
let plugins=[
    Button, Search,Tabbar, TabbarItem,ConfigProvider
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item);
    })
}
