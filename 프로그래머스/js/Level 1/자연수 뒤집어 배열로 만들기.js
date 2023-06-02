function solution(n) {
  n = n.toString().split("");
  for (let i = 0; i < n.length; i++) {
    n[i] = Number(n[i]);
  }
  n.reverse();
  return n;
}
