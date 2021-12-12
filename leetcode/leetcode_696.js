//https://leetcode.com/problems/count-binary-substrings/
//696. Count Binary Substrings
/*
I : string
O : integer
C : 
    - 1 <= s.length <= 105
    - s[i] is either '0' or '1'.
E :



Input: s = "00110011"
                  ^
                   ^
Output: 6

0011
01
1100
10
0011
01

00110011
^


현재숫자랑 이전숫자를 비교해서 다르면 substr[cur]=1넣기
                       같으면 substr[cur]++;

if(s[cur]===0) substr[0]<=substr[1] res++
else if(s[cur]===1) substr[1]<=substr[0] res++

00110011
^
cur  0 1
     ---
0    1 0
0    2 0
1    2 1 -> 1
1    2 2 -> 2
0    1 2 -> 3
0    2 2 -> 4
1    2 1 -> 5
1    2 2 -> 6


*/
var countBinarySubstrings = function(s) {
  let res=0;
  let preN=s[0];
  const substr=[0,0];
  for(let cur=0; cur<s.length; cur++){
      if(preN==s[cur]) substr[s[cur]]++;
      else substr[s[cur]]=1;
      preN=Number(s[cur]);
      //console.log(preN, substr);
      if(s[cur]==="0" && substr[0]<=substr[1]) res++;
      if(s[cur]==="1" && substr[1]<=substr[0]) res++;
  }
  return res;
};
/*Runtime: 108 ms, faster than 37.40% of JavaScript online submissions for Count Binary Substrings.
Memory Usage: 42.3 MB, less than 71.18% of JavaScript online submissions for Count Binary Substrings.*/