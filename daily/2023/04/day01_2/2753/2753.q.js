const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
//const cut = input[0].split(" ");
//const arr = cut.map((cut) => Number(cut))
const num = Number(input);
const yun1 = num % 100;
const yun2 = num % 400;
const yun3 = num % 4;
let output = 0; 
if(yun3 === 0 && yun1 != 0) {
    output = 1;
} else if(yun2 === 0) {
    output = 1;
} else {
    output = 0;
}
console.log(output);