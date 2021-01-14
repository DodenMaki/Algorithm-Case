/**
 * 94. 二叉树的中序遍历
 * LeetCode：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */

/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 示例 2：
 * 输入：root = []
 * 输出：[]
 * 示例 3：
 * 输入：root = [1]
 * 输出：[1]
 * 示例 4：
 * 输入：root = [1,2]
 * 输出：[2,1]
 * 示例 5：
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var result = [];
  var stack = [];

  var cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
};

module.exports = {
  TreeNode,
  inorderTraversal,
}