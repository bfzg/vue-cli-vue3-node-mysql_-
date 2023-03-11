//对图片进行处理 拼接路径
function splicingAddress (data){
    let baseUrl = "http://192.168.31.233:3000";
    let url=[];
    data.forEach(item=>{
        url.push(baseUrl+item.path.slice(6));
    })
    return url;
}

module.exports={
    splicingAddress
}
