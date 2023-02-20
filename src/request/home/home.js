import http from '../index';

export function getHomeList(){
    return http({
        method:'get',
        url:'/api/homeList'
    })
}
