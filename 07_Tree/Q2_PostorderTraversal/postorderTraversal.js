/**
 * 145. 二叉树的后序遍历
 * LeetCode：https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 */

/**
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例 1：
 * 输入：root = [1,null,2,3]  
 * 输出：[3,2,1]
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
var postorderTraversal = function(root) {
  var result = [];
  if (!root) return result;

  var stack = [];
  stack.push(root);

  while (stack.length) {
    var cur = stack.pop();
    result.unshift(cur.val);
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return result;
};

module.exports = {
  TreeNode,
  postorderTraversal,
}