var { findNumberIn2DArray } = require('./findNumberIn2DArray');

describe('剑指 offer 04. 二维数组中的查找', () => {
  test('示例 1', function() {
    expect(findNumberIn2DArray([
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ], 5)).toBeTruthy();
  });
  test('示例 2', function() {
    expect(findNumberIn2DArray([
      [1,   4,  7, 11, 15],
      [2,   5,  8, 12, 19],
      [3,   6,  9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ], 20)).toBeFalsy();
  });
  test('示例 3', function() {
    expect(findNumberIn2DArray([
      [1, 1]
    ], 2)).toBeFalsy();
  })
});