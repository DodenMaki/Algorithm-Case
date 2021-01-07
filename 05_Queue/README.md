# 队列
在 JavaScript 中，栈和队列的实现一般都要依赖于数组，它们也可以被看作是一种特殊的数组。但是，栈和队列作为两种运算受限的线性表，也可以用链表来实现；但在 JavaScript 中为了降低难度，用数组来实现就可以了。

栈和队列的区别在于它们各自对数组的增删操作有着不一样的限制。

## 队列的基本概念
队列是一种先进先出（FIFO，First In First Out）的数据结构，可以看作是一个只用 push 和 shift 完成增删的“数组”。

其特征为：只允许从尾部添加元素、只允许从头部移除元素。

另外，在出栈的时候关心队尾元素（数组尾部元素），入栈的时候关心队首元素（数组头部元素）。
```
// 队列的初始状态
const queue = [];
// 入队
queue.push(item);
// 出队
queue.shift();
// 获取队首元素
queue[0];
// 获取队尾元素
queue[queue.length - 1];
队列的问题案例
```

## 队列的问题案例
### 用栈实现一个队列
LeetCode：[232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)（难度：简单）

#### 问题描述
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列的支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现`MyQueue`类：
- `void push(int x)`：将元素`x`推到队列的末尾
- `int pop()`：从队列的开头移除并返回元素
- `int peek()`：返回队列开头的元素
- `boolean empty()`：如果队列为空，返回`true`；否则，返回`false`

说明：
- 你只能使用标准的栈操作 —— 也就是只有`push to top`，`peek/pop from top`,`size`, 和`is empty`操作是合法的
- 你所使用的语言也许不支持栈。你可以使用`list`或者`deque`（双端队列）来模拟一个栈，只要是标准的栈操作即可

```
示例 1：
  输入: ["MyQueue", "push", "push", "peek", "pop", "empty”]
        [[], [1], [2], [], [], []]
  输出: [null, null, null, 1, 1, false]
  解释: MyQueue myQueue = new MyQueue();
       myQueue.push(1);                    // queue is: [1]
       myQueue.push(2);                    // queue is: [1, 2] (leftmost is front of the queue)
       myQueue.peek();                      // return 1
       myQueue.pop();                        // return 1, queue is [2]
       myQueue.empty();                    // return false
```

### 问题分析
栈是后进先出（LIFO）的结构；队列是先进先出（FIFO）的结构，两者的进出顺序是相反的。用栈实现队列就是用栈实现先进先出的效果，也就是要让栈底的元素首先被取出，即让出栈序列被逆序。这时候，可以用两个栈来实现。

### 问题实现
```
/**
  * Initialize your data structure here.
  */
const MyQueue = function () {
  // 初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};

/**
  * Push element x to the back of queue.
  * @param {number} x
  * @return {void}
  */
MyQueue.prototype.push = function (x) {
  // 直接调度数组的 push 方法
  this.stack1.push(x);
};

/**
  * Removes the element from in front of queue and returns that element.
  * @return {number}
  */
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length !== 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 为了达到逆序的目的，我们只从 stack2 里出栈元素
  return this.stack2.pop();
};

/**
  * Get the front element.
  * @return {number}
  * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
  */
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length != 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 缓存 stack2 的长度
  const stack2Len = this.stack2.length;
  return stack2Len && this.stack2[stack2Len - 1];
};

/**
  * Returns whether the queue is empty.
  * @return {boolean}
  */
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length;
};

/**
  * Your MyQueue object will be instantiated and called as such:
  * var obj = new MyQueue()
  * obj.push(x)
  * var param_2 = obj.pop()
  * var param_3 = obj.peek()
  * var param_4 = obj.empty()
  */
```
