/**
 * 92. 反转链表 II
 * LeetCode：https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例 1：
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var pre, cur, leftHead;
  var dummy = new ListNode();
  dummy.next = head;

  var p = dummy;
  for (var i = 0; i < m - 1; i++) {
    p = p.next;
  }
  leftHead = p;
  var start = leftHead.next;
  pre = start;
  cur = pre.next;

  for (var i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  leftHead.next = pre;
  start.next = cur;
  return dummy.next;
};

module.exports = {
  ListNode,
  reverseBetween,
}