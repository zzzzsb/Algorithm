// 피보나치 수

// time: O(N)
// space: O(1)
function solution(n) {
  let fibo = [0,1];
  for(let i=2; i<=n; i++){
      fibo[0] %= 1234567;
      fibo[1] %= 1234567;
      
      let sum = fibo[0] + fibo[1];
      fibo[0]= fibo[1];
      fibo[1]= sum;
  }
  return fibo[1]%1234567;
}