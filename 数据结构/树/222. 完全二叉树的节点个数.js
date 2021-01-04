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
var countNodes = function(root) {
  if(!root) return 0;
  let curRoot = root
  let level = 0;
  let mid;
  while(curRoot){
      level+=1
      curRoot = curRoot.left
  }
  let low = 1<<(level-1);
  let high = (1<<level)-1;
  while(high>low){
      mid = Math.floor((high-low+1)/2) + low;
      if(!isExist(mid,root,level)){
          high = mid-1;
      }else{
          low = mid;
      }
  }
 return high;
};
const isExist = (mid,root,level) => {
  let flag = 1<<(level-2);
  let curRoot = root
  while(flag&&root){
    // 判断该分位是否为1，1时走右子树，0时走左子树
      if(flag&mid){
          if(!curRoot.right) return false;
          curRoot = curRoot.right
      }else{
          if(!curRoot.left) return false;
          curRoot = curRoot.left
      }
      flag = flag >> 1
  }
  return true;
}

/**
 * 二分查找 + 位运算
 */