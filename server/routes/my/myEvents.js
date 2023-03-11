const express = require('express');
const router = express.Router();
//引入数据库
const mysql = require('../../mysql/mysql');

//我参加的
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

//我发布的
router.get('/mypublic',(req,res)=>{
    //连接数据库
    let connection = mysql.createConnection();
    connection.connect();
    let sql = 'select * from all_events where uid=?';
    connection.query(sql,req.query.uid,(err,results)=>{
        if(err) return console.log(err);
        if(results.length == 0){
            return;
        }
        res.send({status:200,data:results});
    })
    // 关闭数据库连接
    connection.end();
})

//删除操作
router.post('/remove',(req,res)=>{
    console.log(req.body);
    //连接数据库
    let connection = mysql.createConnection();
    connection.connect();
    let sql = "delete from all_events where uid=? and id=?";
    connection.query(sql,[req.body.uid,req.body.tid],(err,results)=>{
        if(err) return console.log(err);
        console.log(results);
        if(results.affectedRows != 0){
            return res.send({status:200,message:"删除成功!"});
        }else{
           return res.send({status:301,message:"删除成功!"});
        }
    })
    // 关闭数据库连接
    connection.end();
})

//我的评论
router.get('/myComment',(req,res)=>{
    console.log(req.query);
    let sql = 'select * from dynamic where uid=?';
    let connection = mysql.createConnection();
    connection.connect();
    connection.query(sql,req.query.uid,(err,results)=>{
        if(err) return console.log(err);
        res.send({status:200,data:results});
    })
    connection.end();
})
module.exports = router;
