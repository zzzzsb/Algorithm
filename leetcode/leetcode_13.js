// https://leetcode.com/problems/roman-to-integer/
// 13. Roman to Integer

var romanToInt = function(s) {
  const map = new Map();
  let ans = 0;
  map.set("I",1);
  map.set("V",5);
  map.set("X",10);
  map.set("L",50);
  map.set("C",100);
  map.set("D",500);
  map.set("M",1000);
  // III
  // IV
  for(let i=0; i<s.length; i++){
    // 일반적인 경우
    if(i==s.length-1){
      ans +=map.get(s[i]); 
      return ans;
    }
    if(map.get(s[i])>= map.get(s[i+1])) ans += map.get(s[i]);
    // IV 같은 경우 , 
    // MCMXCI      
    // 1000 -100 + 1000 - 10 + 100 - 1 + 5 =
    else ans-=map.get(s[i]);
  }
  return ans;
};