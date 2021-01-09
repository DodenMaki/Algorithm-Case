var { ListNode, deleteDuplicates } = require('./deleteDuplicates.js');

var listNode1 = new ListNode(1);
listNode1.next = new ListNode(1);
listNode1.next.next = new ListNode(2);

var resultListNode1 = new ListNode(1);
resultListNode1.next = new ListNode(2);

var listNode2 = new ListNode(1);
listNode2.next = new ListNode(1);
listNode2.next.next = new ListNode(2);
listNode2.next.next.next = new ListNode(3);
listNode2.next.next.next.next = new ListNode(3);

var resultListNode2 = new ListNode(1);
resultListNode2.next = new ListNode(2);
resultListNode2.next.next = new ListNode(3);

describe('83. 删除排序链表中的重复元素', () => {
  test('示例 1', function() {
    expect(deleteDuplicates(listNode1)).toEqual(resultListNode1);
  });
  test('示例 2', function() {
    expect(deleteDuplicates(listNode2)).toEqual(resultListNode2);
  });
});
