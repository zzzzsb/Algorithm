// 124 나라의 숫자

// R: res.length
// B: 콜스택에 쌓이는 backtracking 함수 개수 = n의 몫이 3 미만일때까지 나누는 횟수
// time: O(B)
// space: O(R+B)
function solution(n) {
  let res = "";
  res = backtracking(n, res);
  
  return res;
}

function backtracking(n, res){
  let tempQ = parseInt(n/3); 
  let tempR = n%3; 
  if(tempR === 0){
      tempQ = tempQ-1; 
      tempR = 3;
  }
  if(tempQ >= 3){
      res = backtracking(tempQ, res);
  }
  
  if(tempR === 3) tempR =4;

  if(tempQ < 3 && tempQ !== 0) res += tempQ.toString();
  res += tempR.toString();

  return res;
}

/************************************************/

//optimal code
function change124(n) {
  var src = [4,1,2];

  var result = '';
  while(n) {
    result = src[n%3] + result;
    n = Math.floor((n-1)/3);
  }
  return result;
}