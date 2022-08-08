/*
컴퓨터 수, 쌍 수
1 - 2 - 3
| /
5 - 6

4 - 7

N : 7
edge_N : 6

graph
1: [2, 5]
2: [1, 3, 5]
3: [2]
4: [7]
5: [1, 2, 6]
6: [5]
7: [4]

visited
1 2 3 4 5 6 7
t t t f t t f

5
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0]);
let edge_N = Number(input[1]);

let graph = [...Array(N+1)].map(() => []);
let visited = Array(N+1).fill(false);
let result = 0;

for(let i=2; i<input.length; i++){
    let [n1, n2] = input[i].split(" ").map(v => Number(v));
    graph[n1].push(n2);
    graph[n2].push(n1);
}

function dfs(n) {
    if(visited[n]) return;
    visited[n] = true;
    result++;
    graph[n].forEach(v => {
        if(!visited[v]) dfs(v);
    })
}

dfs(1);
console.log(result-1);