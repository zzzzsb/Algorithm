// https://leetcode.com/problems/number-of-operations-to-make-network-connected/
// 1319. Number of Operations to Make Network Connected

var makeConnected = function(n, connections) {
  //edge case: cable이 충분하지 않은 경우
  if(connections.length<n-1) return -1;
  // [t,t,t,f]
  const dfs = (adjList, cur, visited) => {
      visited[cur]=true;
      //console.log(adjList.length);
      const curList = adjList[cur];
      for(let i=0; i<curList.length;i++){
          if(visited[curList[i]]===false) dfs(adjList, curList[i], visited);
      }
  };
  
  //1. adj list 만들기
  //    0     1     2   3
  // [[1,2],[0,2],[0,1],[]]
  // [[1,2,3],[0,2,3],[0,1],[0,1],[],[]]

  var adjList = Array.from({length: n}, () => []);
  for(let i=0; i<connections.length;i++){
      let n=connections[i][0];
      let e=connections[i][1];
      adjList[n].push(e);
      adjList[e].push(n);
  }
  //console.log(adjList);
  
  //
  // 0 1 2 3
  //[t,t,t,f]
  //[t,t,t,t,f,f]
  let res = 0;
  const visited=new Array(n).fill(false);
  for(let i=0; i<n;i++){
      if(visited[i]===false){
          res+=1;
          dfs(adjList, i, visited);
      }
  }

  return res-1;
};