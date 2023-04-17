// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [nm, ...input] = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ");

let bucket = [];
for (let i = 0; i < n; i++) {
  bucket.push(i + 1);
}

input.forEach((t) => {
  const [start, end] = t.split(" ");
  const first = bucket.slice(0, start - 1);
  const target = bucket.slice(start - 1, end);
  const last = bucket.slice(end);
  bucket = [...first, ...target.reverse(), ...last];
});

console.log(bucket.join(" "));
