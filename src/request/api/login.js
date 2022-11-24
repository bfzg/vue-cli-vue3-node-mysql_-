import http from '../index';
export function postlogin(uname,pwd){
    return http({
        method:"post",
        url:'/login',
        data:{
            uname:uname,
            pwd:pwd
        }
    })
}
