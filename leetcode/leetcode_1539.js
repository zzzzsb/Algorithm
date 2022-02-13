// https://leetcode.com/problems/kth-missing-positive-number/
// 1539. Kth Missing Positive Number

// time:O(N)+O(N+k+1) 
// space:O(N+k+1)
var findKthPositive = function(arr, k) {
  const postiveArr = new Array(arr.length+k+1).fill(false);
  for(let i=0; i<arr.length; i++) postiveArr[arr[i]]=true;

  for(let i=1; i<postiveArr.length; i++){
      if(!postiveArr[i]) k--;
      if(k===0) return i;
  }
};

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9

// left 0 right 4
// [2,3,4,7,11]
//  ^        ^
// 1 5 6 8 9
// binary search
var findKthPositive = function(arr, k) {
  let left = 0,
      right = arr.length - 1;

  while(left <= right){
    const mid = left + (right - left)/2;
    if(arr[mid])
  }
};
