const express = require("express");

const app = express();

app.listen(8080);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/teste', () => {
    console.log('Nosso servidor está ativo na porta 8080');
})

app.get("/testeComHTML", (req, res) => {
    res.send("<h1>Server ativo</h1>");
  });
