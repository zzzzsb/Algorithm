/* DFS(백트래킹) + BFS */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(false));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let answer = 0;

buildWall(0);
console.log(answer);

function bfs() {
  let safeCount = 0;

  // 깊은 복사
  let tmpMap = map.map((v) => [...v]);
  visited = Array.from(Array(N), () => Array(M).fill(false));
  let queue = [];

  // 바이러스 좌표 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tmpMap[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  // 바이러스 확산
  while (queue.length) {
    let [vx, vy] = queue.shift();
    visited[vx][vy] = true;
    for (let d of dir) {
      let [dx, dy] = [vx + d[0], vy + d[1]];
      if (isValidRange(dx, dy)) {
        if (!visited[dx][dy] && tmpMap[dx][dy] === 0) {
          tmpMap[dx][dy] = 2;
          queue.push([dx, dy]);
        }
      }
    }
  }

  // 안전영역 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tmpMap[i][j] === 0) safeCount++;
    }
  }

  // 최대값 갱신
  answer = Math.max(answer, safeCount);
}

// 벽 3개 세우기(DFS)
function buildWall(wallCnt) {
  if (wallCnt === 3) {
    bfs();
    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        buildWall(wallCnt + 1);
        map[i][j] = 0;
      }
    }
  }
}

function isValidRange(i, j) {
  return i >= 0 && j >= 0 && i < N && j < M ? true : false;
}
