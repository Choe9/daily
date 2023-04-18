// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let count = Number(input);
for (let i = 0; i < count; i++) {
  const emptyCount = count - i - 1;

  console.log(" ".repeat(emptyCount) + "*".repeat(i + 1) + "*".repeat(i));
  //console.log(' '.repeat(i)+'*'.repeat(emptyCount)+'*'.repeat(emptyCount+1)+' '.repeat(i))
}
for (let i = 1; i < count; i++) {
  const emptyCount = count - i - 1;

  //console.log(' '.repeat(emptyCount)+'*'.repeat(i+1)+'*'.repeat(i)+' '.repeat(emptyCount))
  console.log(
    " ".repeat(i) + "*".repeat(emptyCount) + "*".repeat(emptyCount + 1)
  );
}
