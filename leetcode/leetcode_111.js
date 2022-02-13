// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// 111. Minimum Depth of Binary Tree

var minDepth = function(root) {
  //edge case
  if(!root) return 0; 
  const queue = [[root, 1]];

  while(queue.length>0){
      const [curNode, depth] = queue.shift();
      //leaf node
      if(!curNode.left && !curNode.right) return depth;
      if(curNode.left) queue.push([curNode.left, depth + 1]);
      if(curNode.right) queue.push([curNode.right, depth + 1]);
  }
};

