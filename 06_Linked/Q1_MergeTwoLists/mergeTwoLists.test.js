var { ListNode, mergeTwoLists } = require('./mergeTwoLists.js');

var listNode1 = new ListNode(1);
listNode1.next = new ListNode(2);
listNode1.next.next = new ListNode(4);

var listNode2 = new ListNode(1);
listNode2.next = new ListNode(3);
listNode2.next.next = new ListNode(4);

var resultListNode = new ListNode(1);
resultListNode.next = new ListNode(1);
resultListNode.next.next = new ListNode(2);
resultListNode.next.next.next = new ListNode(3);
resultListNode.next.next.next.next = new ListNode(4);
resultListNode.next.next.next.next.next = new ListNode(4);

describe('21. 合并两个有序链表', () => {
  test('示例 1', function() {
    expect(mergeTwoLists(listNode1, listNode2).toEqual(resultListNode));
  });
});
