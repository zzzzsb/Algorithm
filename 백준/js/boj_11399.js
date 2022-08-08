const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);
/*
3 1 4 3 2
-> 오름차순 정렬
1 2 3 3 4
1 3 6 9 13
2번: 1분
5번: 1+2=3분
1번: 1+2+3=6분
4번: 1+2+3+3=9분
3번: 1+2+3+3+4 = 13분

1+3+6+9+13 = 32분
*/
nums.sort((a,b) => a-b);
let sum = 0;
let wait= 0;
for(let i=0; i<nums.length; i++){
    wait += nums[i];
    sum += wait;
}
console.log(sum);
