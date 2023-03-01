// 적록색약은 인접한 R과 G를 하나로 본다.
// 출력 적록색약 X, 적록색약 O 구역의 수

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const image = input.map((item) => item.split(""));
let visited = Array.from(Array(N), () => Array(N).fill(false));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let notCnt = 0;
let RGWeaknessCnt = 0;

// 색약아닐때
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      dfs(i, j, image[i][j]);
      notCnt++;
    }
  }
}

// 색약일때
visited = Array.from(Array(N), () => Array(N).fill(false));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // R, G를 #로 바꿔줌
    if (image[i][j] === "R" || image[i][j] === "G") image[i][j] = "#";
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      dfs(i, j, image[i][j]);
      RGWeaknessCnt++;
    }
  }
}

function dfs(i, j, color) {
  if (isValidRange(i, j) && !visited[i][j] && image[i][j] === color) {
    visited[i][j] = true;
    for (let d of dir) {
      const [dx, dy] = [i + d[0], j + d[1]];
      dfs(dx, dy, color);
    }
  }
}

function isValidRange(i, j) {
  if (i < 0 || i >= N || j < 0 || j >= N) return false;
  else return true;
}

console.log(notCnt);
console.log(RGWeaknessCnt);
