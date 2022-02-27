/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    dummy = new ListNode(0,head);
    cur = head;
    pre = dummy;
  
  
    while(n>0){
        cur = cur.next;
        n--;
    }
    while(cur){
        cur = cur.next;
        pre = pre.next;
    }
   
    pre.next = pre.next.next;
    
    return dummy.next;
    
};