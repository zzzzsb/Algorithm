// https://leetcode.com/problems/search-in-rotated-sorted-array/
// 33. Search in Rotated Sorted Array

/*    0 1 2 3 4 5 6
      4 5 6 7 0 1 2
left          ^        
right             ^
              ^
midIdx 찾기.
target은 0.

        1
      6 7 0 1 2 4 5
left  ^
right       ^
        ^
        
        0 1 2 3 4
        ^
                ^
            ^
              
time: O(logN)
space: O(1)
*/
var search = function(nums, target) {
    if(!nums) return -1;
    
    let left = 0, right = nums.length-1;
    
    while(left < right){
        const mid = left + Math.floor((right - left)/2);
        
        if(nums[mid]===target) return mid;
        
        if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } 
        else {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }
    return nums[left] === target ? left : -1;
};



