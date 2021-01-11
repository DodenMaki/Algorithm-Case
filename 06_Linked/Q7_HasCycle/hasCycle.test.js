var { ListNode, hasCycle } = require('./reverseBetween.js');

var listNode1 = new ListNode(3);
listNode1.next = new ListNode(2);
listNode1.next.next = new ListNode(0);
listNode1.next.next.next = new ListNode(-4);

var listNode2 = new ListNode(1);
listNode2.next = new ListNode(2);

var listNode3 = new ListNode(1);

describe('92. 反转链表 II', () => {
  test('示例 1', function() {
    expect(hasCycle(listNode1)).toBeTruthy();
  });
  test('示例 2', function() {
    expect(hasCycle(listNode2)).toBeTruthy();
  });
  test('示例 3', function() {
    expect(hasCycle(listNode3)).toBeFalsey();
  });
});
