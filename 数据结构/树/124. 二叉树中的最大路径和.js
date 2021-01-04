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
var maxPathSum = function(root) {
  if(!root) return 0;
  let max = -Infinity;
  let dfs = (root)=>{
     if(!root) return 0;
      let leftVal = Math.max(0,dfs(root.left))
      let rightVal = Math.max(0,dfs(root.right))
      let maxVal = root.val + leftVal+rightVal
      max = Math.max(max,maxVal)
      return root.val + Math.max(leftVal,rightVal)
      }
      dfs(root)
      return max;
};

/**
 * dfs
 */