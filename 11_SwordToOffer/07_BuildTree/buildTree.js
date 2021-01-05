/**
 * 剑指 Offer 07. 重建二叉树
 * LeetCode：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 */

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 * 示例 1：
 * 输入：preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出：[3, 9, 20, null, null, 15, 7]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  var rootVal = preorder[0];
  var node = new TreeNode(rootVal);

  var i = 0;
  for (; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      break;
    }
  }

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

  return node;
};

module.exports = {
  TreeNode,
  buildTree,
}