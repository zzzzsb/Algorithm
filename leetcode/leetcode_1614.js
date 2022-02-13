// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// 1614. Maximum Nesting Depth of the Parentheses

/*
input: 문자열(s)
output: 정수(nesting depth) 
constraints
    - 1<=문자열길이<=100
    - 문자열은 0-9 정수, 문자 + - * / ( ) 로만 이루어짐
    - s는 VPS임을 보장
edge case
    - 
    
2) brute force & optimal
( 나오면 ++ 
) 나오면 -- 
0되면 괄호 짝 끝

3)
time complexity: O(n)
space complexity: O(1)
*/

 var maxDepth = function(s) {
  var depth = 0;
  var maxdepth = 0;
  
  for(let i=0; i<s.length; i++) {
      if(s[i]=='('){
          depth++;
      }
      else if(s[i]==')'){
          depth--;
      }
      if(depth>maxdepth) maxdepth=depth;
  }
  return maxdepth;
};