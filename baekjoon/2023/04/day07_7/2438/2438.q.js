// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
let star = "";
for(let i = 0; i < Number(input[0]); i++) {
    for(let j = 0; j <= i; j++) {
        star += "*";
    }
    star += "\n" + "";
}
star = star.trim("\n");
console.log(star);