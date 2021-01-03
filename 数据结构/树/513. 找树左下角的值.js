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
var findBottomLeftValue = function(root) {
  if(root===null) return root
  let quene = []
  let res ;
  quene.push(root)
  while(quene.length>0){
      let curNode = quene.shift()
      if(curNode.right){
          quene.push(curNode.right)
      }
      if(curNode.left){
          quene.push(curNode.left)
      }
      res = curNode.val
  }
  return res
};

/**
 * bfs
 */