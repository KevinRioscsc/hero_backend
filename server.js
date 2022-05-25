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
    database: "keyboard",
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
  },
});

app.use(express.json());
app.use(cors());

app.post("/addLeader", (req, res) => {
  const { username, total, datetotal } = req.body;

  db("leaderboard")
    .insert({
      username: username,
      total: total,
      datetotal: datetotal,
    })
    .then((resp) => res.json(resp[0]));
});

app.get("/", (req, res) => {
  res.send("it is working!");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("We are listening");
});
