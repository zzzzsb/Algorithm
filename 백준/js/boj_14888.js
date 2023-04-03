const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);
const op = input[2].split(" ").map(Number);
let [max, min] = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

function dfs(idx, res) {
  if (idx === N) {
    max = Math.max(max, res);
    min = Math.min(min, res);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (op[i] == 0) continue;

    op[i]--;

    switch (i) {
      case 0:
        dfs(idx + 1, res + num[idx]);
        break;
      case 1:
        dfs(idx + 1, res - num[idx]);
        break;
      case 2:
        dfs(idx + 1, res * num[idx]);
        break;
      case 3:
        if (res < 0) {
          dfs(idx + 1, -Math.floor(-res / num[idx]));
        } else {
          dfs(idx + 1, Math.floor(res / num[idx]));
        }
        break;
    }

    op[i]++;
  }
}

dfs(1, num[0]);
console.log(`${max}\n${min}`);
