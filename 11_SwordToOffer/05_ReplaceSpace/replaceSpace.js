
/**
 * 剑指 offer 05. 替换空格
 * LeetCode：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */

/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  if (!s || !s.length) {
    return '';
  }

  var numberOfBack = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      numberOfBack++;
    }
  }

  var resultLen = numberOfBack * 2 + s.length;
  var resultStr = new Array(resultLen);

  for (var i = 0, j = 0; j < s.length; j++) {
    if (s[j] === ' ') {
      resultStr[i++] = "%";
      resultStr[i++] = "2";
      resultStr[i++] = "0";
    } else {
      resultStr[i++] = s[j];
    }
  }

  return resultStr.join("");
}

module.exports = {
  replaceSpace, 
};