// 최솟값 만들기 

// time: O(N)
// space: O(1)
function solution(A,B){
  let sum = 0;
  A.sort((a,b) => a-b);
  B.sort((a,b) => b-a);
  for(let i=0; i<A.length; i++){
      for(let j=0; j<B.length; j++){
          if(i===j) sum += A[i]*B[j];
      }
  }
  return sum;
}