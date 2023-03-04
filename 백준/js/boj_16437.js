const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
input = input.map((item) => item.split(" "));

const tree = Array.from(Array(N + 1), () => []);
const sheep = new Array(N + 1).fill(0);
const wolf = new Array(N + 1).fill(0);
let answer = 0;

for (let i = 0; i < input.length; i++) {
  let curNode = input[i];
  let parent = Number(curNode[2]);
  // 트리 생성
  tree[parent].push(i + 2);
  // 각 섬별 양, 늑대 수 배열 생성
  if (curNode[0] === "S") sheep[i + 2] = Number(curNode[1]);
  else wolf[i + 2] = Number(curNode[1]);
}

function dfs(curNode) {
  let sheepCount = sheep[curNode];

  for (let child of tree[curNode]) {
    sheepCount += dfs(child);
  }

  if (wolf[curNode] > sheepCount) {
    wolf[curNode] -= sheepCount;
    sheepCount = 0;
  } else {
    sheepCount -= wolf[curNode];
    wolf[curNode] = 0;
  }

  return sheepCount;
}

console.log(dfs(1));
