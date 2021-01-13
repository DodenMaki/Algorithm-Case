/**
 * 144. 二叉树的前序遍历
 * LeetCode：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */

/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 * 示例 2：
 * 输入：root = []
 * 输出：[]
 * 示例 3：
 * 输入：root = [1]
 * 输出：[1]
 * 示例 4：
 * 输入：root = [1,2]
 * 输出：[1,2]
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
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var result = [];
  if (!root) {
    return result;
  }

  var stack = [];
  stack.push(root);

  while(stack.length) {
    var cur = stack.pop();
    result.push(cur.val);

    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return result;
};

module.exports = {
  TreeNode,
  preorderTraversal,
}