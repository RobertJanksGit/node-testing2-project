const express = requier("express");
const Users = require("./users/users-model");
const server = express();

server.use(express.json());

server.get("/users", (req, res) => {
  Users.getAll().then((users) => {
    res.status(200).json(users);
  });
});

server.get("/users/:id", (req, res) => {
  res.end();
});

server.module.exports = server;
