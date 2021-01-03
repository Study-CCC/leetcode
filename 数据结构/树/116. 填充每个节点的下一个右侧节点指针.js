/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root
  let quene = []
  let newNode = new Node()
  quene.push(root)
  while(quene.length>0){
      let size = quene.length
      let node = quene.shift()
      for(let i = 0;i<size;i++){
          node.left&&quene.push(node.left)
          node.right&&quene.push(node.right)
          if(i!==size-1){
          let curNode = quene.shift()
          node.next = curNode
          node = curNode
          }
      }
      node.next = null
  }
  return root
};

/**
 * bfs
 */