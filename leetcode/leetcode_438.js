//https://leetcode.com/problems/find-all-anagrams-in-a-string/
//438. Find All Anagrams in a String

var findAnagrams = function(s, p) {
  let res = [];
  //edge case
  if(p.length>s.length) return res;
  
  //p로 map 만든다.
  let map = new Map();
  for(let c of p){
      if(map.has(c)) map.set(c, map.get(c)+1);
      else map.set(c, 1);
  }
  let left=0, right=0;
  let counter = map.size;
  
  while(right < s.length){
      let curChar = s.charAt(right);
      if(map.has(curChar)){
          map.set(curChar, map.get(curChar)-1);
          if(map.get(curChar)===0) counter--;
      }
      right++;
      while(counter === 0){
          if(right-left === p.length){
              res.push(left);
          }
          let leftChar = s.charAt(left);
          if(map.has(leftChar)){
              map.set(leftChar, map.get(leftChar)+1);
              if(map.get(leftChar)>0) counter++;
          }
          left++;
      }
      console.log(left, right)
      console.log(map)
  }
  return res;
};
