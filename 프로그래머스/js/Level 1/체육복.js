function solution(n, lost, reserve) {
  var answer = 0;
  let student = new Array(n).fill(1);
  for (let l of lost) student[l - 1] -= 1;
  for (let r of reserve) student[r - 1] += 1;

  for (let i = 0; i < n; i++) {
    if (student[i] == 0) {
      if (student[i - 1] == 2) {
        student[i] = 1;
        student[i - 1] = 1;
      } else if (student[i + 1] == 2) {
        student[i] = 1;
        student[i + 1] = 1;
      }
    }
  }
  for (let s of student) {
    if (s > 0) answer++;
  }
  return answer;
}
