/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  let index = 0
  let res = []
  let dfs = (root)=>{
      if(!root) return true;
      if(index>=voyage.length) return false;
      if(root.val!==voyage[index]){
          return false;
      }
      index++;
      if(root.left&&root.left.val!==voyage[index]){
          res.push(root.val)
         return dfs(root.right)&&dfs(root.left)
      }else{
          return dfs(root.left)&&dfs(root.right)
      }
  }
  return dfs(root)?res:[-1]
};
/**
 * dfs
 */