const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number).sort((a,b)=>a-b); 

let start = 0, end = trees[trees.length - 1];
let answer = 0;
while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for(let i=0; i<trees.length; i++){
        if(trees[i] > mid) sum += trees[i] - mid;
    }
    if(sum >= M){
        if(mid > answer) answer = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(answer);
