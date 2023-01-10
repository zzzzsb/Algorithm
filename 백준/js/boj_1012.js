const { deflateSync } = require('zlib');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");
let testNum = Number(input[0]);
let land, visited, m, n, posNum;
const result = [];
let idx = 0;

while(testNum > 0){
  idx++;
  [m, n, posNum] = input[idx].split(" ").map(Number);
  land = Array.from(Array(m), () => Array(n).fill(0));
  visited = Array.from(Array(m), () => Array(n).fill(false));
  for(let i=idx+1; i<idx + posNum; i++){
    const [x, y] = input[i].split(" ").map(Number);
    land[x][y] = 1;
  }
  console.log(land);

  let posCnt = 0;
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(land[i][j]===1 && !visited[i][j]){
        posCnt += dfs(i, j);
      }
    }
  }
  result.push(posCnt)

  testNum--;
  idx += posNum;
}

function dfs(x, y){
  const dir = [[-1,0],[0,1],[1,0],[0,-1]];
  visited[x][y] = true;
  for(let [dx, dy] of dir){
    const [nx, ny] = [x+dx, y+dy]
    if(nx >= 0 && nx < m && ny >= 0 && ny < n){
      if(land[nx][ny] == 1 && !visited[nx][ny]) dfs(nx, ny);
    }
  }

}

for(let res of result){
  console.log(res);
}