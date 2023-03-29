const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const cut = input[0].split(' ');
const A = Number(cut[0]);
const B = Number(cut[1]);
const C = Number(cut[2]);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);