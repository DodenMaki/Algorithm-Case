/**
 * 19. 删除链表的倒数第N个节点
 * LeetCode：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例 1：
 * 输入：head = 1->2->3->4->5, n =5
 * 输出：1->2->3->5
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode();
    dummy.next = head;
    
    var fast = dummy, slow = dummy;

    while (n !== 0) {
      fast = fast.next;
      n--;
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};

module.exports = {
  ListNode,
  removeNthFromEnd,
}