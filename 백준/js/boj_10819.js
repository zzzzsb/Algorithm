const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
input = input[1].split(" ").map(Number);

const check = new Array(N).fill(false);
const newArr = [];
let max = 0;

function cal(arr) {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

function dfs(depth) {
  for (let i = 0; i < N; i++) {
    if (depth === N) {
      max = Math.max(max, cal(newArr));
    }

    if (!check[i]) {
      check[i] = true;
      newArr.push(input[i]);
      dfs(depth + 1);
      check[i] = false;
      newArr.pop();
    }
  }
}

dfs(0);
console.log(max);
