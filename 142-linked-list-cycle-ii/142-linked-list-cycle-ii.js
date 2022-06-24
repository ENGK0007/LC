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
var detectCycle = function(head) {
    // one head only
    if(head === null || head.next === null)
        return null;
    
    var slow = head;
    var fast = head;
    
    
    while(fast && fast.next)
    {  
       slow = slow.next;
       fast = fast.next.next;      
        
       //cycle 
       if(slow == fast)
           break;
    }   
    
    // no cycle
    if(!fast || !fast.next){
        return null;
    }
    
    fast = head;
    
    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }
    
    return fast;
};