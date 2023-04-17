// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
let arr = [];
for(let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(item=>Number(item)));
}
for(let j = 0; j < arr.length; j++) {
    console.log(arr[j][0] + arr[j][1]);
}
console.log(arr);