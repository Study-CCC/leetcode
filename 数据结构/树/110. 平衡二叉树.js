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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let flag = true
  let dfs = (root,depth)=>{
      if(!root||!flag) return depth;
      let left = dfs(root.left,depth+1)
      let right = dfs(root.right,depth+1)
      if(Math.abs(left-right)>1) flag=false;
      return Math.max(left,right)
  }
  dfs(root,0)
  return flag
};
/**
 * dfs
 */