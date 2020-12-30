/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head||!head.next) return false
  let slow = head
  let fast = head.next
  while(fast){
      if(slow===fast) return true
      if(fast.next===null) return false
      fast = fast.next.next
      slow=slow.next
  }
  return false
};

/**
 * 快慢指针
 */