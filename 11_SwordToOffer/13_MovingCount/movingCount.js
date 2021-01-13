/**
 * 剑指 Offer 13. 机器人的运动范围
 * LeetCode：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 */

/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * 
 * 示例 1：
 * 输入：m = 2, n = 3, k = 1
 * 输出：3
 * 示例 2：
 * 输入：m = 3, n = 1, k = 0
 * 输出：1
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  var getSum = function(sum) {
    var answer = 0;
    while (sum) {
      answer += num % 10;
      num = Math.floor(num / 10);
    }

    return answer;
  }

  var directionAry = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  var set = new Set(['0.0']);
  var queue = [[0, 0]];

  while (queue.length) {
    var [x, y] = queue.shift();

    for (var i =0; i < 4; i++) {
      var offsetX = x + directionAry[i][0];
      var offsetY = y + directionAry[i][1];

      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${offsetX}.${offsetY}`)) {
        continue;
      }
 
      set.add(`${offsetX}.${offsetY}`);
      queue.push([offsetX, offsetY]);
    }
  }

  return set.size;
};

module.exports = {
  movingCount,
};
