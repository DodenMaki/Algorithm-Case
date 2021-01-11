var { ListNode, removeNthFromEnd } = require('./removeNthFromEnd.js');

var listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);

var resultListNode = new ListNode(1);
resultListNode.next = new ListNode(2);
resultListNode.next.next = new ListNode(3);
resultListNode.next.next.next = new ListNode(5);

describe('19. 删除链表的倒数第N个节点', () => {
  test('示例 1', function() {
    expect(removeNthFromEnd(listNode)).toEqual(resultListNode);
  });
});
