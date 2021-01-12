var { Node, copyRandomList } = require('./copyRandomList.js');

var listNode1 = new Node(7);
listNode1.random = null;
listNode1.next = new Node(13);
listNode1.next.random = 0;
listNode1.next.next = new Node(11);
listNode1.next.next.random = 4;
listNode1.next.next.next = new Node(10);
listNode1.next.next.next.random = 2;
listNode1.next.next.next.next = new Node(1);
listNode1.next.next.next.next.random = 0

var listNode2 = new Node(1);
listNode2.random = 1;
listNode2.next = new Node(2);
listNode2.next.random = 1;

var listNode3 = new Node(3);
listNode3.random = null;
listNode3.next = new Node(3);
listNode3.next.random = 0;
listNode3.next.next = new Node(3);
listNode3.next.next.random = null;

var listNode4 = new Node();

describe('138. 复制带随机指针的链表', () => {
  test('示例 1', function() {
    expect(copyRandomList(listNode1)).toEqual(listNode1);
  });
  test('示例 2', function() {
    expect(copyRandomList(listNode2)).toEqual(listNode2);
  });
  test('示例 3', function() {
    expect(copyRandomList(listNode3)).toEqual(listNode3);
  });
  test('示例 4', function() {
    expect(copyRandomList(listNode4)).toEqual(listNode4);
  });
});
