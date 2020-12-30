/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let maxList = new ListNode()
  let maxNode =maxList;
  let minList = new ListNode();
  let minNode = minList
  while(head){
   if(head.val<x){
      minList.next = head
      minList = minList.next
   }else{
       maxList.next = head
       maxList = maxList.next
   }
   head = head.next
  }
  maxList.next = null;
  minList.next = maxNode.next
  return minNode.next;
};

/**
 * 双指针
 */