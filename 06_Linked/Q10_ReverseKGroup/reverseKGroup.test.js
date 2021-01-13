var { ListNode, reverseKGroup } = require('./copyRandomList.js');

var listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);

var resultNode1 = new ListNode(2)
resultNode1.next = new ListNode(1);
resultNode1.next.next = new ListNode(4);
resultNode1.next.next.next = new ListNode(3);
resultNode1.next.next.next.next = new ListNode(5);

var resultNode2 = new ListNode(3)
resultNode2.next = new ListNode(2);
resultNode2.next.next = new ListNode(1);
resultNode2.next.next.next = new ListNode(4);
resultNode2.next.next.next.next = new ListNode(5);

describe('25. K 个一组翻转链表', () => {
  test('示例 1', function() {
    expect(reverseKGroup(listNode)).toEqual(resultNode1);
  });
  test('示例 2', function() {
    expect(reverseKGroup(listNode)).toEqual(resultNode2);
  });
});
