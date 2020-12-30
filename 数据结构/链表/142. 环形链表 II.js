/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head||!head.next) return null;
  let slow = head
  let fast = head
  while(fast){
      if(fast.next===null) return null;
      slow = slow.next
      fast = fast.next.next
      if(slow===fast){
          fast = head
          while(fast){
              if(fast===slow) return fast
              fast = fast.next
              slow = slow.next
          }
      }
     
  }
  return null;
};

/**
 * 快慢指针
 */