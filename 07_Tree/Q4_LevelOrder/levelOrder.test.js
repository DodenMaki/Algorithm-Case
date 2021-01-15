var { TreeNode, levelOrder } = require('./levelOrder.js');

var treeNode1 = new TreeNode(3);
treeNode1.left = new TreeNode(9);
treeNode1.right = new TreeNode(20);
treeNode1.right.left = new TreeNode(15);
treeNode1.right.right = new TreeNode(7);

describe('102. 二叉树的层序遍历', () => {
  test('示例 1', function () {
    expect(levelOrder(treeNode1)).toEqual([
      [3],
      [9, 20],
      [15, 7]
    ]);
  });
});
