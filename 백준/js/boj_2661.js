const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

let isEnd = false;

function isGood(str) {
  let len = str.length;
  for (let i = 1; i <= len / 2; i++) {
    if (str.substr(len - i, i) === str.substr(len - i * 2, i)) {
      return false;
    }
  }
  return true;
}

function dfs(str) {
  if (isEnd) return;
  if (str.length == N) {
    console.log(str);
    isEnd = true;
  }
  for (let i = 1; i <= 3; i++) {
    let newStr = str + i.toString();
    if (isGood(newStr)) {
      dfs(newStr);
    }
  }
}

dfs("");
