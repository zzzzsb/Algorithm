// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
// Sliding Window

/*
input: string
ouput: integer
constraints:
    - 
edge case:
    - if(!s) return 0;

ds:
Algo: sliding window

Input: s = "abcabcbb"
      left        ^
            
      
set= a b c
size 3

*/
//N:s.length 
//time: O(N)
//space: O(N)
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
      //console.log(set)
  }
  return result;
};

// 은하언니 코드 수정 ver
/*
"abcabcbb"
  ^
    ^
Output: 3

bca

"qrsvbspk"
    ^
      ^
vbs
*/
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

//홍빈언니 코드
// time: O(N)
// space: O(N)
// b:true 
// max: 3
//"abcabcbb"
//        ^
//         ^
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