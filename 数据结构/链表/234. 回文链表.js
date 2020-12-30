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
var isPalindrome = function(head) {
  if(!head) return true
  let frontList = head
  const deepList = (node)=>{
  if(node.next){
      if(!deepList(node.next)){
          return false
      }   
   }
  if(frontList.val!==node.val){
      return false
  }    
  frontList = frontList.next
  return true
}
  return deepList(head)
};

/**
 * 递归
 */
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
var isPalindrome = function(head) {
  if(!head||!head.next) return true
  let mid = reserve(midNode(head))
  console.log(mid,head)
  while(mid){
      if(mid.val!==head.val){
          return false
      }
      head = head.next
      mid = mid.next
  }
  return true
};
const reserve = (node)=>{
  if(!node||!node.next) return node;
  const p = reserve(node.next)
  node.next.next = node
  node.next = null
  return p
}
const midNode = (node)=>{
  let slow = node;
  let fast = node;
  while(fast&&fast.next){
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}
/**
 * 快慢指针+反转
 */