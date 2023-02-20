import http from '../index';

export function getPersonData(){
    return http({
        method:'get',
        url:'/api/personal'
    })
}
