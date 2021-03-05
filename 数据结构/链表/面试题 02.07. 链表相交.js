/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA;
  let b = headB;
  while(a!==b){
      a = a!==null?a.next:headB;
      b = b!==null?b.next:headA;
  }
  return a
};