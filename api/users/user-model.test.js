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
    const user = await Users.getById(2);
    expect(user).toBe("Bob");
  });
});
