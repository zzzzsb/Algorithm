// https://leetcode.com/problems/repeated-string-match/
// 686. Repeated String Match

/*
input: string a,b
output: integer

constraints:
- 1 <= a.length <= 104
- 1 <= b.length <= 104
- a,b는 영어 소문자

edge cases:

DS:
Algorithm:
time: O(a+b)
space: O(a+b)

abcd
cdabcdab

***리팩토링 필요
*/
var repeatedStringMatch = function(a, b) {
  let repeat=0;
  const originA=a;
  while(b.length>a.length){
      a=a.concat(originA);
      repeat++;
  }
  //console.log(a)
  if(a.includes(b)) return repeat+1;
  else{
      a=a.concat(originA);
      repeat++;
      if(a.includes(b)) return repeat+1;
      return -1;   
  }
};