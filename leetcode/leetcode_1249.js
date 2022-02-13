// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// 1249. Minimum Remove to Make Valid Parentheses

var minRemoveToMakeValid = function(s) {
  let res = [...s];
  let openIdx = [];
  
  for(let i=0; i<s.length; i++){
      if(s[i]==="(") openIdx.push(i);
      else if(s[i]===")") {
          if(openIdx.length > 0) openIdx.pop();
          else res[i] = "";
      }
  }
  
  while(openIdx.length > 0) res[openIdx.pop()] = "";
  
  return res.join("");
};