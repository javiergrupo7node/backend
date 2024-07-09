const express = require("express");
const router = express.Router();

const clienteController = require("../controller/clienteController");

router.get("/:id",clienteController.getCliente);

router.post("/create",clienteController.createCliente);

router.delete("/:id" , clienteController.deleteCliente);

router.put("/:id" , clienteController.updateCliente );

module.exports = router; 