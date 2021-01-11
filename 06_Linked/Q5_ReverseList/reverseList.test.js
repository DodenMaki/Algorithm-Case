var { ListNode, reverseList } = require('./reverseList.js');

var listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);

var resultListNode = new ListNode(5);
resultListNode.next = new ListNode(4);
resultListNode.next.next = new ListNode(3);
resultListNode.next.next.next = new ListNode(2);
resultListNode.next.next.next.next = new ListNode(1);

describe('206. 反转链表', () => {
  test('示例 1', function() {
    expect(reverseList(listNode)).toEqual(resultListNode);
  });
});
