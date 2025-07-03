const { add } = require("./calculator");

//Test Case for empty string
test("returns 0 from the empty string", () => {
  expect(add("")).toBe(0);
});

//Test Case for string with single input
test ("return the only number when one number is entered", () => {
    expect(add("2")).toBe(2);
    expect(add("3")).toBe(3);
    expect(add("100")).toBe(100);
});