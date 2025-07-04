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
  expect(add("20,30")).toBe(50);
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

//Test Case where numbers are seprated by the custom delimeters
test("return the sum of numbers which are seprated by custom delimeters", () => {
  expect(add("//*\n2*3")).toBe(5);
  expect(add("//!\n3!4!5!6!7")).toBe(25);
  expect(add("//+\n1+2+3+4+5")).toBe(15);
});

//Test Case for negative numbers should throw eception
test("throw the exception when the numbers are negative", () => {
  expect(add("2,-3")).toBe(-1);
})

//Test Case for ignoring numbers greater than 1000
test("ignore the numbers that are greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1001,1001")).toBe(0);
  expect(add("2005,12")).toBe(12);
  expect(add("1000,10001,2,1")).toBe(1003);
});

//Test Case for multi character delimeter
test("return the sum with delimeter of multi character", () => {
  expect(add("//[***]\n2***5")).toBe(7);
  expect(add("//[---]\n2---3---5")).toBe(10);
  expect(add("//[+++]\n1002+++3")).toBe(3);
});