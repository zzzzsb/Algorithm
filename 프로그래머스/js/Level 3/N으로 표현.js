function solution(N, number) {
  const dp = new Array(9).fill().map(() => new Set());
  for (let i = 1; i < 9; i++) {
    dp[i].add(Number(N.toString().repeat(i)));
    for (let j = 1; j < i; j++) {
      for (let n1 of dp[j]) {
        for (let n2 of dp[i - j]) {
          dp[i].add(n1 + n2);
          dp[i].add(n1 - n2);
          dp[i].add(n1 * n2);
          dp[i].add(parseInt(n1 / n2));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }
  return -1;
}
