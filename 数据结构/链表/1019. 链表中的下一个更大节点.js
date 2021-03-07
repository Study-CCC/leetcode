/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  if(!head) return [];
  let arr = []
  while(head){
      arr.push(head.val)
      head = head.next
  }
  for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<arr.length;j++){
          if(arr[i]<arr[j]){
              arr[i] = arr[j]
              break;
          }else if(j===arr.length-1){
              arr[i] = 0;
          }
      }
  }
  arr[arr.length-1] = 0;
  return arr;
};