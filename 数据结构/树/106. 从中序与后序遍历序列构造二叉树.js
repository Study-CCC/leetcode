/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const map = new Map();
   for (let i = 0; i < inorder.length; i++) {
   map.set(inorder[i], i);
   }
   const creat = (inStart,inEnd,postStart,postEnd)=>{
       if(inStart>inEnd) return null;
       const val = postorder[postEnd]
       const root = new TreeNode(val)
       const index = map.get(val)
       root.left = creat(inStart,index-1,postStart,postStart+index-1-inStart)
       root.right = creat(index+1,inEnd,postStart+index-inStart,postEnd-1)
       return root;
   }
   return creat(0,inorder.length-1,0,postorder.length-1)
};