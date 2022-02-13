// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate

/*
해쉬에 
1 : true
2 : false
3 : false
*/
var containsDuplicate = function(nums) {
  const map = new Map();
  for(let i=0; i<nums.length; i++){
      if(map.has(nums[i])) map.set(nums[i], true);
      else map.set(nums[i], false);
  }
  
  for(let i=0; i<nums.length; i++){
      if(map.get(nums[i])=== true) return true;
  }
  
  return false;
};