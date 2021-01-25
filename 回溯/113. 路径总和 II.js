/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [];
  let dfs = (root,arr,total)=>{
      if(!root) return;
      arr.push(root.val)
      if(total+root.val===sum&&!root.left&&!root.right) {
          res.push(arr.slice());}
      else{
          dfs(root.left,arr,total+root.val)
          dfs(root.right,arr,total+root.val)
      }
      arr.pop()
  }
  dfs(root,[],0)
  return res;
};