/*
풀이 1

while문 순회하면서 학생1,2,3의 문제답안 배열이 정답배열 보다 길도록 만들어줌
ex. answers = [1,2,3,4,5,1,2,3,4,5] 일때
student[0] = [1,2,3,4,5,1,2,3,4,5]
student[1] = [2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5] 
student[2] = [3,3,1,1,2,2,4,4,5,5]

정답배열 순회하면서 정답 맞은만큼 score 배열에 더해줌
score 배열의 max값을 찾고, 
score 배열의 점수가 max값과 같은 경우만 인덱스 + 1 (학생 번호)를 리턴해야할 정답배열에 추가해줌
*/
function solution(answers) {
  let answer = [];
  let score = [0, 0, 0];
  let student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 0; i < student.length; i++) {
    while (student[i].length < answers.length) {
      student[i].push(...student[i]);
    }
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === student[i][j]) score[i]++;
    }
  }
  let max = Math.max(...score);
  for (let i = 0; i < 3; i++) {
    if (score[i] === max) answer.push(i + 1);
  }
  return answer;
}

/*
풀이 2

학생 1,2,3이 찍는 방식은 일정한 패턴으로 반복되기에, 
정답 문제 인덱스를 학생 1,2,3이 찍는 방식 배열 길이로 나눠주면 그 나머지 인덱스에 해당하는 항목이 해당 학생이 찍은 답안이 된다.

ex.
      i    0 1 2 3 4 5 6 7                        0 1 2 3 4 
answers = [1,2,3,4,5,4,5,6] 일때, 학생 1이 찍는 방식은 [1,2,3,4,5]가 반복될 것이다.
학생 1이 찍은 정답 중 6번 인덱스 항목은, 6 % 5(학생 1이 찍는 방식 길이) = 1 번 인덱스의 항목인 2가 될것이다.

정답배열 순회하면서 정답 맞은만큼 score 배열에 더해줌
score 배열의 max값을 찾고, 
score 배열의 점수가 max값과 같은 경우만 인덱스 + 1 (학생 번호)를 리턴해야할 정답배열에 추가해줌
*/
function solution(answers) {
  let answer = [];
  let score = [0, 0, 0];
  let student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student[0][i % student[0].length]) score[0]++;
    if (answers[i] === student[1][i % student[1].length]) score[1]++;
    if (answers[i] === student[2][i % student[2].length]) score[2]++;
  }
  let max = Math.max(...score);
  for (let i = 0; i < 3; i++) {
    if (score[i] === max) answer.push(i + 1);
  }
  return answer;
}
