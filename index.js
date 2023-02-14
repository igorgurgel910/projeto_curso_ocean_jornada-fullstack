/* 

console.log("Hello World!"); 

// função para aparecer no NodeJS
// usar ; não é obrigatório no JS, mas interessante utilizar.
// para rodar o console.log utiliza node index.js

*/

const express = require("express");
const { MongoClient } = require("mongodb");

// localhost ou 127.0.0.1
const DB_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "projeto_curso_ocean_fullstack_2023-02-09";

async function main() {
// Conexão com o banco de dados
console.log("Conectando com o banco de dados...");
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection("itens");
console.log("Banco de dados conectado com sucesso!");

const app = express()

// o que vier no body da requisição está em JSON
app.use(express.json());

// Endpoint / -> Hello Dev World!
app.get("/", function (req, res) {
  res.send('Hello Dev World!');
});

// Endpoint / -> Olá Mundo Dev!
app.get("/oi", function (req, res) {
  res.send("Olá Mundo Dev!");
});

// Lista de informações
const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];
//                 0               1               2

// CRUD -> Lista de informações

// Endpoint Read All -> [GET] /item
    // funtion () -> declaração
    // function {} -> objeto
app.get("/item", async function (req, res) {
  const documentos = await collection.find().toArray();
  res.send(documentos);
});

// Endpoint Read By Id -> [GET] /item/:id
app.get("/item/:id", function (req, res) {
  const id = req.params.id;
  const item = itens[id - 1];
  res.send(item);
});

// Endpoint Create -> [POST] /item
// console.log -> saber o que tem na variavel antes de prosseguir
app.post("/item", function (req, res) {
  //console.log(req.body);
  const item = req.body;
  itens.push(item.nome);
  res.send("Item criado com sucesso!");
});

app.listen(3000)
}

main();