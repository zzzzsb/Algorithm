// 숫자의 표현

// Solution #1
// time: O(N^2) ?
// space: O(1)
function solution(n) {
  let start = 1;
  //자기자신 하나만 있는경우 무조건 포함.
  let cnt = 1;
  while(start<=n){
      let sum = 0;
      for(let i=start; i<n; i++){
          if(sum===n){
              cnt++;
              break;
          }
          if(sum>n) break;
          sum+=i;
      }
      start++;
  }
  return cnt;
}

// Solution #2
// time: O(N)
// space: O(1)
function solution(n) {
	let answer = 0;
    for(var i=1; i<=num; i++) {
    	if (num%i == 0 && i%2 == 1) answer++;
    }
    return answer;
}