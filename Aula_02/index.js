const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("O servidor está rodando na porta 8080");
});

app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extends: false }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.post("/postHTML", (req, res) => {
  const { nome } = req.body;
  console.log(`Olá ${nome}`);
});
