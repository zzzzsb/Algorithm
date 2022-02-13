// https://leetcode.com/problems/longest-common-prefix/
// 14. Longest Common Prefix

/*
  0 1 2 3 4 5
  f l o w e r //strs[0]
  f l o w
  f l i g h t
*/
var longestCommonPrefix = function(strs) {
  let ans = ''; //f
  for(let i=0; i<strs[0].length; i++){
      let prefix = strs[0][i];
      // 반복하면서 비교
      for(let j=0; j<strs.length; j++){
          if(prefix!==strs[j][i]) return ans;
      }
      ans+=prefix;
  }
  return ans;
};