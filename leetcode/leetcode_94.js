// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
// 94. Binary Tree Inorder Traversal

/*
왼쪽->부모->오른쪽.

I: binary tree
O: array
C:
- The number of nodes in the tree is in the range [0, 100].
- 100 <= Node.val <= 100
E: 
if(!root) return [];
      1
     2 3
    4 5 
4-2-5-1-3

dfs(1) dfs(2) -> dfs(4) -> dfs(5)
4,2,5,1,3

if(!root.left && !root.right){
    res.push(root.val);
    return;
}
if(root.left) dfs(root.left)
res.push(root.val);
if(root.right) dfs(root.right)

     
*/
//N: number of nodes
//time: O(N)
//space: O(N)
var inorderTraversal = function(root) {
  //edge case
  if(!root) return [];
  const res = [];
  dfs(root);
  return res;
  
  function dfs(root){
      if(!root.left && !root.right){
          res.push(root.val);
          return;
      }
      if(root.left) dfs(root.left)
      res.push(root.val);
      if(root.right) dfs(root.right)
  }
};

/*
     1
    2 3
  4  5

4-2-5-1-3
h(1)->h(2)->h(4)
        ->h(5)
 ->h(3)
4-2-5-1-3
*/
//leetcode solution 보고 푼거
var inorderTraversal = function(root) {
  if(!root) return [];
  const res = [];
  helper(root);
  return res;

  function helper(root){
    if(root){
      helper(root.left);
      res.push(root.val);
      helper(root.right);
    }
  }
};

/*
     1
    2 3
  4  5

4-2-5-1-3
dfs(1)->dfs(2)->dfs(4)->dfs(5)
4-2-5-1-3
*/
//submission 참고
var inorderTraversal = function(root){
  const res = [];
  dfs(root);
  return res;

  function dfs(node){
    if(!node) return;
    if(node.left) dfs(node.left);
    res.push(node.val);
    if(node.right) dfs(node.right);
  }
};