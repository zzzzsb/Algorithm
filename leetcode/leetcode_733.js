// https://leetcode.com/problems/flood-fill/
// 733. Flood Fill

var floodFill = function(image, sr, sc, nColor) {
  const sColor = image[sr][sc]; // 1
  const height = image.length; //3
  const width = image[0].length; //3

  const grids = [[0,1],[1,0],[-1,0],[0,-1]];

  const dfs = (sr,sc) => {
  if(sr<0 || sr >= width || sc <0 || sc >= height || image[sr][sc] !== sColor) return ; // 1,1 -> pass
  
  image[sr][sc]=nColor;
  
  for(let i=0;i<grids.length;i++){
    const x = grids[i][0]; //0
    const y = grids[i][1]; //1
    
    dfs(sr+x,sc+y); //dfs(1,2)
  }

};
//[0,2,0]
//[2,2,2]
//[0,2,0]
if(image[sr][sc]!==nColor) dfs(sr,sc);

return image;
};