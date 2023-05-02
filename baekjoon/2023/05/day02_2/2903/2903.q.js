const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const result = (2 ** input + 1) ** 2;
console.log(result);
