const express = require('express');
const router = express.Router();
//导入数据库
const mysql = require('../../mysql/mysql');
router.get('/personal',(req,res)=>{
    const sql = 'select * from personal';
    //连接数据库
    connection = mysql.createConnection();
    connection.connect();
    connection.query(sql,(err,results)=>{
        if(err) return res.send({status:301,message:err});
        res.send({status:200,message:'数据请求成功!',data:results});
    })
    // 关闭数据库连接
    connection.end();
})


module.exports = router;
