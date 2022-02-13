// https://leetcode.com/problems/word-search/
// 79. Word Search


// M=board.length, N=board[0].length, L=word.length
// time O(M * N * 3^L);
// space O(L)
var exist = function(board, word) {
  //edge case
  if(board.length * board[0].length < word.length) return false;
  
  let w=0;
  for(let i=0; i<board.length; i++){ //time: O(m*n^4)
    for(let j=0; j<board[0].length; j++){
        if(backtracking(board, word, w, i, j)) return true;
    }
  }
  return false;
};

function backtracking(board, word, w, startI, startJ){
  // Check out of index, word[w]와 다른지 같은지 확인.
  // 만약에 인덱스가 invalid, word[w]와 다르면 return false;
  if(startI<0 || startI>=board.length || startJ<0 || startJ>=board[0].length || word[w]!==board[startI][startJ]) return false; 

  // 최종 답인 경우 if(w===word.length-1), 바로 return true;
  if(w===word.length-1) return true;  
  // 확인한 보드 처리해줌
  let curBoard= board[startI][startJ];
  board[startI][startJ]=0;
  
  //상하좌우 이동
  const res = 
  backtracking(board, word, w+1, startI, startJ+1) || 
  backtracking(board, word, w+1, startI+1, startJ) || 
  backtracking(board, word, w+1, startI, startJ-1) || 
  backtracking(board, word, w+1, startI-1, startJ);
  
  board[startI][startJ]= curBoard;
  return res;
}