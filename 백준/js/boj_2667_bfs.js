/* BFS 풀이 */
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
      bfs(i, j);
      answer.push(homeCnt);
      homeCnt = 0;
    }
  }
}

function bfs(i, j) {
  let queue = [];
  queue.push([i, j]);
  homeCnt++;
  while (queue.length) {
    let curHome = queue.shift();
    let [cx, cy] = [curHome[0], curHome[1]];
    visited[cx][cy] = true;
    for (let d of dir) {
      let [dx, dy] = [cx + d[0], cy + d[1]];
      if (isValidRange(dx, dy)) {
        if (map[dx][dy] === 1 && !visited[dx][dy]) {
          visited[dx][dy] = true;
          queue.push([dx, dy]);
          homeCnt++;
        }
      }
    }
  }
}

function isValidRange(i, j) {
  return i >= 0 && i < N && j >= 0 && j < N ? true : false;
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
