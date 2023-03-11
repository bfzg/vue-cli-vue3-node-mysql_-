import http from '../index';
//获取用户参加活动数据
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
//获取用户发布活动数据
export function getUserPublicInfo(uid){
    return http({
        method:'get',
        url:'/api/mypublic',
        params:{
            uid: uid
        }
    })
}
//删除用户活动
export function postRemoveEvents(data){
    return http({
        method:'post',
        url:'/api/remove',
        data
    })
}
//获取我的评论
export function getCommentList(id){
    return http({
        method:'get',
        url:'/api/myComment',
        params:{
            uid:id
        }
    })
}
