const db = require("../../data/db-config");

function getAll() {
  return db("users");
}

function getById(id) {
  return db("users").where("id", id).first();
}

async function insert(user) {
  return await db("users")
    .insert(user)
    .then(([id]) => {
      return db("users").where("id", id).first();
    });
}
module.exports = { getAll, getById, insert };
