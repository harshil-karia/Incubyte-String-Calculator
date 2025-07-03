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

//Test Case for string with 2 numbers which are comma(,) seprated
test ("return the sum of 2 numbers which are comma(,) seprated",()=> {
    expect(add("2,3")).toBe(5);
    expect(add("4,6")).toBe(10);
    expect(add("100000000000000,100000000000000")).toBe(200000000000000);
})
