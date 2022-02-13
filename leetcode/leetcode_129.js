// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// 129. Sum Root to Leaf Numbers


/*
   1
  2 3
  
root to leaf -> 12, 13 -> 12+13 = 25

   4
 9  0
5 1

root to leaf -> 495+491+40 = 1026

Input: binary tree
output: integer
Constraints:
- The number of nodes in the tree is in the range [1, 1000].
- 0 <= Node.val <= 9
- The depth of the tree will not exceed 10.
E:


root에서 left로 내려갈때 sum*10 + node.val
root에서 right로 내려갈때 sum*10 + node.val

-> leaf노드에 도달하면 res에 sum을 더해준다. (12)

dfs(root,0)
dfs(root.left 4) -> left, 49 
         right 4
 */

// Solution #1
// N: number of nodes
// d: depth of tree
// time: O(N)
// space: O(d)
var sumNumbers = function(root) {
  let res = 0;
  dfs(root, 0);
  return res;

  function dfs(node, sum){
    // 4-> 49 -> 495/491
    // 4-> 40
    sum = sum*10+node.val; 
    //leaf node
    if(!node.left && !node.right){
      res += sum; // res -> 495+491+40
      return;
    }
    if(node.left) dfs(node.left, sum); //dfs(root.left, 4) -> dfs(root.left, 49) -> dfs(root.right, 49)
    if(node.right) dfs(node.right, sum); //dfs(root.right, 4) -> 
    // 
  }
};


// Solution #2  
var sumNumbers = function(root) {
  let sum = 0;

  function dfs(node, curNum) {
    curNum.push(node.val);

    if (!node.left && !node.right) {
      sum += +curNum.join('');
      return;
    }
    
    if (node.left) dfs(node.left, [...curNum]);
    if (node.right) dfs(node.right, [...curNum]);
  }

  dfs(root, []);

  return sum;
};
