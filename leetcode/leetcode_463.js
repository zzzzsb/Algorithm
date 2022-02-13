// https://leetcode.com/problems/island-perimeter/
// 463. Island Perimeter

/*
1)
input: grid 2d array
output: integer. perimeter of the island
constraints:
    - 1<=row(가로) , col(세로)<=100
    - 하나의 아일랜드만 있음
edge case
[
[0,1,0,0], 2
[1,1,1,0], 
[0,1,0,0],
[1,1,0,0]
]
0이거나 범위 외면 +1, 땅이면 +0 
만약 상하좌우에 1 있으면 그 자리에서 상하좌우 보기
2)

*/
var islandPerimeter = function(grid) {
  var perimeter = 0;
  for(let i=0; i<grid.length;i++){
      for(let j=0; j<grid[0].length; j++){
          //땅이면
          if(grid[i][j]==1){
              perimeter+=4;
              //위쪽
              if(i-1>=0 && grid[i-1][j]==1) perimeter--;
              //오른쪽
              if(j+1<grid[0].length && grid[i][j+1]==1) perimeter--;
              //아래쪽
              if(i+1<grid.length && grid[i+1][j]==1) perimeter--;
              //왼쪽
              if(j-1>=0 && grid[i][j-1]==1) perimeter--;
          }
      }
  }
  return perimeter;
};

/*
function dfs(grid,i,j){
  const direction=[
      [0,-1],[1,0],[0,1],[-1,0]
  ];
  for(let i=0; i<grid.length;i++){
      for(let j=0; j<grid[0].length;j++){
          
      }
  }
  
}
*/