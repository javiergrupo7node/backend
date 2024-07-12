const express = require("express");

const saludoRoutes = require("./routes/saludoRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

//-----TP
const clientesRoutes = require("./routes/clientesRoutes.js");
const clienteRoutes = require("./routes/clienteRoutes.js");

const PORT = 3000;

var bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/saludo",saludoRoutes);
app.use("/users",usersRoutes);
app.use("/user",userRoutes);

//-----TP
app.use("/clientes",clientesRoutes);
app.use("/cliente",clienteRoutes);

app.listen(process.env.PORT, process.env.IP, function () {
    console.log('Example app started!')
})