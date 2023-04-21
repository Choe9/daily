// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let result = input;
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let i = 0; i < croatia.length; i++) {
  const divided = result.split(croatia[i]);
  if (divided.length > 1) {
    result = divided.join("@");
  }
  result;
}
console.log(result.length);
