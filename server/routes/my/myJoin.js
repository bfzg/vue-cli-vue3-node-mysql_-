const express = require('express');
const router = express.Router();
//引入数据库
const mysql = require('../../mysql/mysql');

router.get('/myJoin',(req,res)=>{
    let userInfo = req.query;
    //连接数据库
    connection = mysql.createConnection();
    connection.connect();
    let sql = 'select * from events_join where uid=? and uname=?';
    connection.query(sql,[userInfo.uid,userInfo.uname],(err,results)=>{
        if(err) return console.log(err);
        if(results.length !== 0){
            res.send({status:200,data:results});
        }else {
            res.send({status:200,message:'你还没有参加任何活动!'});
        }
    })
    // 关闭数据库连接
    connection.end();
});

module.exports = router;
