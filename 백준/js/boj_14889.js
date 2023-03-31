const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((v) => v.split(" ").map(Number));

const check = new Array(N).fill(false);
let answer = Number.MAX_VALUE;

function dfs(idx, cnt) {
  if (cnt === N / 2 && check[0]) {
    let start = 0;
    let link = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (check[i] && check[j]) start += board[i][j];
        else if (!check[i] && !check[j]) link += board[i][j];
      }
    }
    answer = Math.min(answer, Math.abs(start - link));
    return;
  }

  for (let i = idx; i < N; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs(i + 1, cnt + 1);
      check[i] = false;
    }
  }
}

dfs(0, 0);
console.log(answer);
