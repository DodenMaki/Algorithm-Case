/**
 * 15. 三数之和
 * LeetCode：https://leetcode-cn.com/problems/3sum/
 */

/**
 * 给你一个包含n个整数的数组nums，判断nums中是否存在三个元素a，b，c，使得a + b + c = 0？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例 1：
 * 输入：nums = [-1, 0, 1, 2, -1, -4]
 * 输出：[[-1, 0, 1], [-1, -1, 2]]
 */

/**
  * @param {number[]} nums
  * @return {number[][]}
  */
var threeSum = function (nums) {
  var result = [];
  var len = nums.length;
  var nums = nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < len - 2; i++) {
    var j = i + 1, k = len - 1;
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return result;
};

module.exports = {
  threeSum,
};