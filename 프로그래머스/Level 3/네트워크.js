/* DFS */
/*
dfs(0)
[t,f,f]
[1,1,0] -> dfs(1)
           [t,t,f] 
           [1,1,1] -> dfs(2)
                      [t,t,t]
                      [0,1,1]
*/
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  function dfs(idx) {
    visited[idx] = true;
    for (let i = 0; i < n; i++) {
      if (!visited[i] && computers[idx][i] === 1) dfs(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

/* BFS */
/*
0번부터 시작
queue.push(0) [0]
[t,f,f] 바꿔줌.

while(queue.length)
computers[0]= [1,1,0]
큐에 푸시.[1]
[t,t,f] 바꿔줌.

1번 = [1,1,0]

bfs 끝나면 answer++;
*/
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  function bfs(node) {
    visited[node] = true;
    const queue = [node];
    while (queue.length) {
      const curNode = queue.shift();
      for (let i = 0; i < n; i++) {
        if (!visited[i] && computers[curNode][i] === 1) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }
  return answer;
}
