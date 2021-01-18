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
var distributeCoins = function(root) {
  let count =0;
  let dfs = (root)=>{
      if(!root) return 0;
      let l = dfs(root.left)
      let r = dfs(root.right)
      count += Math.abs(l) + Math.abs(r)
      return root.val + l + r -1
  }
  dfs(root)
  return count;
};