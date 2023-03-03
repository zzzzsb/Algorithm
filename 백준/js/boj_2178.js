// 최단거리 = BFS

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((item) => item.split("").map(Number));
const check = Array.from(Array(N), () => Array(M).fill(0));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let queue = [];
queue.push([0, 0]);
check[0][0] = 1;

while (queue.length) {
  let [x, y] = queue.shift();

  for (let d of dir) {
    let [dx, dy] = [x + d[0], y + d[1]];
    if (isValidRange(dx, dy)) {
      if (maze[dx][dy] === 1 && !check[dx][dy]) {
        check[dx][dy] = check[x][y] + 1;
        queue.push([dx, dy]);
      }
    }
  }
}

function isValidRange(i, j) {
  return i >= 0 && j >= 0 && i < N && j < M ? true : false;
}

console.log(check[N - 1][M - 1]);
