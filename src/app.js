const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express()

// String de conexão

mongoose.connect("mongodb://localhost:27017/Alunas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Conexão com o mongo
let db = mongoose.connection;

// Captura de erro ou sucesso na conexão
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("conexão feita com sucesso.");
});

// rotas

const alunas = require("./routes/alunasRoute")
  
//configurar body parser
app.use(bodyParser.json());
//app.use(express.json()); - Podemos usar a propria função de parser de json do express, sem a necessidade de instalar o body parser

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // informo que  api poderá ser chamada de qualquer lugar. Por um browser, por exemplo.
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
    // como criei uma função dentro do app.use, preciso dar um "next()" para mandar ele seguir para a próxima middleware. 
    // se eu não faço isso, a requisição vai ficar travada aí.
})

app.use("/alunas", alunas) //(localhost:3000/alunas) - exibe todas as alunas do nosso arquivo alunas.json da nossa aplicação no navegador ou no postman

module.exports = app

  

