const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//crear el servidor de express

const app = express();

//Database
dbConnection();

//CORS
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//directorio publico
//el directorio publico se ocupa para colocar react
app.use(express.static("public"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
