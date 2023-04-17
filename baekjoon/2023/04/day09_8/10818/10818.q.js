// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [input, n] = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const number = Number(input)
const numbers = n.split(' ').map(Number)

numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers[0] + " " + numbers[numbers.length - 1]);