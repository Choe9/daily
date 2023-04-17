const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const arr = input[0].split(" ");

let sum = 0;
let count = 0;
const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicates = findDuplicates(arr);

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === duplicates[0]) {
        count++;
    }
}

const num = Number(duplicates[0]);

if(count === 2) {
    sum = 1000 + num * 100;
} else if(count === 3) {
    sum = 10000 + num * 1000;
} else {
    arr.sort();
    sum = arr[2] * 100;
}

console.log(count);