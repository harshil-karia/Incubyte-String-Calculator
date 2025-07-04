const { add } = require("./calculator");

//Test Case for empty string
test("returns 0 from the empty string", () => {
  expect(add("")).toBe(0);
});

//Test Case for string with single input
test("return the only number when one number is entered", () => {
  expect(add("2")).toBe(2);
  expect(add("3")).toBe(3);
  expect(add("100")).toBe(100);
});

//Test Case for string with 2 numbers which are comma(,) seprated
test("return the sum of 2 numbers which are comma(,) seprated", () => {
  expect(add("2,3")).toBe(5);
  expect(add("4,6")).toBe(10);
  expect(add("100000000000000,100000000000000")).toBe(200000000000000);
});

//Test Case for string with any number of numbers which are comma(,) seprated
test("return the sum of all numbers which are inputed and each number is seprated by comma(,)", () => {
  expect(add("2,3,4")).toBe(9);
  expect(add("1,2,3,4")).toBe(10);
  expect(add("1,2,3,4,5")).toBe(15);
  expect(add("5,6,2,3,12")).toBe(28);
});

//Test Case where numbers are seprated either by comma(,) or new-line(\n)
test("return the summ of all number which are inputed and each number is seprated by comma or new-line", () => {
  expect(add("2\n3,4")).toBe(9);
  expect(add("2,3\n5")).toBe(10);
  expect(add("3,8\n6,12")).toBe(29);
});
