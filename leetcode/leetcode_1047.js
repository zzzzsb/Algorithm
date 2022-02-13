// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// 1047. Remove All Adjacent Duplicates In String

/*
1)
input: lowercase English letters
output: 중복을 제거하고 남은 스트링 
constraints
    - 1<=문자열 길이<=10^5
    - 문자열은 알파벳 소문자
edge cases

2)
brute force ..
optimal
스택 ..

3)
time complexity
space complexity
    - 
*/

 var removeDuplicates = function(s) {
  //if(!s.length) return '';
  
  const stack = [];
  // stack: ca
  // s:     ca
  for(let i=0; i<s.length; i++) {
      if(stack[stack.length - 1] == s[i]) stack.pop();
      else stack.push(s[i]);
  }
  return stack.join('');
};