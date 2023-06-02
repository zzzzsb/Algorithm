// 올바른 괄호

// Solution #1
// time: O(N)
// space: O(1)
function solution(s){
  let count = 0;
  // edge case
  if(s[0]===")") return false;
  for(let i=0; i<s.length; i++){
      if(s[i]==="(") count++;
      if(s[i]===")") count--;
      if(count < 0) return false;
  }
  return count===0 ? true: false;
}