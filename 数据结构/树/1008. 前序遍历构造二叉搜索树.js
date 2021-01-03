/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const dfs = (arr)=>{
     if(arr.length===0) return null;
     let node = new TreeNode()
     node.val = arr.shift()
     let midLen = searchMid(node.val,arr)
     node.left = dfs(arr.slice(0,midLen))
     node.right = dfs(arr.slice(midLen,arr.length))
     return node
  }
  return dfs(preorder)
};

const searchMid = (midValue,arr)=>{
  for(let i=0;i<arr.length;i++){
      if(midValue<arr[i]) return i;
  }    
  return arr.length;
}
/**
 *  dfs
 */