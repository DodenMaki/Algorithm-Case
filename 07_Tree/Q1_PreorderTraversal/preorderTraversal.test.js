var { TreeNode, preorderTraversal } = require('./preorderTraversal.js');

var treeNode1 = new TreeNode(1);
treeNode1.right = new TreeNode(2);
treeNode1.right.left = new TreeNode(3);

var treeNode2 = new TreeNode();

var treeNode3 = new TreeNode(1);

var treeNode4 = new TreeNode(1);
treeNode4.left = new TreeNode(2);

var treeNode5 = new TreeNode(1);
treeNode5.right = new TreeNode(2);

describe('144. 二叉树的前序遍历', () => {
  test('示例 1', function() {
    expect(preorderTraversal(treeNode1)).toEqual([1, 2, 3]);
  });
  test('示例 2', function() {
    expect(preorderTraversal(treeNode2)).toEqual([]);
  });
  test('示例 3', function() {
    expect(preorderTraversal(treeNode3)).toEqual([1]);
  });
  test('示例 4', function() {
    expect(preorderTraversal(treeNode4)).toEqual([1, 2]);
  });
  test('示例 5', function() {
    expect(preorderTraversal(treeNode5)).toEqual([1, 2]);
  });
});
