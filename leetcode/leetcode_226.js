// https://leetcode.com/problems/invert-binary-tree/
// 226. Invert Binary Tree

/*
input: binary tree
output: invert binary tree(root)
constraints:
    - 트리 노드 개수는 0~100
    - 노드 밸류는 -100~100사이
    - 트리가 없을수도 있음
edge case 
    - 트리 없을때
    
bfs로 root를 보는데
       [4]
queue  [1,3,6,9]
root [4,7,2,9,6,3,1]
 */
var invertTree = function(root) {
    if(!root) return null;
    return bfs(root);
};

function bfs(root){
    const queue = [root];    
    while(queue.length){
        const curNode = queue.shift();
        if(curNode.left !=null) queue.push(curNode.left);
        if(curNode.right !=null) queue.push(curNode.right);

        const temp = curNode.left;
        curNode.left=curNode.right;
        curNode.right=temp;
       
    }
    return root;
}