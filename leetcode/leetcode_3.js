// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
// Sliding Window

// Solution 1
// N:s.length 
// time: O(N)
// space: O(N)
var lengthOfLongestSubstring = function(s) {
  let result = 0;
  let set = new Set();
  let left = 0;
  for (let i=0; i<s.length; i++){
      while(set.has(s[i])){
          set.delete(s[left]);
          left++;
      }
      set.add(s[i]);
      if (set.size > result){
          result = set.size;
      }
  }
  return result;
};

// Solution 2
var lengthOfLongestSubstring = function(s) {
  // edge case
  if(s.length === 0 || s.length === 1) return s.length;
  
  let left=0, right=0;
  let maxLength=0;
  const set = new Set();
  
  while(right<s.length){
      let curChar = s[right];
      if(set.has(curChar)){
          while(s[left]!==curChar){
              set.delete(s[left]);
              left++;
          }
          set.delete(s[left]);
          left++;
          set.add(curChar);
      } else{
          set.add(curChar);
          maxLength = Math.max(maxLength, set.size);
      }
      right++;
  }
  return maxLength;
};

// Solution 3
// time: O(N)
// space: O(N)
var lengthOfLongestSubstring = function(s) {
    let i=0, j=0;
    let max =0;
    let map = new Map();
    
    while(j<s.length){ 
        if(map.has(s[j])){
            max = max < j-i? j-i : max;
            while(s[i] !== s[j]) {
                map.delete(s[i]);
                i++;
            }
            i++;
            
        }else map.set(s[j],true);
        
        j++;
    }
    if(i < s.length){
        max = max < j-i? j-i : max;
    }
    return max;  
};
