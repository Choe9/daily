const input = fs.readFileSync(__dirname + "/test.txt").toString().trim().split("\r");
const cut = input[0].split(" ");
const arr = cut.map((cut) => Number(cut))
const one = ">";
const two = "<";
const three = "==";
const output = (arr[0] > arr[1]) ? one : (arr[0] < arr[1]) ? two : (arr[0] === arr[1]) ? three : null;
console.log(output);