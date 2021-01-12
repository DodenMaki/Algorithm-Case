var { ListNode, detectCycle } = require('./detectCycle.js');

var listNode1 = new ListNode(3);
listNode1.next = new ListNode(2);
listNode1.next.next = new ListNode(0);
listNode1.next.next.next = new ListNode(-4);

var resultListNode1 = new ListNode(2);
resultListNode1.next = new ListNode(0);
resultListNode1.next.next = new ListNode(-4);

var listNode2 = new ListNode(1);
listNode2.next = new ListNode(2);

var resultListNode2 = new ListNode(1);
resultListNode2.next = new ListNode(2);

var listNode3 = new ListNode(1);

describe('142. 环形链表 II', () => {
  test('示例 1', function() {
    expect(detectCycle(listNode1)).toEqual(resultListNode1);
  });
  test('示例 2', function() {
    expect(detectCycle(listNode2)).toEqual(resultListNode2);
  });
  test('示例 3', function() {
    expect(detectCycle(listNode3)).toBeNull();
  });
});
