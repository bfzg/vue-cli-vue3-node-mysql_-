import http from '../index';
//这是搜索
export function getSearch(text){
    return http({
        method:'GET',
        url:'你看着给',
        params:{
            text:text
        }
    })
}
