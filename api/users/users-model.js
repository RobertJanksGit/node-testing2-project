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

async function deleteById(id) {
  const deletedUser = await db("users").where("id", id).first();
  if (deletedUser) {
    await db("users").where("id", id).del();
  }
  return deletedUser;
}

module.exports = { getAll, getById, insert, deleteById };
