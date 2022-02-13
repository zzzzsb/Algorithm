// https://leetcode.com/problems/rotate-array/
// 189. Rotate Array

// N:nums.length
// time: O(2*N-k)
// space: O(1)
var rotate = function(nums, k) {
  const length = nums.length;
  const rotateIdx = k % length;
  
  for(let i=0; i<length - rotateIdx ; i++){
      nums.push(nums[i]);
  }
  nums.splice(0, length - rotateIdx);
  
};