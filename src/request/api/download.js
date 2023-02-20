import http from '../index';

export function download(data){
    return http({
        method:'get',
        url:'/download',
        params: {
            id:data
        }
    })
}
