# 字符串

## 字符串的基础语法问题

### 反转字符串
```
// 定义被反转的字符串
const str = "DodenMaki";
// 定义反转后的字符串
const resultStr = str.split('').reverse().join('');
```

### 判断一个字符串是否是回文字符串
回文字符串就是正着读和倒着读都是一模一样的字符串，首先可以使用 JavaScript 提供的 API 来进行判断：
```
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split('').reverse().join('');
  // 判断反转前后是否相等
  return reversedStr === str;
}
```

另外，回文字符串还有一个特性是完全对称性，因此也可以利用这个特性来进行判断：
```
function isPalindrome(str) {
  // 缓存字符串的长度
  const len = str.length;
  // 遍历字符串的前半部分，判断和后半部分是否对称
  for (let i = 0; i < len / 2; i++) {
  	if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
```

## 字符串的问题案例
### 验证回文字符串 Ⅱ
LeetCode：[680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)（难度：简单）

#### 问题描述
给定一个非空字符串`s`，最多删除一个字符。判断是否能成为回文字符串。
```
示例 1：
  输入: s = "aba"
  输出: TRUE
示例 2：
  输入：s = "abca"
  输出：TRUE
  解释：可以删除 c 字符
```

#### 问题分析
字符串问题的描述中若出现了“回文”关键字，那么一定要注意使用它的“对称性”这一特性和使用“双指针”方法来解决。

首先初始化两个指针，一个指向字符串的头部，另一个则指向尾部。如果两个指针所指向的字符恰好相等，那么这两个字符就符合了回文字符串对称性的要求，跳过它们继续遍历字符串即可。

如果两个指针所指向的字符不相等，那么就意味着不对称发生了，也就意味着这是一个可以“删掉试试看”的操作点。此时可以分别对左指针字符和右指针字符分别尝试进行“跳过”，看看区间在`[left + 1, right]`和`[left, right - 1]`的字符串是否是回文。如果是回文字符串的话，就意味着删掉被“跳过”的那个字符，整个字符串就还是回文字符串。

#### 问题实现
```
/**
  * @param {string} s
  * @return {boolean}
  */
const validPalinadrom = function (s) {
  // 缓存字符串的长度
  const len = s.length;
  // i、j 分别为左右指针
  let i = 0, j = len - 1;
  // 当左右指针均满足对称时，一起向中间移动
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  // 尝试判断跳过左指针元素后字符串是否是回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 尝试判断跳过右指针元素后字符串是否是回文
  if (isPalindrome(i, j - 1) {
    return true; 
  }
  // 工具方法，用于判断字符串是否是回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }
  // 默认返回 false
  return false;
}
```

### 字符串匹配问题（正则表达式）
LeetCode：[211. 添加与搜索单词 - 数据结构设计](https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/)（难度：中等）

#### 问题描述
请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类`WordDictionary`：
- `WordDictionary()` 初始化词典对象
- `void addWord(word)` 将`word`添加到数据结构中，之后可以对它进行匹配
- `bool search(word)` 如果数据结构中存在字符串与`word`匹配，则返回`true`；否则，返回`false`。`word`中可能包含一些`'.'` ，每个`.`都可以表示任何一个字母。

```
示例 1：
  输入：["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
       [[], ["bad"], [“dad"], [“mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
  输出：[null, null, null, null, false, true, true, true]
  解释：WordDictionary wordDictionary = new WordDictionary();
       wordDictionary.addWord("bad");
       wordDictionary.addWord("dad");
       wordDictionary.addWord("mad");
       wordDictionary.search("pad");        // return False
       wordDictionary.search("bad");        // return True
       wordDictionary.search(".ad");        // return True
       wordDictionary.search("b..");        // return True
```

#### 问题分析
这个问题要求字符串既可以被添加、又可以被搜索，这就意味着字符串在添加时一定要被存在某处。键值对存储，可以用`Map`（或对象字面量来模拟`Map`）。这里为了降低查找时的复杂度，还可以考虑以字符串的长度为`key`，相同长度的字符串存在一个数组中，这样可以提高我们后续定位的效率。

难点在于`search`这个 API，它既可以搜索文字，又可以搜索正则表达式。因此我们在搜索前需要额外判断一下，传入的到底是普通字符串，还是正则表达式。若是普通字符串，则直接去`Map`中查找是否有这个`key`；若是正则表达式，则创建一个正则表达式对象，判断`Map`中相同长度的字符串里，是否存在一个能够与这个正则相匹配。

