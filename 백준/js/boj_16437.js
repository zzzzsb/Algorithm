const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
input = input.map((item) => item.split(" "));
let answer = 0;
const island = new Map();
for (let i = 0; i < N - 1; i++) {
  let animal = input[i][0];
  let number = Number(input[i][1]);
  let connect = Number(input[i][2]);
  island.set(i + 2, { animal, number, connect });
}

console.log(island);

/*
island[i+2].animal===S면 dfs 들어간다.
dfs(island[i+2].number, i+2)

dfs(sheepCount, islandNum):
const animal = island[islandNum].animal
const number = island[islandNum].number
const connect = island[islandNum].connect

if(animal==='W') sheepCount -= number;

if(connect== 1) answer+= sheepCount
else {
  let goSheepCount = sheepCount+number;
  let goIslandNum = connect;
  dfs(goSheepCount, goIslandNum)
}
*/

console.log(answer);
/*
4
S 100 3
W 50 1
S 10 1

섬 개수 4개.

2번 섬: 양(S) 100마리, 3번섬으로가는 다리
3번 섬: 늑대(W) 50마리, 1번섬으로가는 다리
4번 섬: 양(S) 10마리, 1번섬으로 가는 다리

2->3 이동할때 양 50마리(100-50) 3->1 50마리.
4->1 양 10마리.
*/
