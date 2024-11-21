const db = require("../../data/db-config");

function getAll() {
  return db("users");
}

function getById(id) {
  return db("users").where("id", id).first();
}
module.exports = { getAll, getById };
