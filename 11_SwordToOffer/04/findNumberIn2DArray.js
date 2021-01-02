/**
 * 剑指 offer 04. 二维数组中的查找
 * LeetCode：hhttps://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */

/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 示例 1：
 * 现有矩阵 matrix 如下：
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 * 给定 target = 5，返回 true。
 * 给定 target = 20，返回 false。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  var result = false;
  var rows = matrix.length;
  var columns = matrix[0].length;

  if (matrix && rows > 0 && columns > 0) {
    var row = 0;
    var column = columns - 1;
    while (row < rows && column >= 0) {
      if (matrix[row][column] === target) {
        result = true;
        break;
      } else if (matrix[row][column] > target) {
        column--;
      } else {
        row++;
      }
    }
  }

  return result;
};

module.exports = {
  findNumberIn2DArray,
};