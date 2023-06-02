/*
수빈
N: progresses.length === speeds.length === left.length
time: O(N)
space: O(N) + O(A) for answer;
*/
function solution(progresses, speeds) {
  var answer = [];
  let left = [];
  for(let i=0; i<progresses.length; i++){
      left.push(Math.ceil((100 - progresses[i])/speeds[i]));
  }

  let complete = left[0];
  let cnt = 1;
  for(let i=1; i<left.length; i++){
      if(complete>=left[i]) cnt++;
      else{
          answer.push(cnt);
          complete=left[i];
          cnt = 1;
      }
  }
  answer.push(cnt);
  return answer;
}