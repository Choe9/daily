// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
let arr1 = [];
let arr2 = [];
let sum = 0;
for(let a = 0; a < input.length; a++) {
    if(a <= 1) {
        arr1.push(Number(input[a].split(" ")));
    } else {
        arr2.push(input[a].split(" ").map(item=>Number(item)));
    }
}
for(let i = 0; i < arr2.length; i++) {
    sum += (arr2[i][0] * arr2[i][1]);
}
if(sum === arr1[0]){
    console.log("Yes");
} else {
    console.log("No");
}

console.log(arr2)