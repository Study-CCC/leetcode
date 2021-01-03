/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if(nums.length===1) return new TreeNode(nums[0])
  if(nums.length===0) return null
  let newTree = new TreeNode()
 while(nums.length>1){
     let midNum = searchMid(nums)
     newTree.val = nums[midNum]
     newTree.left = constructMaximumBinaryTree(nums.splice(0,midNum))
     newTree.right = constructMaximumBinaryTree(nums.splice(1,nums.length))
 }
 return newTree;
};
const searchMid = (arr)=>{
  let index = 0;
  arr.map((item,i)=>{
      if(item>arr[index]){
      index = i
      }
  })
  return index;
}
/**
 * 递归
 */