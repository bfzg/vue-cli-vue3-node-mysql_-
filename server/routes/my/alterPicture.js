const express = require('express');
const router = express.Router();
//使用文件上传
const multiparty = require('multiparty')
//引入数据库
const mysql = require('../../mysql/mysql');
//拼接图片路径
let splicAddress = require('../../javascript/splicingAddress.js')

router.post('/alterPicture',(req,res)=>{
    const form = new multiparty.Form();
    form.uploadDir ="public/upload";
    //连接数据库
    connection = mysql.createConnection();
    connection.connect();
    //封装
    function db(sql,uimg,id){
        connection.query(sql,[uimg,id],(err,results)=>{
            if(err) return res.send({status:301,message:err});
            if (results.affectedRows!== 1){
                return res.send({status:301,message:'数据库存储失败!'});
            }
            res.send({status:200,message:'头像更新成功，请刷新!'});
        })
    }

    form.parse(req,(err,data,fileds)=>{
        if(err) return res.send({status:301,message:'上传图片出现错误!'});
        //获取用户id
        let id = data.uid.toString();
        //获取头像存放位置
        let uimg = splicAddress.splicingAddress(fileds.images);
        const sql = 'update user set uimg=? where uid=?';
        db(sql,uimg,id);

    })

    // 关闭数据库连接
    connection.end();
})

module.exports = router;
