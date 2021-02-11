const express = require("express");
require("dotenv").config();

//crear el servidor de express

const app = express();

//lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
//TODO auth // crear, login, renew
//TODO CRUD: evnetos

//directorio publico
//el directorio publico se ocupa para colocar react
app.use(express.static("public"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
