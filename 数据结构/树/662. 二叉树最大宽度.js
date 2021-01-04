/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if(!root) return 0;
  let max = 1;
  let arr = []
 let dfs = (root,level,num) =>{
     if(arr[level]){
         arr[level].push(num)
     }else{
         arr[level] = [num]
     }
     let maxWidth = arr[level][arr[level].length-1]-arr[level][0] + 1
     max = max > maxWidth ? max : maxWidth;
     if(root.left!==null){
         dfs(root.left,level + 1,num*2+1)
     }
     if(root.right!==null){
         dfs(root.right,level + 1,num*2+2)
     }
 }
 dfs(root,0,0)
  return max
};
/**
 * dfs
 * 通过二叉树左节点为2n+1
 * 右节点为2n+2的特性
 * 遇到最后一个节点减去第一个节点
 */