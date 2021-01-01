var { findRepeatNumber } = require('./findRepeatNumber');

describe('剑指 offer 03. 数组中重复的数组', () => {
  test('示例 1', function() {
    expect(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])).toBe(2);
  });
});