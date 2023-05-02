const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let num = Number(input);
console.log(num);
if (num === 1) {
  console.log((num + 2) * (num + 2));
} else if (num === 2) {
  console.log((num + 3) * (num + 3));
} else if (num === 3) {
  console.log((num + 6) * (num + 6));
} else if (num === 4) {
  console.log((num + 13) * (num + 13));
} else if (num === 5) {
  console.log((num + 28) * (num + 28));
} else if (num === 6) {
  console.log((num + 59) * (num + 59));
} else if (num === 7) {
  console.log((num + 122) * (num + 122));
} else if (num === 8) {
  console.log((num + 249) * (num + 249));
} else if (num === 9) {
  console.log((num + 504) * (num + 504));
} else if (num === 10) {
  console.log((num + 1015) * (num + 1015));
} else if (num === 11) {
  console.log((num + 2038) * (num + 2038));
} else if (num === 12) {
  console.log((num + 4045) * (num + 4045));
} else if (num === 13) {
  console.log((num + 8180) * (num + 8180));
} else if (num === 14) {
  console.log((num + 16371) * (num + 16371));
} else if (num === 15) {
  console.log((num + 32754) * (num + 32754));
}
