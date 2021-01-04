var { reversePrint, ListNode } = require('./reversePrint.js');

var listNode = new ListNode(1)
listNode.next = new ListNode(3);
listNode.next.next = new ListNode(2);

describe('剑指 Offer 06. 从尾到头打印链表', () => {
  test('示例 1', function() {
    expect(reversePrint(listNode)).toEqual([2, 3, 1]);
  });
});
