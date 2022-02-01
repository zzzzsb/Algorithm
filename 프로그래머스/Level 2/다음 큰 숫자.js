// 다음 큰 숫자

// Solution #1
// N: 다음 큰 숫자
// time: O(log2(N!/(n-1)!))
// space: O(1)
function solution(n) {
  let nextOneCnt = 0;
  let oneCnt = convertBinary(n);
  while(nextOneCnt !== oneCnt){
      n=n+1;
      nextOneCnt = convertBinary(n);
  }
  return n;
}

function convertBinary(n){
  let oneCnt=0;
  while(n/2 !== 0){
      if(n%2 === 1) oneCnt++;
      n=parseInt(n/2);
  }
  return oneCnt;
}

let n = 12;


// console.log(n.toString(2));
// Solution #2
function solution(n) {
  let oneCnt = n.toString(2).match(/1/g).length;
  while(n++){
      if(oneCnt === n.toString(2).match(/1/g).length) return n;
  }
}