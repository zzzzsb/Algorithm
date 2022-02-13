// https://leetcode.com/problems/decode-ways/
// 91. Decode Ways

/*
I: string
O: Integer
C: 
- 1 <= s.length <= 100
- s contains only digits and may contain leading zero(s).
E:
- s.length===1일때. s!=="0" return 1; // s==="0" return 0;
- s[0]==='0' return 0;

brute force:
s="12"
let cnt=0;
1 -> 2 -> cnt++;
12 -> cnt ++;

s="226"
2->2->6 cnt++;
 -> 26 cnt++;
22->6 cnt++;

11106

1->1->1->0(x) (X)
    ->10->6 cnt++;
 ->11 ->0(x) (X)
11-> 1 ->0 (x) (X)
  -> 10->6 cnt++;

Optimal:
*dp에서 내 인덱스 앞의 두 문자를 본다.
01234
1234  
    ^
  
0 1 2 3 4
1 1 2 3 3
  
s[i]
for(let i=2; i<s.length+1; i++){
    //앞의 한문자 볼때
    if("1"<=s[i-1]<"9") dp[i]=dp[i-1]
    //앞의 두문자 볼때
    if("10"<=s.slice(i-2,i)<="26") dp[i]+=dp[i-2]
}

  dp 
i 0 1 2 3 4 5
  0 2 2 2 2 0 


*/
var numDecodings = function(s) {
  //edge case
  if(s[0]==="0") return 0;
  if(s.length===1) return 1;
  
  const dp = new Array(s.length+1).fill(0);
  dp[0]=1;
  dp[1]=1;
  
  for(let i=2;i<s.length+1;i++){
      let oneN=Number(s.slice(i-1,i));
      let twoN=Number(s.slice(i-2,i));
      //앞의 한문자 볼때
      if(1<=oneN && oneN<=9) dp[i]+=dp[i-1];
      //console.log(dp[i]) ->0
      //앞의 두문자 볼때
      if(10<=twoN && twoN<=26) dp[i]+=dp[i-2];
  }
  return dp[s.length];
  
};