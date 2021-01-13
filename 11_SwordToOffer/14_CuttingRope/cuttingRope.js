/**
 * 剑指 Offer 14. 剪绳子
 * LeetCode：https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
 */

/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * 
 * 示例 1：
 * 输入：n = 2
 * 输出：1
 * 示例 2：
 * 输入：n = 10
 * 输出：36
 */

 /**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  var dp = new Array(n + 1).fill(1);

  for (var i = 3; i <= n; i++) {
    for (var j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
};

module.exports = {
  cuttingRope,
};
