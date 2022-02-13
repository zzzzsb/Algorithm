// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// 1448. Count Good Nodes in Binary Tree

/*
binary tree가 주어지는데, 트리의 노드 X는 
root부터 x까지의 경로가 X보다 큰 값의 노드가 없을때 good이라고 불림.

Input: root(tree)
output: integer(good node의 개수)
constraints:
    - 1<=binary tree node 개수 <=10^5
    - -10^4<노드의 밸류<10^4
edge case:


[3,1,4,3,null,1,5]
          3
      1       4
   3  null  1   5
   
tree 3 1 3 4 1 5
good 1   2 3   4
max  3 3 3 4 4 5
   
tree 3 3 4 2 
good 1 2 3 
max  3 3 4 3
*/
var goodNodes = function(root) {
  let max = root.val;
  return DFS(root, max);
  
};


function DFS(curNode, max){
  if(curNode == null) return 0;
  let goodNode = 0;
  if(curNode.val>=max){
      goodNode++;
      max=curNode.val;
  }
  goodNode+=DFS(curNode.left, max);
  goodNode+=DFS(curNode.right, max);
  
  return goodNode;
}