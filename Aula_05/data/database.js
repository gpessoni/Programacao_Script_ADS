const sql = require("mssql");

const config = {
  user: "sa",
  password: "fatec123*",
  server: "localhost",
  port: 1433,
  database: "ProgSCRIPT",
  options: {
    encript: false,
  },
};

async function connect() {
  try {
    console.log("O Banco se conectou");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sql,
  connect,
};
