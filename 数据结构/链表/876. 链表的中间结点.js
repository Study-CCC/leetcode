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
var middleNode = function(head) {
  if(!head||!head.next) return head
 let slow = head
 let fast = head.next
  while(true){
      if(!fast){
          return slow
      }
      if(!fast.next){
          return slow.next
      }
      fast = fast.next.next
      slow = slow.next
  }
};

/**
 * 快慢指针
 */