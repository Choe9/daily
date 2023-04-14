// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...inputs] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let str = [];
let i = 0;
let j = 1;
let sum = 0;

while(true) {
    str.push(inputs[0].slice(i, j));
    i++;
    j++;
    if(inputs[0].slice(i, j) === '') {
        break;
    }
}

str = str.map(t=>Number(t));

for(let a = 0; a < str.length; a++) {
    sum += str[a];
}

console.log(sum);
