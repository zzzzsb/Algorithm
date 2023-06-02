function solution(s) {
  let answer = [0, 0];
  while (s != "1") {
    let oneCnt = 0;
    let zeroCnt = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "1") {
        oneCnt += 1;
      } else if (s[i] == "0") {
        zeroCnt += 1;
      }
    }
    answer[1] += zeroCnt;
    s = oneCnt.toString(2);
    answer[0] += 1;
  }
  return answer;
}
