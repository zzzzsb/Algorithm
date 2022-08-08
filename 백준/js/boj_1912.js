/*
nums 10, -4, 3, 1, 5, 6, -35, 12, 21, -1 
dp   10  6   9 10 15  21  -14 12  33  32
현재까지 더한값과 지금 값 비교
*/
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const nums = input[1].split(" ").map(v => Number(v));
const dp = new Array(n).fill(0);
let max = 0;

dp[0] = nums[0];
max = dp[0];

for(let i=1; i<nums.length; i++){
    dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
    max = Math.max(max, dp[i]);
}

console.log(max);