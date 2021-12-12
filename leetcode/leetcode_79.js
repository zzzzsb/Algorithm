//https://leetcode.com/problems/word-search/
//79. Word Search

//언니 안뇽
/*11:43~

Input: board = 
[["A","B","C","E"]
,["S","F","C","S"]
,["A","D","E","E"]],
word = "ABCCED"

Output: true

Input: board = 
[["A","B","C","E"]
,["S","F","C","S"]
,["A","D","E","E"]], word = "SEE"
output : true

Input: board = 
[["A","B","C","E"]
,["S","F","C","S"]
,["A","D","E","E"]], 
word = "ABCB"

Output: false

Input: board = 
[["A","A","A","A"]
,["A","A","A","A"]
,["A","A","A","B"]], 
word = "AAAAAAB"

1)
Input: 1*1~6*6 array
output: true/false
constraints:
 	- mxn array, 1<=m<=6, 1<=n<=6
  - 1<=word.length<=15
edge case:

2)
	DS:
	Algorithm: backtracking

1) if(word[i]==board[i][j]), board[i][j]의 오른쪽과 아래를 확인한다. (word[i+1]===board[i][j+1]/board[i+1][j])
2) 오른쪽이랑 아래에 있어. 있으면 그자리에서 또 다음단어의 알파벳이랑 그자리의 오른쪽, 아래쪽을 확인. 
3) 만약에 word[word.length-1] 마지막 알파벳까지 찾았어. 그러면 true리턴.
4) 중간에 오른쪽, 아래쪽을 봤는데도 다음 알파벳이 없어. 그러면 backtracking. (그 전의 자리로........... ^.^.....)
5) 다 돌았는데도 true를 리턴하지 못했으면 false 리턴.

Input: board = 
[["1","1","1","E"]
,["S","F","C","S"]
,["A","D","E","E"]],
word = "ABCCED"


Input: board = 
[["1","1","C","E"]
,["S","F","C","S"]
,["A","D","E","E"]], 
word = "ABCB"

Input: board = 
[["A","B","C","E"]
,["S","F","C","S"]
,["A","D","E","E"]], word = "SEE"
output : true
*/
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
  if(startI<0 || startI>=board.length || startJ<0 || startJ>=board[0].length || word[w]!==board[startI][startJ]) return false; // out of index인지, word[w]와 다른지같은지 확인.
  if(w===word.length-1) return true;  // 만약에 인덱스가 invalid, word[w]와 다르면 return false;
  // 최종정답인 경우 if(w===word.length-1) , 바로 return true;
  let curBoard= board[startI][startJ];
  // 본애 처리해줌
  board[startI][startJ]=0;
  
  const res = 
  backtracking(board, word, w+1, startI, startJ+1) || 
  backtracking(board, word, w+1, startI+1, startJ) || 
  backtracking(board, word, w+1, startI, startJ-1) || 
  backtracking(board, word, w+1, startI-1, startJ);
  // 오른쪽으로 가기
  // 왼쪽
  // 위
  // 아래
  
  board[startI][startJ]= curBoard;
  return res;
}

/*
 Runtime: 280 ms, faster than 91.05% of JavaScript online submissions for Word Search.
Memory Usage: 39.1 MB, less than 87.89% of JavaScript online submissions for Word Search.

 */

