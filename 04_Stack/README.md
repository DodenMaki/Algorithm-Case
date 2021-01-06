# 栈
在 JavaScript 中，栈和队列的实现一般都要依赖于数组，它们也可以被看作是一种特殊的数组。但是，栈和队列作为两种运算受限的线性表，也可以用链表来实现；但在 JavaScript 中为了降低难度，用数组来实现就可以了。

栈和队列的区别在于它们各自对数组的增删操作有着不一样的限制。

## 栈的基本概念
栈是一种后进先出（LIFO，Last In First Out）的数据结构，可以看作是一个只用`pop`和`push`完成增删的“数组”。

其特征为：只允许从尾部添加元素、只允许从尾部取出元素。

另外，获取栈顶就对应着取数组尾部的元素。
```
// 栈的初始状态
const stack = [];
// 入栈
stack.push(item);
// 出栈
stack.pop();
// 获取栈顶元素
stack[stack.length - 1];
```

## 栈的问题案例
### 有效括号问题
LeetCode：[20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)（难度：简单）

#### 问题描述
给定一个只包括`'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`的字符串，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合
2. 左括号必须以正确的顺序闭合

注意空字符串可被认为是有效字符串。

```
示例 1：
  输入: s = "()"
  输出: true
示例 2：
  输入: s = "()[]{}"
  输出: true
示例 3：
  输入: s = "(]"
  输出: false
示例 4：
  输入: s = "([)]"
  输出: false
示例 5：
  输入: s = "{[]}"
  输出: true
```

#### 问题分析
这个问题中出现的括号元素代表着对称性，一般首选用栈来解决。根据栈的后进先出原则，一组数据的入栈和出栈顺序刚好是对称的。一般来说，问题描述中涉及到括号问题的，很可能与栈相关。

在遍历字符串的过程中，往栈里`push`括号对应的配对字符。比如遍历到了 (，就往栈里`push` )。假如字符串中所有的括号都成立，那么前期`push`进去的一定全都是左括号、后期`push`进去的一定全都是右括号。而且左括号的入栈顺序，和其对应的右括号的入栈顺序应该是相反的。

因此，可以果断地认为在左括号全部入栈结束时，栈顶的那个左括号，就是第一个需要被配对的左括号。此时需要判断的是接下来入栈的第一个右括号是否和此时栈顶的左括号配对。如果配对成功，那么这一对括号就是有效的，否则直接`return false`。

当判断出一对有效的括号之后，需要及时地将其出栈，去判断其它括号是否有效。每配对成功一对括号，都将这对括号出栈。这样一来就可以确保栈顶的括号总是下一个需要被匹配的左括号。如果说出栈到最后，栈不为空，那么意味着一部分没有被匹配上的括号被剩下来了，说明字符串中并非所有的括号都有效，判断`false`；反之，则说明所有的括号都配对成功了，判断为`true`。

#### 问题实现
```
// 用一个 Map 来维护左括号和右括号的对应关系
const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};

/**
  * @param {string} s 
  * @return {boolean} 
  */
const isValid = function (s) {
  // 结合题意，空字符串无条件判断为 true
  if (!s) return true;
  // 初始化 stack 数组
  const stack = [];
  // 缓存字符串长度
  const len = s.length;
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i];
    if (ch === '(' || ch === '[' || ch === '{') {
      // 判断是否是左括号
      stack.push(leftToRight[ch]);
    } else {
      // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
}
```

### 每日温度问题
LeetCode：[739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)（难度：中等）

#### 问题描述
请根据每日气温列表，请重新生成一个列表，对应位置的输出为要想观测到更高的气温，至少需要等待的天数。如果之后都不会升高，请在该位置用`0`来代替。
气温列表长度的范围是`[1, 30000]`。每个气温的值的均为华氏度，都是在`[30, 100]`范围内的整数。
```
示例 1：
  输入: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
  输出: [1, 1, 4, 2, 1, 1, 0, 0]
```

