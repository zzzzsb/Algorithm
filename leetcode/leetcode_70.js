// https://leetcode.com/problems/climbing-stairs/
// 70. Climbing Stairs

/*
I: integer
O: integer
C:
- 1 <= n <= 45
E:

1

계단 2개
1+1
2

계단 3개
1+1+1
1+2
2+1

계단 4개
1+1+1+1
1+1+2
1+2+1
2+1+1
2+2

(4,1)->(3,1)->(2,1)->(1,1) (1)
                   ->(1,2) (0)
`           ->(2,2) (1)
     ->(3,2)->(1,1) (1)
            ->(1,2) (0)
(4,2)->(2,1)->(1,1)(1)
     ->(2,2)->(1)
     
0 1 2 3 4 5
0 1 2 3 5 8

*/
var climbStairs = function(n) {
  if(n===1 || n===2) return n;
  
  const dp = new Array(n+1).fill(0);
  dp[1]=1;
  dp[2]=2;
  
  for(let i=3; i<n+1; i++){
      dp[i]=dp[i-1]+dp[i-2];
  }
  //console.log(dp)
  return dp[n];
};
