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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const arr = []
  let flag = true
  const midSearch = (root)=>{
      if(!root) return;
      if(flag===false) return false;
      midSearch(root.left);
      if(arr.length>0&&root.val<=arr[arr.length-1]) return flag=false;
      arr.push(root.val)
      midSearch(root.right)
  }
  midSearch(root)
  return flag;
};

/**
 * 中序遍历
 */