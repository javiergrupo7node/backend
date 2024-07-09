
const db = require("../db/db");

const allUsers =  (request, response)=>{
    const sql = "select * from users";
    db.query(sql,(err, result) => {
        if(err) throw err;

        response.send(result);
    
    });
    

};

module.exports = {allUsers};

