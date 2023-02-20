const user={
    state:{
        loginStatus:false,    //登录状态
        // token: "",   //token
        userInfo: {},   //用户登录信息
        ingo:'fdsa'
    },
    getters:{

    },
    mutations:{
    //定义mutations 用于修改状态（同步）
        updateuser(state,user){
            state.loginStatus = true;
            state.userInfo = user;
            //持久化存储  本地存储
            localStorage.setItem('teaUserInfo',JSON.stringify(user));
        },
        //读取
        inituser(state){
            let userInfo = JSON.parse(localStorage.getItem('teaUserInfo'));
            if(userInfo){
                state.loginStatus = true;
                // state.token = userInfo.token;
                state.userInfo = userInfo;
            }
        },
        //修改登录状态
        displaylogin(state,disBtn){
            state.loginStatus = disBtn;
        }
    },
}
export default user;
