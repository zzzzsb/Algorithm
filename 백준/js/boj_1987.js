const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split(""));
const alphabet = new Array(26).fill(false);
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let answer = 0;

dfs(0, 0, 1);
console.log(answer);

function dfs(i, j, cellCnt) {
  alphabet[board[i][j].charCodeAt() - 65] = true;
  answer = Math.max(answer, cellCnt);
  for (let d of dir) {
    const [dx, dy] = [i + d[0], j + d[1]];
    if (isValidRange(dx, dy) && !alphabet[board[dx][dy].charCodeAt() - 65]) {
      dfs(dx, dy, cellCnt + 1);
      alphabet[board[dx][dy].charCodeAt() - 65] = false;
    }
  }
}

function isValidRange(i, j) {
  if (i < 0 || i >= R || j < 0 || j >= C) return false;
  else return true;
}
