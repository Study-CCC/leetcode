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
  if(head ===null || head.next===null) return head;
  if(head.val===head.next.val){
      while(head.next&&head.val===head.next.val){
          head = head.next
      }
      return deleteDuplicates(head.next)
  }else{
      head.next = deleteDuplicates(head.next)
      return head;
  }
};

/**
 * 判断当前节点是否与下个节点val是否相等，如果相等就跳过下个节点，再进行这样的比较，比较到不相等为止，然后除去这个节点，让下一个节点继续进行比较
 * 如果不相等就直接将当前节点传入
 */