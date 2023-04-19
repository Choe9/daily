// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [nm, ...input] = require("fs")
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
  const [start, end, mid] = t.split(" ");
  console.log(t);
  console.log(mid);
  console.log(end);
  const first = bucket.slice(0, start - 1);
  console.log(first);
  const target1 = bucket.slice(mid - 1, end);
  console.log(target1);
  const target2 = bucket.slice(start - 1, mid - 1);
  console.log(target2);
  const last = bucket.slice(end);
  console.log(last);
  bucket = [...first, ...target1, ...target2, ...last];
});

// console.log(bucket.join(" "));
console.log(bucket);
console.log(input);
