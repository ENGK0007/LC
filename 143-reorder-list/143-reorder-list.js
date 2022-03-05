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
    fastptr = new ListNode();
    tail = new ListNode();
    slowptr = new ListNode();
    
    fastptr = head.next;
    slowptr = head;
    
    while(fastptr && fastptr.next)
    {
        slowptr = slowptr.next;
        fastptr = fastptr.next.next;   
    }
    second = slowptr.next;
    slowptr.next = null;
    pre = new ListNode;
    
    pre = null
    while( second)
    {
        tmp =  second.next;
        second.next = pre;
        pre =  second;
        second = tmp;   
    }
    first = head;
    second = pre;
    while(second){
        tmp1 = first.next;
        tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
    
    
    
   
    return head
};