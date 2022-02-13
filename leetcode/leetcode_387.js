// https://leetcode.com/problems/first-unique-character-in-a-string/
// 387. First Unique Character in a String


/*
1)
input: string
output: integer
constraints: 
    - 1<=s.length<=10^5
    - s는 소문자로만 이루어져 있음
edge case:
    - aabb -> -1 
    - a -> 0
    
2) brute force && optimal
 01234567891011
"loveleetcode"

map
0  l:2
1  o:2
2  v:1 -> return 
3  e:4
4  t:1
5  c:1
6  d:1

aabb

0 a:2
1 b:2

 for문 돌면서 key value가 0이면 그 인덱스 리턴
 
3)
time complexity: O(n)
space complexity: O(1)
*/
var firstUniqChar = function(s) {
  const map = new Map();

  for(let i=0; i<s.length; i++){
      // 맵에 키가 있으면
      if(map.has(s[i])) map.set(s[i], map.get(s[i]++));
      // 맵에 키가 없으면 
      else map.set(s[i], 1);      
  }
  
  for(let i=0; i<s.length; i++){
      //map의 값이 1이면 index 반환
      if(map.get(s[i])==1) return i;
  }
  return -1;
};