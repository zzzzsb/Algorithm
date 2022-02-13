// https://leetcode.com/problems/diameter-of-binary-tree/
// 543. Diameter of Binary Tree

var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  dfs(root);
  return diameter;
  
  function dfs(node){
      if(!node) return -1;
      const left = dfs(node.left)+1;
      const right = dfs(node.right)+1;
      diameter=Math.max(diameter, left+right);
      console.log(left, right, diameter);
      //console.log(diameter)
      return Math.max(left, right);
  }
};
/*
dfs(1) 
left = dfs(2) 2-> dfs(4), 1 -> dfs(5), 1
right = dfs(3) , 1
*/