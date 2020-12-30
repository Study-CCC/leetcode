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
var deleteDuplicates = function(head) {
  let current = head
  while(current&&current.next){
      if(current.val===current.next.val){
          current.next=current.next.next
      }else{
          current = current.next
      }
  }
  return head;
};

/**
 * 通过循环，当当前的节点与下一个节点的val相同时，则就跳过下一个节点
 */