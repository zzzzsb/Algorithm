// https://leetcode.com/problems/counting-bits/
// 338. Counting Bits

/*
I: integer
O: array
C: 0<=n<=10^5
E: 
- if(n===0) return [n];

 0 1 2 3 4 5

0 -> 0

01 -> 1
10 -> 2
11 -> 3

100 -> 4 
101 -> 5
110 -> 6
111 -> 7

1000 -> 8 (1)
1001 -> 9 (2)
1010 -> 10 (2)
1011 -> 11 (3)
1100 -> 12 (2)
1101 -> 13 (3)
1110 -> 14 (3)
1111 -> 15 (4)

10000
16 1

17 2
18 2
19 3
20 2
21 3
22 3
23 4
24 

112
223
2232334
2의 배수면 1개수 1개.
        v       v                      v
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
0 1 1 2 1 2 2 3 1 2  2  3  2  3  3  4  1

13-8 = 5 => 2+1 
14-8 = 6 => 2+1
15-8 = 7 => 3+1

// 2의 제곱
if(Math.pow(2, ))
n[i]/2 === 0 && n[i]/2 이면 n[i]=1;
// 2의 제곱 아니면
else n[i]=n[n[i]%2]+1;

11/2=5 +1
12

0 1 2 3 4 5
0 1 1 2 1 2

*/
var countBits = function(n) {
  if(n === 0) return [n];
  // base case
  const res = new Array(n+1).fill(0);
  for(let i = 0; i < n+1; i++){
      // 1, 2, 4
      if(Math.pow(2, i) < n+1) res[Math.pow(2, i)] = 1;
  }
  // i=1 temp =1 
  // i=2 temp =2
  // i=3 temp =2 res[3]=res[1]+res[2]=2
  // i=5 temp =4 res[5]=res[1]+res[4]=1+1=2
  let temp = 0;
  for(let i = 1; i < n+1; i++){
      if(res[i]===1){
          temp=i;
      }
      else res[i]=res[i-temp]+res[temp];
  }
  //console.log(res)
  return res;
};

// cool code
/*
0 1 2 3 4 5 6 7 
0 1 1 2 1 2 2 3

0  0
1  01
2  10
3  11
4  100
5  101
6  110
7  111
8  1000
9  1001
10 1010
*/
var countBits = function(n) {
  const dp = [0];
  for(let i=1; i<n+1; i++){
    if(i % 2 === 0){
      dp[i] = dp[i/2];
    } 
    else{
      dp[i] = dp[i-1]+1;
    }
  }
  return dp;
};

// 이것도 됨 ! 
// /2 -> >>1
// %2 -> &1
var countBits = function(n) {
  const dp = [0];
  for(let i=1; i<n+1; i++){
    if((i & 1) === 0){
      dp[i] = dp[i>>1];
    } 
    else{
      dp[i] = dp[i-1]+1;
    }
  }
  return dp;
};