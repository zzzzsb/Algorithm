// https://leetcode.com/problems/same-tree/
// 100. Same Tree

/*

 
Input: p = [1,2,3], q = [1,4,3]
    1
     \
      3

Output: true
 
 
1)
input: binary tree p, q
output: true or false
constraints:
	- 0<=node 개수<=100
  - -10^4<=node.val<=10^4
edge case:
	- p = [] / q = [] -> true
  - p = [] / q = [1, 2] -> false
  
2) p = [1,2,3], q = [1,4,3]
          1            1
        2. 3.       2.   3
        
1) p.val == q.val // p.val != q.val -> false

2) isSameTree(p.left, q.left)
3) isSameTree(p.right, q.right)

4) 둘다 null 이면 return true;

DFS !!!! 

// p = [1,2,3], q = [1,3]
      1              1
    2. 3           3
// p=[1,2] q=[1,null,2]
    1          1 
   2            2

// p=[1,2,3] q=[1,2,3]

3)
time: O(N)
space: O(N) 
*/

var isSameTree = function(p, q) {
  if(!p && !q) return true;
  // 한쪽만 null
  if(!p || !q) return false;
  if(p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
