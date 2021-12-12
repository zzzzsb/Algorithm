// https://leetcode.com/problems/combination-sum/
// 39. Combination Sum

/*
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

0) candidates[i]===target이면 res에 can[i]추가하고 최종배열에 바로 넣음
1) target-candidates[i]를 배열에서 찾는다.
2) 없으면, 한번더 candidates[i]를 빼고 배열에서 남은 숫자를 찾는다.
....
4) 있으면 res배열에 추가, 없으면 res배열 비운다.(시작할때 빈배열에서 시작하도록)
5) 백트래킹(?)

7/2=3
7
*/
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
  //else if (remain === 0) return result.push([...tempList]);
  else if (remain === 0) return result.push([...tempList]);
  console.log(tempList);
  for (let i=start; i<nums.length; i++) {
      tempList.push(nums[i]);
      backtracking(result, tempList, nums, remain-nums[i], i);
      tempList.pop();
  }
}