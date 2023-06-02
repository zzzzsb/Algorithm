// 문자열 압축

/*
aabbaccc 
1개단위로 잘라 압축-> 2a2ba3c

ababcdcdababcdcd
2개단위로 잘라 압축 ->2ab2cd2ab2cd
8개단위로 잘라 압축 -> 2ababcdcd

abcabcdede
2개단위로 잘라 압축 -> abcabc2de
3개단위로 잘라 압축 -> 2abcdede

ex. aabbacc
1 -> 2a2ba2c(7)
2 -> aabbacc(7)
3 -> aabba2c(7)
4 -> aabbacc(7)
5,6,7 -> (7)

ababcdcdababcdcd
1 -> (16)
2 -> 2ab2cd2ab2cd (12)
3 -> ababcdcdababcdcd (16)
4 -> ababcdcdababcdcd (16)
8 -> 2ababcdcd (9) //min

   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
   a b a b c d c d a b  a  b  c  d  c  d
     ^
         ^

minComStrLen=s.length;
for(let i=1; i<=s.length; i++){
    let compStr = compressStr(s,i);
    minCompStrLen=Math.min(compStr.length, minCompStr.length);
}

compressStr(str,cutLen)함수

for문: 
p1=i;
p2=p1+curLen;
charCnt = 1;
curChar = s[p1] //a

while문 돌면서 s[p2] 체크.
nextChar = s.substr(p2,cutLen); //b

nexChar가 curChar랑 같으면 charCnt++; p2++;
                      
다르면 charCnt>1 이면 "charCnt"+curChar push.
charCnt=1 이면 curChar push. //a
             
*/
function solution(s) {
  let minCompStrLen=s.length;
  
  for(let i=1; i<s.length; i++){
      let compStr = compressStr(s,i);
      minCompStrLen=Math.min(compStr.length, minCompStrLen);
  }
  return minCompStrLen;
}

function compressStr(str, cutLen){
  let p1 = 0;
  let p2 = p1 + cutLen;
  let compStr = "";   
  while(p1<str.length) {
      let charCnt = 1;
      let curChar = str.slice(p1, p1+cutLen); 
      let nextChar = str.slice(p2, p2+cutLen); 
      while(curChar === nextChar){
          charCnt++; //2
          p2+=cutLen;
          nextChar = str.slice(p2, p2+cutLen);
      }
      
      if(charCnt>1){
          compStr+=charCnt.toString();
          compStr+=curChar;
      }
      else {
          compStr+=curChar;
      }
      p1 = p2;
      p2 = p1 + cutLen;
  }
  return compStr;
}