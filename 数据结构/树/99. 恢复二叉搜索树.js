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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let arr = []
  inOrder(root,arr)
  const [x,y] = findSwap(arr)
  swapTree(root,2,x,y)
  return root;
};
const inOrder = (root,arr)=>{
  if(!root) return;
  inOrder(root.left,arr)
  arr.push(root.val)
  inOrder(root.right,arr)
}
const findSwap = (arr)=>{
  let x=-1,y=-1;
  for(let i =0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
          y = arr[i+1]
          if(x===-1){
              x = arr[i]
          }
      }
  }
  return [x,y]
}
const swapTree = (root,count,x,y)=>{
  if(!root) return;
  if(count===0) return;
  if(root.val === x || root.val === y){
     root.val =  root.val === x? y : x
     count = count -1
  }
  swapTree(root.left,count,x,y)
  swapTree(root.right,count,x,y)
}
/**
 *  1. 通过中序遍历获取树的遍历结果
 *  2. 找出需要调换位置的两个节点
 *  3. 对两个节点进行调换
 */