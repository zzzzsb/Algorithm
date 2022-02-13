// https://leetcode.com/problems/binary-tree-right-side-view/
// 199. Binary Tree Right Side View

/*
1)
input: binary tree root
output: array
constraints:
    - 0<=#nodes<=100
    - -100 <= node.val <= 100
edge case
    - node 없을때!
2) BFS
[1,2,null,3]
출력[1,2,3]

queue [2]
right [1,2]

[1,2,3,null,5,null,4]

queue [2,3]
right [1]

[1,2,3,4]
      1
     2.3
    4
left,right 둘다 있으면 right만 rightSide에 넣음
left만 있으면 left만 넣음
right만 있으면 right만 넣음
queue [[2,2] [4,3]
right [1,3]
depth.    3
*/
var rightSideView = function(root) {
  if(!root) return [];
  return bfs(root);
};

function bfs(root){
  const queue=[[root,0]];
  const rightSide =[];
  let curDepth = 0;
  while(queue.length){
      const [curNode, depth] = queue.shift();
      if(depth === curDepth){
          rightSide.push(curNode.val);
          curDepth++;
      }
      if(curNode.right) queue.push([curNode.right, depth+1]);
      if(curNode.left) queue.push([curNode.left, depth+1]);
  }
  return rightSide;
}
