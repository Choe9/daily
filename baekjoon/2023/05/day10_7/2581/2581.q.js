// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input);
let arr = [];
const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = input[0]; i <= input[1]; i++) {
  arr.push(i);
}
console.log(arr.filter((i) => isPrime(i)));

arr = arr.filter((i) => isPrime(i));

console.log(arr);

if (arr.length != 0) {
  console.log(arr.reduce((prev, curr) => prev + curr) + "\n" + arr[0]);
} else {
  console.log(-1);
}
