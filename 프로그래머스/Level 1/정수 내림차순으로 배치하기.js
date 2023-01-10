function solution(n) {
  var answer = n.toString();
  answer = answer.split("");
  answer.sort((a, b) => b - a);
  answer = answer.join("");
  return Number(answer);
}
