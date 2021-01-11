/**
 * 206. 反转链表
 * LeetCode：https://leetcode-cn.com/problems/reverse-linked-list/
 */

/**
 * 反转一个单链表。
 * 
 * 示例 1：
 * 输入: head = 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var pre = null;
  var cur = head;

  while (cur !== null) {
    var next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

module.exports = {
  ListNode,
  reverseList,
}