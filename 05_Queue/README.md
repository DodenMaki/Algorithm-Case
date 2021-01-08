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

### 滑动窗口（双端队列）
LeetCode：[239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)（难度：困难）

#### 问题描述
给你一个整数数组`nums`，有一个大小为`k`的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的`k`个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

```
示例 1：
  输出: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
  输出: [3, 3, 5, 5, 6, 7]
  解释：    滑动窗口的位置            最大值
       --------------------        -----
       [1 3 -1] -3 5 3 6 7           3
       1 [3 -1 -3] 5 3 6 7           3    
       1 3 [-1 -3 5] 3 6 7           5
       1 3 -1 [-3 5 3] 6 7           5
       1 3 -1 -3 [5 3 6] 7           6
       1 3 -1 -3 5 [3 6 7]           7
示例 2：
  输入: nums [1], k = 1
  输出: [1]
示例 3：
  输入: nums = [1,-1], k = 1
  输出: [1, -1]
示例 4：
  输入: nums = [9, 11], k = 2
  输出: [11]
示例 5：
  输入: nums = [4, -2], k = 2
  输出: [4]
```

#### 问题分析
首先可以用双指针遍历法来实现，问题要求在遍历数组的过程当中，约束一个窗口，其本质其实就是一个范围。因此这里定义一个`left`左指针、定义一个`right`右指针，分别指向窗口的两端。接下来可以把这个窗口里的数字取出来，直接遍历一遍、求出最大值，然后把最大值存进结果数组。反复执行上面这个过程，直到数组完全被滑动窗口遍历完毕，也就得到了问题的答案。

```
/**
  * @param {number[]} nums
  * @param {number} k
  * @return {number[]}
  */
const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 定义结果数组
  const res = [];
  // 初始化左指针
  let left = 0;
  // 初始化右指针
  let right = k - 1;
  // 当数组没有被遍历完时，执行循环体内的逻辑
  while (right < len) {
    // 计算当前窗口内的最大值
    const max = calMax(nums, left, right);
    // 将最大值推入结果数组
    res.push(max);
    // 左指针前进一步
    left++;
    // 右指针前进一步
    right++;
  }
  // 返回结果数组
  return res;
};

// 这个函数用来计算最大值
function calMax (arr, left, right) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // 初始化 maxNum 的值为窗口内第一个元素
  let maxNum = arr[left];
  // 遍历窗口内所有元素，更新 maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  // 返回最大值
  return maxNum;
}
```

这个操作里其实涉及了两层循环，外层循环是`while`，它和滑动窗口前进的次数有关，因此这个解法的时间复杂度为`O(kn)`。但是，这里可以用双端队列的方法将时间复杂度降为`O(n)`。

双端队列就是允许在队列的两端进行插入和删除的队列，最常见的载体是既允许使用`pop`、`push`同时又允许使用`shift`、`unshift`的数组。

使用双端队列法，核心的思路是维护一个有效的递减队列。在遍历数组的前期，尝试将遍历到的每一个元素都推入队列内部。每尝试推入一个元素前，都把这个元素与队列尾部的元素作对比。根据对比结果的不同，采取不同的措施：
- 如果试图推入的元素（当前元素）大于队尾元素，则意味着队列的递减趋势被打破了。此时需要将队列尾部的元素依次出队，直到队尾元素大于等于当前元素为止，此时再将当前元素入队
- 如果试图推入的元素小于队列尾部的元素，那么就不需要额外的操作，直接把当前元素入队即可

维持递减队列的目的，就在于确保队头元素始终是当前窗口的最大值。当遍历到的元素个数达到了`k`个时，意味着滑动窗口的第一个最大值已经产生了，把它`push`进结果数组里。

需要注意的是，队列本身只维护滑动窗口内的元素，如果超出了窗口范围，需要将多余的元素出队。
1. 检查队尾元素，看是否满足大于等于当前元素的条件；如果是，直接将当前元素入队，否则，将队尾元素逐个出队，直到队尾元素大于等于当前元素为止（维持队列的递减性，确保队头元素是当前滑动窗口的最大值）
2. 将当前元素入队
3. 检查队头元素，看队头元素是否已经被排除在滑动窗口的范围之外了；如果是，则将队头元素出队（维持队列的有效性，确保队列中所有的元素都在滑动窗口圈定的范围内）
4. 判断滑动窗口的状态：看当前遍历过的元素个数是否小于 k。如果元素个数小于 k，这意味着第一个滑动窗口内的元素都还没遍历完，第一个最大值还没出现，此时还不能动结果数组，只能继续更新队列；如果元素个数大于等于 k，这意味着滑动窗口的最大值已经出现了，此时每遍历到一个新元素，也就是滑动窗口每往前走一步，都要及时地往结果数组里添加当前滑动窗口对应的最大值，即队头元素（排除掉滑动窗口还没有初始化完成、第一个最大值还没有出现的特殊情况）

#### 问题实现
```
/**
  * @param {number[]} nums
  * @param {number} k
  * @return {number[]}
  */
const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 初始化结果数组
  const res = [];
  // 初始化双端队列
  const deque = [];
  // 开始遍历数组
  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素时
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque.length && deque[0] <= i - k) {
      // 将队头元素索引出队
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  // 返回结果数组
  return res;
};
```
---
【 完 】