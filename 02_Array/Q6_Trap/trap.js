/**
 * 42. 接雨水
 * LeetCode：https://leetcode-cn.com/problems/trapping-rain-water/
 */

/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 示例 1：
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 * 示例 2：
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var leftCur = 0, rightCur = height.length - 1;
  var result = 0;
  var leftMax = 0, rightMax = 0;

  while (leftCur < rightCur) {
    var left = height[leftCur], right = height[rightCur];

    if (left < right) {
      leftMax = Math.max(left, leftMax);
      result += leftMax - left;
      leftCur++;
    } else {
      rightMax = Math.max(right, rightMax);
      result += rightMax - right;
      rightCur--;
    }
  }

  return result;
};

module.exports = {
  trap,
};