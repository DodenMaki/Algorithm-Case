/**
 * 232. 用栈实现队列
 * LeetCode：https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */

/**
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列的支持的所有操作（push、pop、peek、empty）：
 * 实现 MyQueue 类：
 * void push(int x) 将元素 x 推到队列的末尾
 * int pop() 从队列的开头移除并返回元素
 * int peek() 返回队列开头的元素
 * boolean empty() 如果队列为空，返回 true ；否则，返回 false
 * 
 * 示例 1：
 * 输入：["MyQueue", "push", "push", "peek", "pop", "empty"]
 *      [[], [1], [2], [], [], []]
 * 输出：[null, null, null, 1, 1, false]
 * 解释：MyQueue myQueue = new MyQueue();
 *      myQueue.push(1);                // queue is: [1]
 *      myQueue.push(2);                // queue is: [1, 2] (leftmost is front of the queue)
 *      myQueue.peek();                 // return 1
 *      myQueue.pop();                  // return 1, queue is [2]
 *      myQueue.empty();                // return false
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack2.length <= 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stack2.length <= 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  var stack2Len = this.stack2.length;
  return stack2Len && this.stack2[stack2Len - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
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