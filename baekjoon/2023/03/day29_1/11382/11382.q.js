const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\n");
const arr1 = input[0].split(" ")
const arr2 = arr1.map((arr1) => Number(arr1));
const sum = arr2[0] + arr2[1] + arr2[2];
console.log(sum);