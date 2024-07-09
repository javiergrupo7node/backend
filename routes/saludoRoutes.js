
const express = require("express");
const router = express.Router();
const saludoController = require('../controller/saludoController');

/* const MiSaludo = (request, response)=>{
    response.send("Hola mundo desde SaludoControllerQQQQ");
}; */

router.get("/", saludoController.MiSaludo);

module.exports = router;
