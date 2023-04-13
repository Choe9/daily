// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

  let str = [];
  let str2 = [];
  for(let i = 0; i < input.length; i++) {
      str.push([...input[i]]);
  }
  for(let j = 0; j < str.length; j++) {
    str2.push(str[j][0] + str[j][str[j].length-1]);
  }

  console.log(str2.join("\n"));