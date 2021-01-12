/**
 * 138. 复制带随机指针的链表
 * LeetCode：https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

/**
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的 深拷贝。
 * 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 示例 1：
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 示例 2：
 * head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 示例 3：
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 示例 4：
 * 输入：head = []
 * 输出：[]
 * 解释：给定的链表为空（空指针），因此返回 null。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node (val) {
  this.val = val;
  this.next = null;
  this.random = null;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  var copyHead = new Node();
  var copyNode = copyHead;
  var hashMap = new Map();
  var curr = head;

  while (curr) {
    copyNode.val = curr.val;
    copyNode.next = curr.next ? new Node() : null;
    hashMap.set(curr, copyNode);
    curr = curr.next;
    copyNode = copyNode.next;
  }

  curr = head;
  copyNode = copyHead;

  while (curr) {
    copyNode.random = curr.random ? hashMap.get(curr.random) : null;
    copyNode = copyNode.next;
    curr = curr.next;
  }

  return copyHead;
};

module.exports = {
  Node,
  copyRandomList,
}