#### 问题实现
```
/**
  * Initialize your data structure here.
  */
const WordDictionary = function () {
  // 初始化一个对象字面量，承担 Map 的角色
  this.words = {};
};

/**
  * Adds a word into the data structure. 
  * @param {string} word
  * @return {void}
  */
WordDictionary.prototype.addWord = function (word) {
  If (this.words[word.length]) {
    // 若该字符串对应长度的数组已经存在，则只做添加
  	this.words[word.length].push(word);
  } else {
  	// 若该字符串对应长度的数组还不存在，则先创建
    this.words[word.length] = [word];
  }
};

/**
  * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
  * @param {string} word
  * @return {boolean}
  */
WordDictionary.prototype.search = function (word) {
  // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
  if (!this.words[word.length]) {
    return false;
  }
  // 缓存目标字符串的长度
  const len = word.length;
  // 如果字符串中不包含 '.'，那么一定是普通字符串
  if (!word.includes('.')) {
    //. 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
    return this.words[len].includes(word);
  }
  // 否则是正则表达式，要先创建正则表达式对象
  const reg = new RegExp(word);
  // 只要数组中有一个匹配正则表达式的字符串，就返回 true
  return this.words[len].some((item) => {
    return reg.test(item);
  });
};

/**
  * Your WordDictionary object will be instantiated and called as such:
  * var obj = new WordDictionary()
  * obj.addWord(word)
  * var param_2 = obj.search(word)
  */
```

### 字符串与数字之间的转换问题（正则表达式）
LeetCode：[8. 字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)（难度：中等）

#### 问题描述
请你来实现一个`atoi`函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：
- 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数
- 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数
- 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回`0`.
```
示例 1：
  输入: str = "42"
  输出：42
示例 2：
  输入: str = " -42"
  输出: -42
  解释: 第一个非空白字符串为 '-'，它是一个负号。我们尽可能将负号与后面所有连续出现的数组组合起来，最后得到 -42。
示例 3：
  输入: str = "4193 with words”
  输出: 4193
  解释: 转换截止于数字 '3'，因为它的下一个字符不为数字。
示例 4：
  输入: str = "words and 987”
  输出: 0
  解释: 第一个非空字符是 'w’，但它不是数组或正、负号。因此无法执行有效的转换。
示例 5：
  输入: str = "-91283472332”
  输出: -2147483648
  解释: 数字 "-91283472332" 超过 32 位有负号整数范围，因此返回 INT_MIN（-2 ^ 31）
```

### 问题分析
【第一步】计算卡口：

因为要求数值范围为`[−2^31,  2^31 − 1]`，所以要先计算这个卡口。计算某个数的`n`次方，要用到`Math.pow`这个方法：
- 计算最大值：`const max = Math.pow(2, 31) - 1`
- 计算最小值：`const min = -max - 1`

【第二步】解析字符串：

这个问题推荐使用正则表达式来解析字符串，因为问题要求了许多字符串的约束条件。以下对问题描述进行分析：
- 该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止：需要去除字符串头部的空格字符
- 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号：允许字符串的第一个有效字符为`+`或者`-`
- 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响：匹配的时候，连续整数之外的部分都应该被摘除

根据以上的分析，得出正则表达式： `/\s*([-\+]?[0-9]*).*/`。
- `\s`代表空白字符，`*`表示前面的符号出现`0`次或多次
- `()`匹配的是一个捕获区域
- `[]`中的匹配之间是或的关系
- `.`表示任意字符的意思，在`()`外表示不被捕获

【第三步】获取捕获结果：

JavaScript 的正则相关方法中，`test()`方法返回的是一个布尔值，单纯判断“是否匹配”。要想获取匹配的结果，需要调度`match()`方法：
```
const reg = /\s*([-\+]?[0-9]*).*/;
const groups = str.match(reg);
```

`match()`方法是一个在字符串中执行查找匹配的`String`方法，它返回一个数组，在未匹配到时会返回`null`。如果正则表达式尾部有`g`标志，`match()`会返回与完整正则表达式匹配的所有结果，但不会返回捕获组；如果没有使用`g`标志，`match()`就会返回第一个完整匹配及其相关的捕获组。

这里只定义了一个捕获组，因此可以从`groups[1]`里拿到我们捕获的结果。

【第四步】判断卡口：

最后一步，就是把捕获的结果转换成数字，看看是否超出了题目要求的范围。

#### 问题实现
```
/**
  * @param {string} s
  * @return {number}
  */
const myAtoi = function(str) {
  // 编写正则表达式
  const reg = /\s*([-\+]?[0-9]*).*/;
  // 得到捕获组
  const groups = str.match(reg);
  // 计算最大值
  const max = 2 ** 31 - 1;
  // 计算最小值
  const min = -max - 1;
  // targetNum 用于存储转化出来的数组
  let targetNum = 0;
  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1];
    // 注意，即便成功，也可能出现非数字的情况，比如单一个 '+'
    if (isNaN(targetNum) {
      // 不能进行有效的转换时，请返回 0
      targetNum = 0;
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max;
  } else if (targetNum < min) {
    return min;
  }
  // 返回转换结果
  return targetNum;
};
```

---
【 完 】