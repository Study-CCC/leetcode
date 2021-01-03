/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(!root) return []
let seriaArr = []
let dfs = (root)=>{
  if(!root) return seriaArr.push(null)
  seriaArr.push(root.val)
  dfs(root.left)
  dfs(root.right)
}
dfs(root)
return seriaArr
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
console.log(data)
if(data.length===0) return null
let root = new TreeNode()
let dfs = (root)=>{        
  root.val = data.shift()
  if(root.val===null) return null;
  root.left = dfs(new TreeNode())
  root.right = dfs(new TreeNode())
  return root;
}
dfs(root)
return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
/**
 * bfs
 */