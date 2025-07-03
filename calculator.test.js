const { add } = require("./calculator");

test("returns 0 from the empty string", () => {
  expect(add("")).toBe(0);
});
