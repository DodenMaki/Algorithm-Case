# 树
## 基本概念
### 数的结构
数据结构中的树，首先是对现实世界中树的一层简化：把树根抽象为“根结点”，树枝抽象为“边”，树枝的两个端点抽象为“结点”，树叶抽象为“叶子结点”。

### 数的基本特性
- 树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层，以此类推
- 结点和树的“高度”计算规则：叶子结点高度记为 1，每向上一层高度就加 1，逐层向上累加至目标结点时，所得到的的值就是目标结点的高度。树中结点的最大高度，称为“树的高度”
- “度”的概念：一个结点子树的个数
- “叶子结点”：度为 0 的结点

## 二叉树
### 二叉树的结构
二叉树是指满足以下要求的树：
- 它可以没有根结点，作为一棵空树存在
- 如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

二叉树不能被简单定义为每个结点的度都是 2 的树，在二叉树中，左右子树的位置是严格约定、不能交换的。

在 JavaScript 中，二叉树使用对象来定义。它的结构分为数据域、左侧子结点（左子树根结点）的引用和右侧子结点（右子树根结点）的引用。
```
// 二叉树结点的构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```

### 二叉树的遍历
以一定的顺序规则，逐个访问二叉树的所有结点，这个过程就是二叉树的遍历。按照顺序规则的不同，遍历方式有四种。分别为先序遍历、中序遍历、后序遍历和层次遍历。

按照实现方式的不同，遍历方式又可以分为两种，分别为递归遍历（先、中、后序遍历）和迭代遍历（层次遍历）。这里只表示递归遍历，迭代遍历请见问题案例「二叉树的层序遍历」。

#### 递归函数
编程语言中，函数`func(params)`直接或间接调用函数本身，则该函数称为递归函数。
编写一个递归函数之前，首先要明确：递归式、递归边界
- 递归式：每一次重复的内容
- 递归边界，什么时候停止

在遍历的场景下，当发现遍历的目标树为空的时候，就意味着递归要停止了。

二叉树的定义，就可以理解为是一个递归式的定义。如果要创建一个二叉树结点作为根结点，那么它左侧的子结点和右侧的子结点也都必须符合二叉树结点的定义，这意味着需要反复地执行“创建一个由数据域、左右子树组成的结点”这个动作，直到数据被分配完为止。

#### 遍历方式
先序遍历：根结点 -> 左子树 -> 右子树
```
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if(!root) {
    return;
  }
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}
```

中序遍历，左子树 -> 根结点 -> 右子树：
```
// 所有遍历函数的入参都是树的根结点对象
function inorder(root) {
  // 递归边界，root 为空
  if(!root) {
    return;
  }
  // 递归遍历左子树
  inorder(root.left);
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
  // 递归遍历右子树
  inorder(root.right);
}
```

后序遍历，左子树 -> 右子树 -> 根结点：
```
function postorder(root) {
  // 递归边界，root 为空
  if(!root) {
    return;
  }
  // 递归遍历左子树
  postorder(root.left);
  // 递归遍历右子树
  postorder(root.right);
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
}
```

### 二叉树的问题案例
#### 二叉树的先序遍历
LeetCode：[144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)（难度：中等）

##### 问题描述
给你二叉树的根节点`root`，返回它节点值的前序遍历。
```
示例 1：
  输入: root = [1, null, 2, 3]
  输出: [1, 2, 3]
示例 2：
  输入: root = []
  输出: []
示例 3：
  输入: root = [1]
  输出: [1]
示例 4：
  输入: root = [1, 2]
  输出: [1, 2]
示例 5：
  输入: root = [1, null, 2]
  输出: [1, 2]
```

##### 问题分析
对于二叉树的遍历可以通过简单的递归方式来实现，在这里将通过迭代的方式实现。而递归一直和栈有关联，如果不使用简单的递归方式实现，那么可以通过栈来解决。

这个问题的输出案例中，很像一个栈的出栈的序列。因此，通过合理地安排入栈和出栈的时机，使栈的出栈序列符合二叉树的前序遍历规则。   

先序遍历的规则是，先遍历根结点、然后遍历左孩子、最后遍历右孩子，这就是所期望的出栈序列。按道理，入栈序列和出栈序列相反，似乎应该按照“右、左、根”这样的顺序将结点入栈。不过需要注意的是，先序遍历的起点就是根结点，因此出入栈顺序应该是这样的：  
1. 将根结点入栈
2. 取出栈顶结点，将结点值 push 进结果数组
3. 若栈顶结点有右孩子，则将右孩子入栈；若栈顶结点有左孩子，则将左孩子入栈

这整个过程，本质上是将当前子树的根结点入栈、出栈，随后再将其对应左右子树入栈、出栈的过程。重复2、3步骤，直至栈空，就能得到一个先序遍历序列。 
   
##### 问题实现
```
/**
  * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *   this.val = (val===undefined ? 0 : val)
  *   this.left = (left===undefined ? null : left)
  *   this.right = (right===undefined ? null : right)
  * }
  */
/**
  * @param {TreeNode} root
  * @return {number[]}
  */
const preorderTraversal = function(root) {
  // 定义结果数组
  const res = [];
  // 处理边界条件
  if(!root) {
    return res;
  }
  // 初始化栈结构
  const stack = [];
  // 首先将根结点入栈
  stack.push(root);
  // 若栈不为空，则重复出栈、入栈操作
  while(stack.length) {
    // 将栈顶结点记为当前结点
    const cur = stack.pop();
    // 当前结点就是当前子树的根结点，把这个结点放在结果数组的尾部
    res.push(cur.val);
    // 若当前子树根结点有右孩子，则将右孩子入栈
    if (cur.right) {
      stack.push(cur.right);
    }
    // 若当前子树根结点有左孩子，则将左孩子入栈
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  // 返回结果数组
  return res;
};
```

