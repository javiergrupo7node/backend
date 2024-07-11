const mysql = require("mysql2");
/*
const connection = mysql.createConnection({
    host:process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

*/
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'368517_codoacodo',
    database:'practica001'
});


connection.connect((err)=>{
    if(err) console.error("error en la coneccion a DB", err);

    console.log("conectado a la DB");
});

module.exports = connection;

