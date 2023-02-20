import http from '../index';

export function getSchoolData(){
    return http({
        method:"get",
        url:'/api/school'
    })
}
