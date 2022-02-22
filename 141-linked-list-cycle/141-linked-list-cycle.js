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
var hasCycle = function(head) {
    
    
    cur = head;
    arr = [];
    
    
    
    while(cur != null){
        console.log(cur.val);
        if(arr.includes(cur))
            return true
        
        arr.push(cur);
        cur = cur.next;
    }
    
    
    
    return false
    
};