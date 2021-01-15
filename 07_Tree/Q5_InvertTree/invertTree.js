/**
 * 226. 翻转二叉树
 * LeetCode：https://leetcode-cn.com/problems/invert-binary-tree/
 */

/**
 * 翻转一棵二叉树。
 * 
 * 示例 1：
 * 输入: root = [4, 2, 7, 1, 3, 6, 9]
 * 输出: [4, 7, 2, 9, 6, 3, 1]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;

  var right = invertTree(root.right);
  var left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};

module.exports = {
  TreeNode,
  invertTree,
};
