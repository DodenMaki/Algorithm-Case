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