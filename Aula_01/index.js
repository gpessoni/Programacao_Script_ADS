const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("O servidor está rodando na porta 8080");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/teste", () => {
  console.log("Nosso servidor está ativo na porta 8080");
});

let nome = "Gabriel Pessoni";

app.get("/testeComHTML", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
