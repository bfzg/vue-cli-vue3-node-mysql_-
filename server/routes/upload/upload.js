const express = require('express');
const router = express.Router();
//使用文件上传
const multiparty = require('multiparty');
//使用数据库
const mysql = require('../../mysql/mysql');
//文件上传
router.post('/upload', (req, res) => {
    const form = new multiparty.Form();
    form.uploadDir = "public/upFile";
    form.parse(req, (err, data, fileds) => {
        if (err) return res.send({status: 302, message: '文件上传失败!'});
        // 接收到的表单数据
        let newData = {
            eventsname: data.eventsname[0],
            email: data.email[0],
            uname: data.uname[0],
            detailed: data.detailed[0],
            address: data.address[0],
            starttime: data.starttime[0],
            shuttime: data.shuttime[0],
            type: data.type[0],
            department: data.department[0],
            files: []
        };
        //遍历发来的文件
        var sql;
        var sql2;
        if (fileds.files !== undefined) {
            fileds.files.forEach((i) => {
                //补全文件路径
                var uimg = "http://127.0.0.1:3000/" + i.path.slice(6);
                newData.files.push(uimg);
            })
            sql = `insert into ${newData.type} values(?,?,?,?,?,?,?,?,?,?,?)`;
            sql2 = 'insert into all_events values(?,?,?,?,?,?,?,?,?,?,?)';
        }
        else {
            sql = `insert into ${newData.type} values(?,?,?,?,?,?,?,?,?,?,null)`;
            sql2 = 'insert into all_events values(?,?,?,?,?,?,?,?,?,?,null)';
        }
        //连接数据库
        connection = mysql.createConnection();
        connection.connect();
        connection.query(sql, [YzId(6), newData.eventsname, newData.uname, newData.email, newData.address, newData.detailed, newData.type, newData.department, newData.starttime, newData.shuttime, newData.files], (err, results) => {
            if (err) {
                return console.log(err);
            }
        })
        // TODO : 向首页数据库添加数据!;

        connection.query(sql2, [YzId(6), newData.eventsname, newData.uname, newData.email, newData.address, newData.detailed, newData.type, newData.department, newData.starttime, newData.shuttime, newData.files], (err2, results2) => {
            if (err2) return console.log(err2);
            return  console.log('yes')
        })
    })
    return res.send({status:200,message:'上传成功！'});
    //随机生成6位id
    function YzId(n) {
        let str = "";
        const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for (let i = 0; i < n; i++) {
            str += arr[Math.floor(Math.random() * arr.length)];
        }
        return str;
    }

    // 关闭数据库连接
    connection.end();
})


module.exports = router;
