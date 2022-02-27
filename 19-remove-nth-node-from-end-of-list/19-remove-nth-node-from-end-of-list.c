/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
    
    struct  ListNode* cur,pre,next;
    cur=head;
    int i=0;
    
    while(cur!=NULL)
    {
        cur=cur->next;
        i++;
    }

    n=i-n-1;
    printf("%d",n);
    
    cur=head;
    while (n>0){// point to the node before removal node
        cur=cur->next;
        n--;
    }
    if(n==-1)// removing first node
    {
        printf("tes\n");
        head=cur->next;
    }
      
    else
    {
        cur->next=cur->next->next;  // removing node
    }
    
  
      
    return head;
}