#### 二叉树的后序遍历
LeetCode：[145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)（难度：中等）

##### 问题描述
给定一个二叉树，返回它的后序遍历。
```
示例：
  输入: root = [1, null, 2, 3]
  输出: [3, 2, 1]
```

##### 问题分析
后序遍历的出栈序列，按照规则应该是“左、右、根” 。这个顺序相对于先序遍历，最明显的变化就是根结点的位置从第一个变成了倒数第一个。在这里，可以直接把先序遍历中`pop`出来的当前结点`unshift`进`res`的头部。

由于填充`res`结果数组的顺序是从后往前填充（每次增加一个头部元素），因此先出栈的结点反而会位于`res`数组相对靠后的位置。出栈的顺序是“当前结点、当前结点的左孩子、当前结点的右孩子”，其对应的`res`序列顺序就是“右、左、根”。这样一来， 根结点就成功地被转移到了遍历序列的最末尾。

现在唯一的问题就是右孩子和左孩子的顺序了，这两个孩子结点进入结果数组的顺序与其被`pop`出栈的顺序是一致的，而出栈顺序又完全由入栈顺序决定，因此只需要相应地调整两个结点的入栈顺序就好了。如此一来，右孩子就会相对于左孩子优先出栈，进而被放在`res`结果数组相对靠后的位置，“左、右、根”的排序规则就稳稳地实现出来了。
   
##### 问题实现
```
/**
  * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *   this.val = (val===undefined ? 0 : val)
  *   this.left = (left===undefined ? null : left)
  *   this.right = (right===undefined ? null : right)
  * }
  */
/**
  * @param {TreeNode} root
  * @return {number[]}
  */
const postorderTraversal = function(root) {
  // 定义结果数组
  const res = [];
  // 处理边界条件
  if (!root) {
    return res;
  }

  // 初始化栈结构
  const stack = [];
  // 首先将根结点入栈
  stack.push(root);

  // 若栈不为空，则重复出栈、入栈操作
  while(stack.length) {
    // 将栈顶结点记为当前结点
    const cur = stack.pop();
    // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
    res.unshift(cur.val);
    // 若当前子树根结点有左孩子，则将左孩子入栈
    if (cur.left) {
      stack.push(cur.left);
    }
    // 若当前子树根结点有右孩子，则将右孩子入栈
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  // 返回结果数组
  return res;
};
```

#### 二叉树的中序遍历
LeetCode：[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)（难度：中等）

##### 问题描述
给定一个二叉树的根节点`root`，返回它的中序遍历。
```
示例 1：
  输入: root = [1, null, 2, 3]
  输出: [1, 3, 2]
示例 2：
  输入: root = []
  输出: []
示例 3：
  输入: root = [1]
  输出: [1]
示例 4：
  输入: root = [1, 2]
  输出: [2, 1]
示例 5：
  输入: root = [1, null, 2]
  输出: [1, 2]
```

##### 问题分析
先序遍历和后序遍历实现的方式基本一致，它们遵循的都是同一套框架。但是中序遍历则不能用同一套框架来实现，本质上是因为先序、后序的出栈与入栈逻辑基本相差不大（都是先处理根结点，然后处理孩子结点）。

但是在中序遍历中，根结点不再出现在遍历序列的边界，而是在遍历序列的中间。这就意味着不能将根结点作为第一个被`pop`出来的元素处理了，也就是随着出栈时机的改变，入栈的逻辑也需要调整。

中序遍历的序列规则是“左、中、右”，因此必须首先定位到最左的叶子结点。在这个定位的过程中，必然会途径目标结点的父结点、爷爷结点和各种辈分的祖宗结点。途径过的每一个结点，都要及时地把它入栈。这样当最左的叶子结点出栈时，第一个回溯到的就是它的父结点。有了父结点，就能够找到兄弟结点，遍历结果就出来了。

##### 问题实现
```
/**
  * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *   this.val = (val===undefined ? 0 : val)
  *   this.left = (left===undefined ? null : left)
  *   this.right = (right===undefined ? null : right)
  * }
  */
/**
  * @param {TreeNode} root
  * @return {number[]}
  */
const inorderTraversal = function(root) {
  // 定义结果数组
  const res = [];
  // 初始化栈结构
  const stack = [];

  // 用一个 cur 结点充当游标
  let cur = root;
  // 当 cur 不为空、或者 stack 不为空时，重复以下逻辑
  while (cur || stack.length) {
    // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来
    while(cur) {
      // 将途径的结点入栈
      stack.push(cur);
      // 继续搜索当前结点的左孩子
      cur = cur.left;
    }
    // 取出栈顶元素
    cur = stack.pop();
    // 将栈顶元素入栈
    res.push(cur.val);
    // 尝试读取 cur 结点的右孩子
    cur = cur.right;
  }
  // 返回结果数组
  return res;
};
```
