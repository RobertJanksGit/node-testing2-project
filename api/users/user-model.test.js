const db = require("../../data/db-config");
const Users = require("./users-model");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

describe("getAll", () => {
  test("[1] resolves all the users in the table", async () => {
    const users = await Users.getAll();
    expect(users).toHaveLength(2);
  });
});
describe("getById", () => {
  test("[2] resolves user by user is", async () => {
    let user = await Users.getById(6);
    expect(user).toEqual({ email: "bob@example.com", id: 6, name: "Bob" });
    user = await Users.getById(5);
    expect(user).toEqual({ email: "alice@example.com", id: 5, name: "Alice" });
  });
});

describe("insert", () => {
  const user = { email: "tom@example.com", name: "Tom" };
  test("[3] resolves newly created user", async () => {
    const result = await Users.insert(user);
    expect(result).toMatchObject(user);
  });
  test("[4] adds user to the users table", async () => {
    await Users.insert(user);
    const updatedUsers = await db("users");
    expect(updatedUsers).toHaveLength(3);
  });
});
