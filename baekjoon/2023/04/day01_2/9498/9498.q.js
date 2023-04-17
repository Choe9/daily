const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
//const cut = input[0].split(" ");
//const arr = cut.map((cut) => Number(cut))
const num = Number(input);
const output = (90 <= num || 100 <= num) ? "A" : (80 <= num || 89 <= num) ? "B" : (70 <= num || 79 <= num) ? "C" :  (60 <= num || 69 <= num) ? "D" : "F";
console.log(output);