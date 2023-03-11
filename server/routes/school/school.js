const express = require('express');
const router = express.Router();
//引入数据库
const mysql = require('../../mysql/mysql');
router.get('/school',(req,res)=>{
    const sql ='select * from all_events where type="school"';
    //连接数据库
    let connection = mysql.createConnection();
    connection.connect();
    connection.query(sql,(err,results)=>{
        if(err) return res.send({status:301,message:err});
        res.send({status:200,message:'获取数据成功',data:results});
    })
    // 关闭数据库连接
    connection.end();
})

module.exports = router;
