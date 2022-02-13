// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// 1466. Reorder Routes to Make All Paths Lead to the City Zero

/*
Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]

0->1->3<-2
^
|
4->5

Output: 3 // edge의 direction을 바꾸는 횟수
constraints:
- 2 <= n <= 5 * 104
- connections.length == n - 1
- connections[i].length == 2
- 0 <= ai, bi <= n - 1
- ai != bi
edge case:


0 [[1,1], [4,0]] cnt++ 1
1 [[0,0], [3,1]] cnt++ 2
2 [[3,1]]
3 [[1,0], [2,0]]
4 [[0,1], [5,1]] cnt++ 3
5 [[4,0]]

n개
visited=[f,f,f,f,f,f];

n = 5, 
connections = [[1,0],[1,2],[3,2],[3,4]]

0 [[1,0]] 
1 [[0,1],[2,1]] //1
2 [[1,0],[3,0]]
3 [[2,1],[4,1]] //2
4 [[3,0]] 

visited=[t,t,t,t,t];
start time: 


0 [[1,1], [4,0]] cnt++ 1
1 [[0,0], [3,1]] cnt++ 2
2 [[3,1]]
3 [[1,0], [2,0]]
4 [[0,1], [5,1]] cnt++ 3
5 [[4,0]]

n개
visited=[t,t,f,f,f,f];
*/

//다른 언어로 짠 코드였으면 O(N)이 맞음. 근데, 지금 이 자바스크립트 코드는 O(N^2)임.
//time: O(N^2)
//space: O(N)
var minReorder = function(n, connections) {
  const adjList = Array.from({length: n}, ()=>[[]]); 
	for(let i=0; i<connections.length;i++){ 
    adjList[connections[i][0]].push([connections[i][1],1]);
    adjList[connections[i][1]].push([connections[i][0],0]);
  }
  let cnt=0;
  const visited = new Array(n).fill(false); 
  const queue=[0];
  
  while(queue.length){
    const start=queue.shift(); 
    // visited=[t,t,t,t,t,t];
    visited[start]=true;
    for(let i=0; i<adjList[start].length; i++){ 
      if(visited[adjList[start][i][0]]===false){
        queue.push(adjList[start][i][0]); 
        if(adjList[start][i][1]===1) cnt++;
      } 
    }
  }
  return cnt;
};

// 인터뷰 후 개선한 코드
var minReorder = function(n, connections) {
  const adjList = Array.from({length: n}, ()=>[]); 
	for(let i=0; i<connections.length;i++){ 
        const n = connections[i][0];
        const e = connections[i][1];
        adjList[n].push(e);
        adjList[e].push(-n);
  }
  //console.log(adjList)
  let cnt=0;
  const visited = new Array(n).fill(false); 
  const queue=[0];
  
  while(queue.length){
    const start=queue.shift(); 
    // visited=[t,t,t,t,t,t];
    visited[start]=true;
    const child = adjList[start];
        child.forEach((val)=> {
            if(visited[Math.abs(val)]===false){
                if(val>0) cnt++;
                queue.push(Math.abs(val));
            }
        });
    }
    return cnt;
};

/* 릿코드에서 참고한 코드
 var minReorder = function(n, connections) {
  var graph = new Array(n);
  var result = 0;
  var visited = new Array(n);
 
  for (let i = 0; i < n; i++) graph[i] = new Set();

  var curr;
  var queue = [];
  for (let i = 0; i< connections.length; i++){
      curr = connections[i];
      graph[curr[0]].add(curr[1]);
      graph[curr[1]].add(-curr[0]);
  }
  
  queue.push(0);
  
  while(queue.length > 0) {
      var node = queue.shift();
      visited[node] = true;
      var children = graph[node];
          children.forEach((val) => {
          if (!visited[Math.abs(val)]) {
              if (val > 0) result++;
              queue.push(Math.abs(val));    
          }
      });
  }
  return result;
};
*/

// DFS로 다시 풀어보기
var minReorder = function(n, connections) {
  const adjList = Array.from({length:n}, ()=>[]);
  const visited = new Array(n).fill(false);
  for(let i=0; i<connections.length;i++){
      const n= connections[i][0];
      const e = connections[i][1];
      adjList[n].push(e);
      adjList[e].push(-n);
  }
  //console.log(adjList);
  let cnt =0;
  const dfs = (n) => {
      visited[n] = true;
      const child = adjList[n];
          child.forEach((val)=>{
              if(visited[Math.abs(val)]==false){
                  if(val>0) cnt++;
                  dfs(Math.abs(val), visited);
              }
          });
  }
  dfs(0);
  return cnt;
};