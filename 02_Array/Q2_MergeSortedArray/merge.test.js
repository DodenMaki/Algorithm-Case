var { merge } = require('./merge.js');

describe('88. 合并两个有序数组', () => {
  test('示例 1', function() {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  });
});