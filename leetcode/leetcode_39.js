// https://leetcode.com/problems/combination-sum/
// 39. Combination Sum

var combinationSum = function(candidates, target) {
  const result = [];
  const list=[];
  backtracking(result, list, candidates, target, 0);
  return result;
};

// 2, 2, 2, 2
function backtracking(result, tempList, nums, remain, start) {
  //console.log(nums);
  if (remain < 0) return;
  else if (remain === 0) return result.push([...tempList]);
  console.log(tempList);
  for (let i=start; i<nums.length; i++) {
      tempList.push(nums[i]);
      backtracking(result, tempList, nums, remain-nums[i], i);
      tempList.pop();
  }
}