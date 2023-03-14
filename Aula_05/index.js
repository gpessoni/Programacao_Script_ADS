const expresss = require("express");

const app = expresss();

app.listen(8080, () => {
  console.log("O server está ativo na porta 8080");
});

app.use(expresss.json());

const { connect, sql } = require("./data/database");

app.post("/Aluno", async (req, res) => {
  try {
    await connect();

    const { id, nome, idade } = req.body;
    const result = await sql.query(
      `INSERT INTO Aluno (id, Nome, Idade) VALUES (${id}, '${nome}', ${idade} )`
    );
    res.send("Cadastro realizado com sucesso")
  } catch (error) {
    console.error(err);
    res.status(500).send("Erro inesperado");
  } finally {
    await sql.close();
  }
});
