// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
let char = "";
for(let i = 0; i < Number(input[0]) / 4; i++) {
    char += "long ";
}
console.log(char + "int");