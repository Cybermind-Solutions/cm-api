const express = require("express");
const { Client } = require("pg");

const app = express();
const db = new Client({ connectionString: process.env.DATABASE_URL });

app.get("/clients", async (req, res) => {
  const name = req.query.name;
  const result = await db.query("SELECT id, name FROM clients WHERE name = '" + name + "'");
  res.json(result.rows);
});

app.listen(8080);
