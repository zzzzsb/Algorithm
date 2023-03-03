/* DFS 풀이 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((item) => item.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const answer = [];
let homeCnt = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      dfs(i, j);
      answer.push(homeCnt);
      homeCnt = 0;
    }
  }
}

function dfs(row, col) {
  if (isValidRange(row, col) && !visited[row][col] && map[row][col] === 1) {
    visited[row][col] = true;
    homeCnt++;
    for (let d of dir) {
      dfs(row + d[0], col + d[1]);
    }
  }
}

function isValidRange(row, col) {
  if (row < 0 || row >= N || col < 0 || row >= N) return false;
  else return true;
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
