// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const nums = input[0].split(" ").map(Number);
console.log(nums);

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

console.log(nums.filter((v) => isPrime(v)).length);
