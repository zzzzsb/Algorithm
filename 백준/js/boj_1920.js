const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [M, A, N, B] = input.map(v => v.split(" ").map(x => Number(x)));

const map = new Map();
const answer = [];
for(let num of A){
    if(!map.has(num)) map.set(num, true);
}

for(let num of B){
    if(!map.has(num)) answer.push("0");
    else answer.push("1");
}

console.log(answer.join("\n"))