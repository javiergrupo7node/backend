const express = require("express");
const router = express.Router();

const clientesController = require("../controller/clientesController");
//Obtiene lista de usuarios
router.get("/list", clientesController.all);
    
module.exports = router;