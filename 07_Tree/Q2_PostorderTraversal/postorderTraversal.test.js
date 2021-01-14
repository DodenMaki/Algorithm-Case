var { TreeNode, postorderTraversal } = require('./postorderTraversal.js');

var treeNode = new TreeNode(1);
treeNode.right = new TreeNode(2);
treeNode.right.left = new TreeNode(3);

describe('145. 二叉树的后序遍历', () => {
  test('示例 1', function() {
    expect(postorderTraversal(treeNode)).toEqual([3, 2, 1]);
  });
});
