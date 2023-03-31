const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const card = input[0].split(" ").map(Number);

const check = new Array(N).fill(false);
const cardArr = [];
let answer = 0;

function dfs(depth) {
  if (depth === 3) {
    let sum = cardArr.reduce((s, v) => s + v);
    if (sum > answer && sum <= M) {
      answer = sum;
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!check[i]) {
      check[i] = true;
      cardArr.push(card[i]);
      dfs(depth + 1);
      check[i] = false;
      cardArr.pop();
    }
  }
}

dfs(0);
console.log(answer);
