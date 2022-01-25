// 멀쩡한 사각형

/*
가로 8 세로 12
가로 2 세로 3 짜리 직사각형에서 잘리는 개수 * 4 해주면 됨.

0 0         0 0 0     0 0 0 0
0 0         0 0 0     0 0 0 0-> 6개만 가능
0 0         0 0 0     0 0 0 0
2*3->4개   3*3->3개    4*3->6개

0 0 
0 0
0 0
0 0
0 0
2*5->6개

가로+세로-1?
*/

function solution(w, h) {
  var answer = 0;
  let gcd = gcdCal(w,h);
  let cutNum = ((w/gcd) + (h/gcd) - 1)*gcd;
  answer = w * h - cutNum;
  return answer;
}

function gcdCal(a,b) {
  let tmp, n;
  if(a<b){
      tmp = a;
      a = b;
      b = tmp;
  }
  while(b!==0){
      n = a % b;
      a = b;
      b = n;
  }
  return a;
}