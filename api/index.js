const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const Documentales = require('./controllers/documental.controller.js');
const Usuario = require("./controllers/usuario.controller.js");
const auth = require("./middleware/auth.js");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "API Plataforma Streaming" });
});

// Esta ruta genera una pass, pero no la guarda directamente en el usuario, sino que hay que copiarla a mano
app.get("/generarPass/:pass", (req, res) => {
    // cantidad de veces que se va a encriptar la clave
    const rondas = 10;
  
    bcrypt.hash(req.params.pass, rondas, (err, miHash) => {
      // siempre que necesite programar algo asíncrono, va acá
      res.json({ 
        // capturar parametro pass
        pass: req.params.pass,
        hash: miHash
      });
    })
  });
  
app.post("/login", Usuario.login);

app.get("/documentales", Documentales.list);
app.get("/docxcategoria/:id", Documentales.getIdCat);
app.get("/docxregion/:id", Documentales.getIdReg);
app.get("/docxmpaa/:id", Documentales.getIdMpaa);
app.get("/recomendados/:idUsuario", auth, Documentales.getRecomendados)

// set port, listen for requests
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});