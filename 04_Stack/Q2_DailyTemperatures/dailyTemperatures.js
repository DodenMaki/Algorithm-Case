/**
 * 739. 每日温度
 * LeetCode：https://leetcode-cn.com/problems/daily-temperatures/
 */

/**
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 
 * 示例 1：
 * 输入: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 * 输出: [1, 1, 4, 2, 1, 1, 0, 0]
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  var len = T.length;
  var stack = [];
  var res = (new Array(len)).fill(0);

  for (var i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      var top = stack.pop();
      res[top] = i - top;
    }

    stack.push(i);
  }

  return res;
};

module.exports = {
  dailyTemperatures,
};
