/**
 * 25. K 个一组翻转链表
 * LeetCode：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 示例 1：
 * 给你这个链表：1->2->3->4->5
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function reverse (head) {
    var pre = null, cur = head, next = null;
    while (cur) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }

  var dummy = new ListNode();
  dummy.next = head;
  var pre = dummy;
  var start = head;
  var end = head;
  var next = head;

  while (next) {
    for (var i = 1; i < k && end; i++) {
      end = end.next;
    }
    if (!end) {
      break;
    }
    next = end.next;
    end.next = null;
    end = start;
    start = reverse(start);
    end.next = next;
    pre.next = start;
    pre = end;
    start = next;
    end = start;
  }

  return dummy.next;
};

module.exports = {
  ListNode,
  reverseKGroup,
}