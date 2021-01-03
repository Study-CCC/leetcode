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
var longestZigZag = function(root) {
  let maxLen = 0;
  let dfs = (root,flag,curSum)=>{
      if(!root) {
          maxLen = (curSum-1)>maxLen?curSum-1:maxLen;
          return;
      }
      switch (flag){
          case 0:
              dfs(root.right,1,curSum+1);
              dfs(root.left,0,1);
              break;
          case 1:
              dfs(root.left,0,curSum+1)
              dfs(root.right,1,1)
              break;
          default:
              dfs(root.left,0,1);
              dfs(root.right,1,1)
      }
  }
  dfs(root,-1,0)
  return maxLen;
};

/**
 * dfs
 */