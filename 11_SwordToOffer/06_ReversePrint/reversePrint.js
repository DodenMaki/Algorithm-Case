/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  var stack = [];
  var result = [];

  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
};

module.exports = {
  reversePrint,
  ListNode,
};