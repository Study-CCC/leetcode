/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0;
  let searchMax = (root)=>{
      if(!root) return 0;
      let left =  searchMax(root.left)
      let right = searchMax(root.right)
      max = Math.max(max,left+right)
      return Math.max(left,right)+1
  }
   searchMax(root)
   return max;
};
/**
 * 递归
 */