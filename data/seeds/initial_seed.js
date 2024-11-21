exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
      ]);
    });
};
