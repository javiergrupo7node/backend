const express = require("express");
const router = express.Router();

const usersController = require("../controller/usersController");
//Obtiene lista de usuarios
router.get("/list", usersController.allUsers);
    
module.exports = router;

