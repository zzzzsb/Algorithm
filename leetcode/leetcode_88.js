// https://leetcode.com/problems/merge-sorted-array/
// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
  for(let i=m; i<nums1.length; i++){
    nums1[i]=nums2[i-m];
  }
  nums1.sort((a,b)=>a-b);
};