// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// 438. Find All Anagrams in a String

// Solution #1
var findAnagrams = function(s, p) {
  let res = [];
  //edge case
  if(p.length>s.length) return res;
  
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
  }
  return res;
};

// Solution #2
function stringAnagrams(string, pattern){
    let res=[];
    //edge case
    if(pattern.length > string.length) return res;
  
    const patternMap = new Map();
    for(let char of pattern){
      if(patternMap.has(char)) patternMap.set(char, patternMap.get(char)+1);
      else patternMap.set(char, 1);
    }
    
    let left=0, right=0;
    let counter=pattern.length;
  
    while(right<string.length){
      if(patternMap.has(string[right])){
        patternMap.set(string[right], patternMap.get(string[right])-1);
      }
      counter--;
      if(counter===0){
        let mCount = 0;
        for(let [key, value] of patternMap){
          mCount++;
          if(value !== 0) break;
          else if(mCount === patternMap.size) res.push(left);
        }

        if(patternMap.has(string[left])){
          patternMap.set(string[left], patternMap.get(string[left])+1);
        }
        counter++;
        left++;
      }
      right++;
    }
    return res;
  }
