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
  let res = []
  let bfs = (root,arr,sum)=>{
      if(!root) return;
      if(sum===root.val&&!root.left&&!root.right){
          arr.push(root.val)
          return res.push(arr)
      }
      arr.push(root.val)
      bfs(root.left,arr.slice(0),sum-root.val)
      bfs(root.right,arr.slice(0),sum-root.val) 
  }
  bfs(root,[],sum)
  return res;
};
/**
 * bfs
 */