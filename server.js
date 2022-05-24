const express = require("express");
const app = express();
const knex = require("knex");
const cors = require("cors");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "Kevthebest12@",
    database: "trello-clone",
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
  },
});

app.use(express.json());
app.use(cors());

app.post("/createList", (req, res) => {
  const { pid, title } = req.body;

  db("list")
    .insert({
      pid: pid,
      title: title,
    })
    .returning("lid")
    .then((resp) => res.json(resp[0]));
});
