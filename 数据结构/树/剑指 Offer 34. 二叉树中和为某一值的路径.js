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
  let arrSum = []
  let dfs = (root,arr,sum)=>{
      if(!root) return null;
      arr.push(root.val)
      if(root.val==sum&&!root.left&&!root.right){
          arrSum.push(arr.slice(0))
          return;
      }
          dfs(root.left,arr.slice(0),sum-root.val)
          dfs(root.right,arr.slice(0),sum-root.val)
          arr.pop()
  }
  dfs(root,[],sum)
  return arrSum
};

/**
 * DFS
 */