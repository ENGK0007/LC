/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    if(lists.length == 0)
        return null
   let mergeTwoLists = function(l1, l2) {
    
    
    let head = new ListNode();
    let cur = head;
    
    
    while(l1 != null && l2 != null){
        
        if(l1.val < l2.val){
            cur.next= l1;
            l1 = l1.next;
        }
        else{
            cur.next = l2;
            l2 = l2.next;
        }      
        cur = cur.next;    
    }
    if(l1 != null)
        cur.next = l1;
    else
        cur.next = l2;
    
    
    return head.next;
    };
    
    
    
    
    k = lists.length;
    head = lists[0];
    cur = head;
    
    for(i = 1 ; i < k; i++){
        cur = mergeTwoLists(cur,lists[i])
      
    }
    
    
    
    
    
    return cur;
};