import http from '../index';

export function getUserJoinInfo(data){
    return http({
        method:'get',
        url:'/api/myJoin',
        params: {
            uid:data.uid,
            uname:data.uname
        }
    })
}
