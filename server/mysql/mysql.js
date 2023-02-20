const mysql = require('mysql')

function createConnection() {
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:"200312",
        database:'vuehuodong'
    });
    return connection;
}

module.exports.createConnection = createConnection;
