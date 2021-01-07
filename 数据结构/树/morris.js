// morris遍历可以将空间复杂度降为 O(1)
// 用递归空间复杂度为栈的开销
const morris = (root)=>{
  let cur = root;
  while(!cur){
    let mostRight = cur.left
    if(mostRight){
        while(!mostRight.right&&mostRight.right!==cur){
          mostRight = mostRight.right
        }
        if(!mostRight.right){
          mostRight.right = cur
          cur = cur.left;
        }else{
          cur = cur.right
          mostRight.right = null;
        }
    }else{
      cur = cur.right
    }
  }
}

/**
 * 前序遍历
 */

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let arr = [];
  let cur = root;
  while(cur){
    let mostRight = cur.left
    if(mostRight){
        while(mostRight.right&&mostRight.right!==cur){
          mostRight = mostRight.right
        }
        if(!mostRight.right){
          mostRight.right = cur
          // 以防打印两次有左节点的node
        arr.push(cur.val)
          cur = cur.left;
        }else{
          cur = cur.right
          mostRight.right = null;
        }
    }else{
    // 以防打印两次有左节点的node
    arr.push(cur.val)
      cur = cur.right
    }
  }
  return arr
};