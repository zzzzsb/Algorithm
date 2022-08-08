const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(v => Number(v));
const coins = input.map(v => Number(v)).filter(v => v <= K).reverse();
let count = 0;
let remain = K;
for(let coin of coins){
    if(remain == 0) break;
    count += Math.floor(remain/coin);
    remain %= coin;
}

console.log(count);