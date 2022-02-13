//https://leetcode.com/problems/maximal-square/
//221. Maximal Square

//time: O(N*M)
//space: O(1)
var maximalSquare = function(matrix) {
  let max = 0;

  // 매트릭스 순회를 위한 for문
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[0].length; j++){
      // out of index 처리.. (위, 대각선, 왼쪽이 없는경우)
      if(i-1 < 0 || j-1 < 0) {
        matrix[i][j] = Number(matrix[i][j]);
        max = Math.max(max, matrix[i][j]);
        continue;
      }
      // 요소가 1인 애를 찾으면
      if(matrix[i][j] === "1"){
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) + 1;
        max = Math.max(max, matrix[i][j]);
      }
    }
  }
  // max 찾아서 리턴해주기.
  return max*max;
};