// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const a = Number(input[0]);
let arr = [];
let answer = [];
for(let i = 1; i <= a; i++) {
    arr.push(input[i].split(" ").map(item=>Number(item)));
}
for(let j = 0; j < arr.length; j++) {
   answer += arr[j][0] + arr[j][1] + '\n';
}
console.log(answer);