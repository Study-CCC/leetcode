/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let arr = []
  while(head){
      arr.push(head)
      head = head.next
  }
  let flag = true
  let newNode = new ListNode()
  let curNode = newNode
  while(arr.length>0){
      if(flag){
          curNode.next = arr.shift()
          flag=false
      }else{
          curNode.next = arr.pop()
          flag=true
      }
          curNode=curNode.next
  }
  curNode.next = null;
  return newNode.next
};

/**
 * 转数组做法
 */


 /**
  * 1. 快慢指针获取中点
  * 2. 对中点后指针进行反转
  * 3. 将中点前和反转后指针进行合并
  */