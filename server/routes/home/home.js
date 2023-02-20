const express = require('express');
const router = express.Router();
const mysql = require('../../mysql/mysql');

router.get('/homeList',(req,res)=>{
    const sql = 'select * from all_events;'
    //连接数据库
    connection = mysql.createConnection();
    connection.connect();
    connection.query(sql,(err,results)=>{
        if(err) return res.send({status:301,message:err});
        res.send({status:200,message:'获取数据成功!',data:results})
    })
    // 关闭数据库连接
    connection.end();
})

module.exports = router;
