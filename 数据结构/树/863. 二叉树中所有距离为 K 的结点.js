/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  let fatherRoot;
  let arr = [];
  const dfs = (root,father)=>{
       if(root === null)
      return 0;
      if(root == target) 
      {
          fatherRoot = father;
          return 1; 
      }
      if(dfs(root.left, root))
      {
          root.left = father;
          return 1;
      }
      if(dfs(root.right, root))
      {
          root.right = father;
          return 1;
      }
      return 0;
  }
  const collect = (root,k)=>{
      if(root===null) return;
      if(k===0) return arr.push(root.val);
      collect(root.left,k-1,arr)
      collect(root.right,k-1,arr)
  }
  dfs(root,null);
  collect(target,K)
  collect(fatherRoot,K-1)
  return arr;
};

/**
 * https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/solution/gai-bian-shu-de-xing-zhuang-c-si-lu-dai-ma-by-lhrs/
 */