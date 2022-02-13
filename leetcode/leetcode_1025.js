// https://leetcode.com/problems/divisor-game/
// 1025. Divisor Game

/*
- 0~n, n을 x로 나눴을때 나누어 떨어지는 숫자.
- n을 n-x로 replace
I: integer
O: boolean(앨리스가 이기면 true)
C: 1<=n<=2000
E: if(n===1) return false;

2일때 1만 택할 수 있음.

0 1 2 3 4 5 6
f f t f f f

1 -> false

2 -> 앨리스 1 선택. 1 -> 밥 짐(true)
     
3 -> 앨리스 1선택. 2 -> 밥 1선택. 1 -> 앨리스 짐(false)
          
4 -> 앨리스 1선택. 3 -> 밥 1선택. 2 -> true
          
5 -> 앨리스 1 선택. 4 -> 밥 1선택. 3 -> false
                 4  -> 밥 2선택. 2 -> true
                   
6 -> 앨리스 1, 5 -> 밥 1 선택. 4 -> true
  -> 앨리스 2, 4 -> 밥 1 선택. 3 -> false
  -> 앨리스 3, 3 -> 밥 1 선택. 2 -> true
  
7 -> 앨리스 1, 6 -> 밥 1 선택. 5 -> 


n이 1이면 앨리스가 진다.
n이 2이면 앨리스가 이긴다.

앨리스가 짝수면. 짝수-1해서 홀수를 밥에게 준다. 홀수-홀수=짝수기 때문에 밥은 앨리스에게 짝수를 준다. ... 2 결국 앨리스가 이김.
앨리스 홀수면. 홀수-홀수해서 짝수를 밥에게 준다. 밥은 짝수-1.. 앨리스에게 홀수를 준다. 
*/
var divisorGame = function(n) {
  if(n===1) return false;
  const dp=new Array(n+1).fill(false);
  // 5일때 1
  // 0 1 2 3 4 5
  // f f t f t f 
  for(let i=2; i<n+1; i++){
      for(let j=1; j<i; j++){
          if(i % j === 0 && !dp[i-j]){
              dp[i]=true;
              break;
          }
      }
  }
  
  return dp[n];
};
