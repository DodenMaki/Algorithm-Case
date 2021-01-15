var { TreeNode, invertTree } = require('./invertTree.js');

var treeNode1 = new TreeNode(4);
treeNode1.left = new TreeNode(2);
treeNode1.right = new TreeNode(7);
treeNode1.left.left = new TreeNode(1);
treeNode1.left.right = new TreeNode(3);
treeNode1.right.left = new TreeNode(6);
treeNode1.right.right = new TreeNode(9);

var resultTreeNode1 = new TreeNode(4);
resultTreeNode1.left = new TreeNode(7);
resultTreeNode1.right = new TreeNode(2);
resultTreeNode1.left.left = new TreeNode(9);
resultTreeNode1.left.right = new TreeNode(6);
resultTreeNode1.right.left = new TreeNode(3);
resultTreeNode1.right.right = new TreeNode(1);

describe('226. 翻转二叉树', () => {
  test('示例 1', function () {
    expect(invertTree(treeNode1)).toEqual(resultTreeNode1);
  });
});
