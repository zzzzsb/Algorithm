// https://leetcode.com/problems/max-area-of-island/
// 695. Max Area of Island

/*
input: grid 2d array
output: maximum area (integer)
constraints:
    - grid 1<=행 
    - grid 열<=50
    
[0,0]부터 보다가 1있으면 island++; 그 자리에서 상하좌우 보기 1이면 island++하고 0이면 return

[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]

*/
var maxAreaOfIsland = function(grid) {
  let max = 0;
  let island = 0;
  const dfs = (i,j) => {
      if(i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j]==0) return 0;
      grid[i][j]=0;
      return 1+dfs(i-1,j)+dfs(i,j+1)+dfs(i+1,j)+dfs(i,j-1);
  };
  
  for(let i=0; i<grid.length;i++){
      for(let j=0; j<grid[0].length;j++){
          if(grid[i][j]==1) max= Math.max(max, dfs(i,j));
      }
  }
  return max;
};
