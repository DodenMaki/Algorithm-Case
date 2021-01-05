/**
 * 20. 有效的括号
 * LeetCode：https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1：
 * 输入: s = "()"
 * 输出: true
 * 示例 2：
 * 输入: s = "()[]{}"
 * 输出: true
 * 示例 3：
 * 输入: s = "(]"
 * 输出: false
 * 示例 4：
 * 输入: s = "([)]"
 * 输出: false
 * 示例 5：
 * 输入: s = "{[]}"
 * 输出: true
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function(s) {
  if (!s) return true;
  var stack = [];
  var len = s.length;

  for (var i = 0; i < len; i++) {
    var ch = s[i];
    if (ch === '(' || ch === "[" || ch === "{") {
      stack.push(leftToRight[ch]);
    } else {
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  return !stack.length;
};

module.exports = {
  isValid,
};
