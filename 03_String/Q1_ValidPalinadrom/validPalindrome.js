/**
 * 680. 验证回文字符串 Ⅱ
 * LeetCode：https://leetcode-cn.com/problems/valid-palindrome-ii/
 */

/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1：
 * 输入: "aba"
 * 输出: True
 * 示例 2：
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  var len = s.length;
  var i = 0, j = len - 1;

  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  if (isPalindrome(i + 1, j)) {
    return true;
  }
  if (isPalindrome(i, j - 1)) {
    return true;
  }


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

  return false;
};

module.exports = {
  validPalindrome,
};