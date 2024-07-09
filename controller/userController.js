
const db = require("../db/db");

const getUser =  (request, response)=>{
    const id = request.params.id;
    const sql = "select * from users where idUser =" + id;
    db.query(sql,(err, result) => {
        if(err) throw err;

        response.send(result);
    
    });
};

const createUser = (req, res) => {
    
    // operador ternario:
    // (condicion) ? resultado verdadero: resultado falso
    const dataRequest = (Object.keys(req.params).length > 0 ) ? req.params: req.body;

    const {userName, email, gender, edad, maidenName,lastName}= dataRequest ;

    const sql = 'INSERT INTO `practica001`.`users` (`username`, `email`, `gender`, `edad`, `maidenName`, `lastName`) VALUES (?, ?, ?, ?, ?, ?);'
    db.query(sql,[userName, email, gender, edad, maidenName,lastName] ,(err, result) => {
        if (err) throw err;
        res.send(result);         
    });
}

const updateUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const dataRequest = req.body;

    // Puedo decidir si necesito si o si todos los parametros o puedo manejar solo algunos...
    const {userName, email, gender, edad, maidenName,lastName}= dataRequest ;

    // si no tengo todos los paramatros arrojar error... o no hacer nada..
    //UPDATE `practica001`.`users` SET `username` = 'Alejandro' WHERE (`idUser` = '10');
    // decidir como lo vamos a hacer si todos o de a uno... 
    const sql = 'UPDATE `practica001`.`users` SET `userName` = ?, `email` = ?, `gender` = ?, `edad` =?, `maidenName` = ?,`lastName` = ? WHERE idUser=' + id;
    db.query(sql,[userName, email, gender, edad, maidenName,lastName] ,(err, result) => {
        if (err) throw err;
        res.send(result);        
    });

};

const deleteUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const sqlDeleteUser = 'DELETE from practica001.users WHERE idUser='+id;

        db.query(sqlDeleteUser, (err, result) => {
            if (err) throw err;
            res.send(result);        
        });
        

}

module.exports = { getUser, createUser, updateUser, deleteUser };



