// https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray

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

// Refactoring
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