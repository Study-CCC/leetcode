/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true;
 const check = (leftRoot,rightRoot)=>{
     if(!leftRoot&&!rightRoot) return true;
     if(!leftRoot||!rightRoot) return false
     if(leftRoot.val!==rightRoot.val) return false
     return check(leftRoot.left,rightRoot.right)&&check(leftRoot.right,rightRoot.left)
 }
return check(root.left,root.right)
};
/**
 * 递归
 * 同步移动
 */