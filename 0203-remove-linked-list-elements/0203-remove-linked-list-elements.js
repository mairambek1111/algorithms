/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head == null){
        return null
    }

    let  curnode = new ListNode(-1)

    curnode.next = head 

    head = curnode 

    while(curnode.next !== null){
        if(curnode.next.val === val ){
            curnode.next = curnode.next.next
        }else{
            curnode = curnode.next
        }
    }


    return head.next
};