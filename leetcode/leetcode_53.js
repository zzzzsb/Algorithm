// https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray

/*
내 현재 위치에서 앞의 인덱스와의 합중 가장 큰 값을 배열에 저장한다.
이때 dp 배열 확인. dp[i-1]의 값은 내 현재위치 이전의 합중 가장 큰 값 or 자기 자신을 저장한 것이다. 
dp[i-1]+nums[i] 가 max이면 dp[i]를 갱신해주고, 더한게 max가 아니라면 dp[i]=nums[i]해준다.


0 - [0]
1 - [1], [0,1]
2 - [2], [1,2], [0,2]
3 - [3], [2,3], [1,3], [0,3]

 0 1  2 3  4 5 6  7 8
-2 1 -3 4 -1 2 1 -5 4

-2 1 -2 4  3 5 6  1 5  


*/

// Solution 1
// N: nums.length
// time: O(N)
// space: O(N)
var maxSubArray = function(nums) {
    //edge case
    if(nums.length===1) return nums[0];
    
    const dp=[nums[0]];
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        dp[i]=Math.max(dp[i-1]+nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
};

// Solution 1 Refactoring
// N: nums.length
// time: O(N)
// space: O(1)
var maxSubArray = function(nums) {
  let curr = nums[0];
  let max = nums[0];
  
  for(let i=1; i<nums.length;i++){
      curr = Math.max(nums[i], nums[i]+curr);
      max = Math.max(curr,max);
  }
  return max;
};