/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next =null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var dummy = new ListNode();
  dummy.next = head;

  var cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      var val = cur.next.val;
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      } 
    } else {  
      cur = cur.next;
    }
  }

  return dummy.next;
};

module.exports = {
  ListNode,
  deleteDuplicates,
}