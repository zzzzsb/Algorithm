// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number

/*
I: integer
O: integer
C: 0 <= n <= 30
E:
- if(n<2) f[n]=n;

f 0 1 2 3 4 5
  0 1 1 2 3 5

*/
var fib = function(n) {
  const f = new Array(n+1).fill(0);
  
  for(let i=0; i<n+1; i++){
      if(i < 2) f[i]=i;
      else f[i]= f[i-1]+f[i-2];
  }
  
  return f[n];
};