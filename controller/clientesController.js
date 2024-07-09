    
const db = require("../db/db");

const all =  (request, response)=>{
    const sql = "select * from cliente";
    db.query(sql,(err, result) => {
        if(err) throw err;

        response.send(result);
    
    });
    

};

module.exports = {all};