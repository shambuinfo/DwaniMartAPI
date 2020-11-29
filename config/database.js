//const { createPool } = require("mysql");

const mysql = require("mysql");

const pool = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    connectionLimit: 5, //mysql connection pool length
    database: "dwanimart"  

})
/*
const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit:10    
}); */

pool.connect(function (err) {
    if (!err) {
        console.log("New code Database is connected ... nn");
    } else {
        console.log("New code Error connecting database ... nn");
    }
});

/*
var mysql = require('mysql');
dbConnectionInfo = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    connectionLimit: 5, //mysql connection pool length
    database: "testapi"
  };

  var pool = mysql.createConnection(
    dbConnectionInfo
); 

pool.connect(function (err) {
    if (!err) {
        console.log("New code Database is connected ... nn");
    } else {
        console.log("New code Error connecting database ... nn");
    }
}); */

module.exports = pool;

