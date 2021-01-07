/**
 * 84. 柱状图中最大的矩形
 * LeetCode：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 */

/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 示例 1：
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) return 0;

  var max = -1;
  var stack = [];
  var len = heights.length;

  for (var i = 0; i < len; i++) {
    if (!stack.length || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      var right = i;
      var target = stack.pop();
      while (stack.length && heights[target] === heights[stack[stack.length - 1]]) {
        target = stack.pop();
      }
      var left = (!stack.length) ? -1 : stack[stack.length - 1];

      max = Math.max(max, (right - left - 1) * heights[target]);
      i--;
    }
  }

  var rightAdd = stack[stack.length - 1] + 1;
  while (stack.length) {
    var target = stack.pop();
    var left = (!stack.length) ? -1 : stack[stack.length - 1];
    max = Math.max(max, (rightAdd - left - 1) * heights[target]);
  }

  return max;
};

module.exports = {
  largestRectangleArea,
};
