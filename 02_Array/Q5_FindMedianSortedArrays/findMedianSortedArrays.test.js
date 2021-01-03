var { findMedianSortedArrays } = require('./findMedianSortedArrays.js');

describe('4. 寻找两个正序数组的中位数', () => {
  test('示例 1', function() {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.00000)
  });
  test('示例 2', function() {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.50000)
  });
  test('示例 1', function() {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.00000)
  });
  test('示例 1', function() {
    expect(findMedianSortedArrays([], [1])).toBe(1.00000)
  });
  test('示例 1', function() {
    expect(findMedianSortedArrays([2], [])).toBe(2.00000)
  });
});