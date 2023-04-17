// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
let char = "";
let arr = [];
for(let i = 1; i <= Number(input[0]); i++) {
    arr.push(input[i].split(" ").map(item=>Number(item)));
}
for(let j = 0; j < arr.length; j++) {
    let num = arr[j][0] + arr[j][1];
    char += "Case #" + [j+1] + ": " + arr[j][0] + " + " + arr[j][1] + " = " + num + "\n";
}
console.log(char);