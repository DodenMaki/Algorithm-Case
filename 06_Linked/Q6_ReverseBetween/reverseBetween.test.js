var { ListNode, reverseBetween } = require('./reverseBetween.js');

var listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);

var resultListNode = new ListNode(1);
resultListNode.next = new ListNode(4);
resultListNode.next.next = new ListNode(3);
resultListNode.next.next.next = new ListNode(2);
resultListNode.next.next.next.next = new ListNode(5);

describe('92. 反转链表 II', () => {
  test('示例 1', function() {
    expect(reverseBetween(listNode, 2, 4)).toEqual(resultListNode);
  });
});