#### 问题分析
栈结构可以避免一个数组两层遍历的重复操作，避免重复操作的秘诀就是及时地将不必要的数据出栈，避免它对后续的遍历产生干扰。

对于这个问题来说，就是要尝试去维持一个递减栈。当遍历过的温度，维持的是一个单调递减的态势时，对这些温度的索引下标执行入栈操作；只要出现了一个数字，它打破了这种单调递减的趋势，也就是说它比前一个温度值高，这时就对前后两个温度的索引下标求差，得出前一个温度距离第一次升温的目标差值。

在这个过程中，仅对每一个温度执行最多一次入栈操作、一次出栈操作，整个数组只会被遍历一次，因此时间复杂度就是`O(n)`。

#### 问题实现
```
/**
  * @param {number[]} T
  * @return {number[]}
  */
// 入参是温度数组
const dailyTemperatures = function (T) {
  // 缓存数组的长度
  const len = T.length;
  // 初始化一个栈
  const stack = [];
  // 初始化结果数组，注意数组需要定长，占位为 0
  const res = (new Array(len)).fill(0);
  
  for (let i = 0; i < len; i++) {
    // 若栈的长度不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop();
      // 计算当前栈顶温度值与第一个高于它的温度值的索引差值
      res[top] = i - top;
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i);
  }
  // 返回结果数组
  return res;
};
```

### 最小栈问题
LeetCode：[155. 最小栈](https://leetcode-cn.com/problems/min-stack/)（难度：简单）

#### 问题描述
设计一个支持`push`，`pop`，`top`操作，并能在常数时间内检索到最小元素的栈。
- `push(x)`：将元素`x`推入栈中
- `pop()`：删除栈顶的元素
- `top()`：获取栈顶元素
- `getMin()`：检索栈中的最小元素。
```
示例 1：
  输入: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
       [[], [-2], [0], [-3], [], [], [], []]
  输出: [null, null, null, null, -3, null, 0, -2]
  解释: MinStack minStack = new MinStack();
       minStack.push(-2);
       minStack.push(0);
       minStack.push(-3);
       minStack.getMin();    --> 返回 -3
       minStack.pop();
       minStack.top();       --> 返回 0
       minStack.getMin();    --> 返回 -2
```

#### 问题分析
`getMin`要做的事情是从一个栈里找出其中最小的数字。

第一个方法是先初始化一个最小值变量，它的初始值可以设一个非常大的数（如`Infinity`），然后开始遍历整个栈。在遍历的过程中，如果遇到了更小的值，就把最小值变量更新为这个更小的值。这样遍历结束后，我们就能拿到栈中的最小值了。这个过程中，对栈进行了一次遍历，时间复杂度无疑是`O(n)`。

但是，在这个问题里，还可以考虑再搞个栈出来作为辅助，让这个栈去容纳当前的最小值。以空间换时间，将算法的时间复杂度由`O(n)`变为`O(1)`。要让这个辅助栈确切提供最小值，需要实现的是一个从栈底到栈顶呈递减趋势的栈：
- 取最小值：由于整个栈从栈底到栈顶递减，因此栈顶元素就是最小元素
- 若有新元素入栈：判断是不是比栈顶元素还要小，否则不准进入辅助栈
- 若有元素出栈：判断是不是和栈顶元素相等，如果是的话，辅助栈也要出栈

#### 问题实现
```
/**
 * initialize your data structure here.
 */
const MinStavck = function () {
  this.stack = [];
  // 定义辅助栈
  this.stack2 = [];
}

/**
  * @param {number} x
  * @return {void}
  */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 若入栈的值小于当前最小值，则推出辅助栈的栈顶
  if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
}

/**
  * @return {void}
  */
MinStack.prototype.pop = function () {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if (this.stack.pop() === this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
}

/**
  * @return {number}
  */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
}

/**
  * @return {number}
  */
MinStack.prototype.getMin = function() {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1];
}
```
