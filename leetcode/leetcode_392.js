// https://leetcode.com/problems/is-subsequence/
// 392. Is Subsequence

/*
I: string, string
O: boolean
C:
- 0 <= s.length <= 100
- 0 <= t.length <= 104
- s and t consist only of lowercase English letters.
E:
- if(s.length===0) return true;
*/
// Solution #1
var isSubsequence = function(s, t) {
  if(s.length===0) return true;
  let cnt= 0;
  let idx=0;
  for(let i=0; i<t.length; i++){
      if(idx===s.length) break;
      if(s[idx]===t[i]){
          cnt++;
          idx++;
      }
  }
  if(cnt===s.length) return true;
  else return false;
};



/*
    (2,3)
   "" a h b g d c
""  t t t t t t t
a   f t t t t t t
b   f f f t t t t 
c   f f f f f f t

   "" a h b g b c
""  t t t t t t t
a   f t t t t t t
b   f f f t t 
c   f f f f f f f
*/
// Solution #2
var isSubsequence = function(s, t) {
  //edge case
  if(s.length===0) return true;
  
  //base case
  const dp=Array.from({length:s.length+1}, ()=>new Array(t.length+1).fill(false));
  for(let i=0; i<t.length+1;i++){
      dp[0][i]=true;
  }
  //dp
  for(let i=1; i<s.length+1; i++){
      for(let j=1; j<t.length+1; j++){
          if(s[i-1]===t[j-1]) dp[i][j]=dp[i-1][j-1];
          else dp[i][j]=dp[i][j-1];
      }
  }
  return dp[s.length][t.length];
};