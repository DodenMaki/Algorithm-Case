var { buildTree, TreeNode } = require('./buildTree.js');

var treeNode = new TreeNode(3);
treeNode.left = new TreeNode(9);
treeNode.right = new TreeNode(20);
treeNode.right.left = new TreeNode(15);
treeNode.right.right = new TreeNode(7);

describe('剑指 Offer 07. 重建二叉树', () => {
  test('示例 1', function() {
    expect(buildTree([3,9,20,15,7], [9,3,15,20,7])).toEqual(treeNode);
  });
});
