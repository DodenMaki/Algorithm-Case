/**
 * 102. 二叉树的层序遍历
 * LeetCode：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 示例 1：
 * 输入: root = [3, 9, 20, null, null, 15, 7]
 * 输出: [
         [3],
         [9, 20],
         [25, 7],
        ]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var result = [];
  if (!root) return result;

  var queue = [];
  queue.push(root);

  while (queue.length) {
    var level = [];
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      var top = queue.shift();
      level.push(top.val);
      if (top.left) {
        queue.push(top.left);
      }
      if (top.right) {
        queue.push(top.right);
      }
    }
    result.push(level);
  }

  return result;
};

module.exports = {
  TreeNode,
  levelOrder,
};